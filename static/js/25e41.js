/**
 * 25e41.js
 * Functions used in butiran/25e41 note
 *
 * Author: Sparisoma Viridi (https://github.com/dudung)
 * Created: 2025-05-21
 *
 * Exported:
 * - createElement(tagName, arg2, arg3)
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

  return el;
}
