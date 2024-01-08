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
export const toCamelCase = (str) => str.trim().replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ''))


/**
 * @description  Convert a String in Snake Case to Camel Case
 * @param {*} str 
 * @returns str
 */
export const snakeToCamelCase = (s) => s.toLowerCase().replace(/(_\w)/g, (w) => w.toUpperCase().substr(1))


/**
 * @description The function takes a string as input, splits it into an array of characters, reverses the order of
 * the characters, and then joins them back together into a new string.  Immutable : Do not modify the str variable
 * @param str - The input string that needs to be reversed.
 * @returns new str 
 */
export const reverseString = (str) => str.split('').reverse().join('')


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
export const last=(arr) => {
  return typeof arr == 'object' ? arr[arr.length-1] : false
}

/**
 *Returns the first element of an iterable
 *
 * @param {*} arr
 * @return {*} 
 */
export const first=(arr) => {
  return typeof arr == 'object' ? arr[0] : false
}
/**
 * Ensurie that two arrays contain the same elements (in any order) 
 * and that these elements occur the same number of times in both arrays. *
 * @param {*} arr1
 * @param {*} arr2
 */
export const areEqual = (arr1, arr2) =>
  arr1.sort().join(',') === arr2.sort().join(',');



//////////////////////////////  Conversion   //////////////////////////////////////////////////////////

/* A function that takes an integer and returns a roman numeral. */
/**
 * While the decimal value of the current index is less than or equal to the input integer, add the
 * corresponding roman numeral to the output string and subtract the decimal value from the input
 * integer.
 * @param int - The number to be converted to a roman numeral
 * @returns The roman numeral equivalent of the number passed in.
 */
export const parseToRoman= (int)=> {
  if (int === 0) return "zero does not exist in the Roman numeral system"
  if (int < 0) return "No negative number conversion"
  if (!Number.isInteger(int)) return "The number must be an integer"
  
  let roman = ""
  let romanNumeral = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
  let decimal =      [1000, 900, 500, 400, 100,   90,  50,   40,  10,     9,   5,    4,  1 ]

  for (let i = 0; i < decimal.length; i++) {
    while (decimal[i] <= int) {
      roman += romanNumeral[i]
      int -= decimal[i]
    }
  }
  return roman
}

/**
 * convert a Map object to a JSON string without losing any information:
 * * @param {*} map
 */
export const mapToJson = (map) => JSON.stringify(Object.fromEntries(map))

/**
 * convert a JSON object to a Map object :
 * * @param {*} json
 */
export const jsonToMap = (json) => new Map(Object.entries(JSON.parse(json)))


//////////////////////////////////// random generation ////////////////////////////////////////

/**
 * The function generates a random hexadecimal color code by generating a random decimal number,
 * converting it to hexadecimal,
 * and then formatting it to ensure it has 6 characters with trailing zeros if necessary.
 * @return str 
 */
export const randomHexColor = () => `#${Math.random().toString(16).slice(2, 8).padEnd(6, '0')}`

/**
 * Generate a Random UUID
 * UUID is an acronym for University Unique Identifier. 
 * UUID is a 128-bit value that uniquely identifies an object or entity on the internet.
 * @param {*} a
 */
export const generateRandomUUID = (a) =>
  a
    ? (a ^ ((Math.random() * 16) >> (a / 4))).toString(16)
    : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(
        /[018]/g,
        generateRandomUUID
      );