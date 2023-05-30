///////////////////////////////// Console  ////////////////////////////////////////////////////

/**
 * @description  A lighter syntax than console.log() 
 * in the ruby way
 * @constructor
 * @param {any} args - List of arguments to display in console.
 */
export const w = (...def) => {
  console.log(...def);
};


//////////////////////////////////  Text Manipulation  ///////////////////////////////////////

/**
 * We  use Math.random() to generate a random string
 * @returns {string} 
 */
export const randomString = () => Math.random().toString(36).slice(2)

/* String manipulation */


/**
 * @description List of small words, depending of langage. 
 * Used for keyword research or titleization.
 */
const smallEnglishWords = ['a', 'an', 'and', 'as', 'at', 'but', 'by', 'for', 'if', 'in', 'into', 'nor', 'of', 'on', 'or', 'out', 'so', 'the', 'to', 'up', 'yet', 'and', 'as', 'at', 'but', 'by', 'for', 'if', 'in', 'into', 'nor', 'of', 'on', 'or', 'out', 'so', 'the', 'to', 'up', 'yet'];

const smallFrenchWords = ['&', 'a', 'à', 'alors', 'aux', 'car', 'comme', 'dans', 'de', 'déjà', 'déja', 'donc', 'en', 'encore', 'et', 'hors', "jusqu'à", 'la', 'le', 'les', 'mais', 'ni', 'ou', 'par', 'pour', 'si', 'sur', 'un', 'une', 'vers', 'vs',];


/**
 * @description Excape HTML special characters
 * @param {*} str 
 * @returns  string 
 */
export const escapeHtmlCharacters = (str) => str.replace(/[&<>"']/g, (m) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]))


/**
 * @description titleize a text ignoring small words
 * @param {*} title 
 * @param {*} lang 
 * @returns {str} - titlelise 
 */
export const titleize = (title, lang = 'fr') => {
  let isSmallWord
  return title.split(' ').map((word, index) => {
    isSmallWord = (lang =='fr') ? smallFrenchWords.includes(word) : smallEnglishWords.includes(word)
    if (index !== 0 && isSmallWord) {
      return word.toLowerCase();
    } else {
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    }
  }).join(' ');
}

/**
 * @description  Convert a string to camelCase
 * @param {*} str 
 * @returns str
 */
export const toCamelCase = (str) => str.trim().replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ''));



/**
 * @description The function takes a string as input, splits it into an array of characters, reverses the order of
 * the characters, and then joins them back together into a new string.
 * @param str - The input string that needs to be reversed.
 */
export const reverseString = (str) => str.split('').reverse().join('');


//////////////////////////////  Iterables   //////////////////////////////////////////////////////////

/**
 * @description Remove the duplicates of the array, using “Set”
 * @param {*} arr 
 * @returns 
 */
export const removeDuplicates = (arr) => [...new Set(arr)]


/**
 *Returns the last element of an iterable *
 * @param {*} arr
 * @return {*} 
 */
const last=(arr) => {
  return typeof arr == 'object' ? arr[arr.length-1] : false
}

/**
 *Returns the first element of an iterable
 *
 * @param {*} arr
 * @return {*} 
 */
const first=(arr) => {
  return typeof arr == 'object' ? arr[0] : false
}



//////////////////////////////  Conversion   //////////////////////////////////////////////////////////

/* A function that takes an integer and returns a roman numeral. */
/**
 * While the decimal value of the current index is less than or equal to the input integer, add the
 * corresponding roman numeral to the output string and subtract the decimal value from the input
 * integer.
 * @param int - The number to be converted to a roman numeral
 * @returns The roman numeral equivalent of the number passed in.
 */
function parseToRoman(int) {
  if (int === 0) return "zero does not exist in the Roman numeral system"
  if (int < 0) return "No negative number conversion"
  if (!Number.isInteger(int)) return "The number must be an integer"
  
  var roman = "";
  var romanNumeral = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  var decimal =      [1000, 900, 500, 400, 100,   90,  50,   40,  10,     9,   5,    4,  1 ];
  for (let i = 0; i < decimal.length; i++) {
    while (decimal[i] <= int) {
      roman += romanNumeral[i];
      int -= decimal[i];
    }
  }
  return roman;
}