/**
 * 25e44.js
 * Functions used in butiran/25e44 note
 *
 * Author: Sparisoma Viridi (https://github.com/dudung)
 * Created: 2025-05-22
 *
 * Exported:
 * - createElement(tagName, arg2, arg3)
 * - addTextToTextarea(txa, str)
 */


/**
 * Creates an HTML element with required tag name, and optional style and ID.
 *
 * @param {string} tagName - The HTML tag name (e.g., 'div', 'span').
 * @param {Object|string} [arg2] - Either a style object or an ID string.
 * @param {Object|string} [arg3] - Either a style object or an ID string.
 * @returns {HTMLElement} The configured HTML element.
 */
function createElement(tagName, arg2, arg3) {
  if (!tagName || typeof tagName !== 'string') {
    throw new Error('tagName must be a non-empty string');
  }

  let id;
  let style;

  for (const arg of [arg2, arg3]) {
    if (typeof arg === 'string') {
      id = arg;
    } else if (arg && typeof arg === 'object') {
      style = arg;
    }
  }

  const el = document.createElement(tagName);

  if (id) el.id = id;
  if (style) Object.assign(el.style, style);
  
  if (el instanceof HTMLCanvasElement) {
    el.width = "";
    el.height = "";
  }
  
  return el;
}


/**
 * Appends a string to a textarea's content, inserting a newline if the textarea is not empty.
 *
 * If the textarea already contains text, the new string is appended on a new line. Otherwise, the string is inserted as the initial value.
 *
 * @param {HTMLTextAreaElement} txa - The textarea DOM element to modify.
 * @param {string} str - The string to append to the textarea's value.
 *
 * @example
 * // Assuming <textarea id="log"></textarea>
 * const txa = document.getElementById("log");
 * addTextToTextarea(txa, "Hello");
 * addTextToTextarea(txa, "World");
 * // Resulting value in textarea:
 * // Hello
 * // World
 */
function addTextToTextarea(txa, str) {
  if (txa.value === "") {
    txa.value += str;
  } else {
    txa.value += "\n" + str;
  }
}


function detectDelimiterFromText(text) {
  const delimiters = {
    "\n": (text.match(/\n/g) || []).length,
    " ": (text.match(/ /g) || []).length,
    ",": (text.match(/,/g) || []).length,
    ";": (text.match(/;/g) || []).length
  };

  // Find the delimiter with the highest count
  const detected = Object.entries(delimiters).sort((a, b) => b[1] - a[1])[0];
  
  
  const val = (detected[0] === "\n" ? "\\n" : `"${detected[0]}"`);
  return val;
  
  if (detected[1] === 0) {
    alert("No delimiter found.");
  } else {
    alert("Detected delimiter: " + (detected[0] === "\n" ? "\\n" : `"${detected[0]}"`));
  }
}
