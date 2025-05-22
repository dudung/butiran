/**
 * 25e41.js
 * Functions used in butiran/25e41 note
 *
 * Author: Sparisoma Viridi (https://github.com/dudung)
 * Created: 2025-05-21 -- 22
 *
 * Exported:
 * - createElement(tagName, arg2, arg3)
 * - createZeroMatrix(row, col)
 * - addTextToTextarea(txa, str)
 * - getColor(num)
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
 * Creates a 2D matrix (array of arrays) filled with zeros.
 *
 * @param {number} row - The number of rows in the matrix.
 * @param {number} col - The number of columns in each row of the matrix.
 * @returns {number[][]} A 2D matrix of dimensions row x col filled with 0s.
 *
 * @example
 * createZeroMatrix(2, 3);
 * // Returns:
 * // [
 * //   [0, 0, 0],
 * //   [0, 0, 0]
 * // ]
 */
function createZeroMatrix(row, col) {
  const mat = [];
  for(let r = 0; r < row; r++) {
    const rs = [];
    for(let c = 0; c < col; c++) {
      rs.push(0);
    }
    mat.push(rs);
  }
  return mat;
}


/**
 * Converts a 2D matrix (array of arrays) into a formatted string.
 *
 * Each row of the matrix is converted into a string with space-separated values, and rows are separated by newline characters (`\n`).
 *
 * @param {number[][]} m - A 2D matrix to convert to string.
 * @returns {string} A string representation of the matrix with rows separated by newlines and columns separated by spaces.
 *
 * @example
 * matrixToStr([
 *   [1, 2, 3],
 *   [4, 5, 6]
 * ]);
 * // Returns:
 * // "1 2 3\n4 5 6"
 */
function matrixToStr(m) {
  let s = "";
  const row = m.length;
  for(let r = 0; r < row; r++) {
    let rs = ""
    const col = m[r].length;
    for(let c = 0; c < col; c++) {
      rs += m[r][c];
      if(c < col-1) {
        rs += " ";
      }
    }
    s += rs;
    if(r < row-1) {
      s += "\n";
    }
  }
  return s;
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


/**
 * getColor - Returns a hexadecimal color code based on a numeric code between 10 and 99.
 *
 * Categories:
 *   1x — Wall (grayscale)
 *   2x — Vacuum & Gas (blue-gray tones)
 *   3x — Fluid (cyan to blue)
 *   4x — Solid (primary and distinct colors)
 *   5x — Charge (diverging: red to blue)
 *   6x — Source (warm gradient)
 *   7x — Sink (cool gradient)
 *   8x — Interface/Boundary (metallic & neutral)
 *   9x — Field (spectrum/rainbow)
 *
 * @param {number} num - A number between 10 and 99 representing category and type.
 * @returns {string} - A hexadecimal color code string.
 */
function getColor(num) {
  const palette = {
    1: [ // Wall (grayscale)
      "#ffffff", "#eeeeee", "#dddddd", "#cccccc", "#bbbbbb",
      "#aaaaaa", "#999999", "#888888", "#777777", "#666666"
    ],
    2: [ // Vacuum & Gas (blue-gray)
      "#001f3f", "#003366", "#004c8c", "#0066b2", "#3385cc",
      "#66a3e0", "#99c2eb", "#cce0f5", "#e6f0fa", "#f2f8fd"
    ],
    3: [ // Fluid (cyan to blue)
      "#e0f7fa", "#b2ebf2", "#80deea", "#4dd0e1", "#26c6da",
      "#00bcd4", "#00acc1", "#0097a7", "#00838f", "#006064"
    ],
    4: [ // Solid (distinct colors)
      "#1e88e5", "#00acc1", "#43a047", "#fdd835", "#d81b60",
      "#e53935", "#8e24aa", "#6d4c41", "#fb8c00", "#5e35b1"
    ],
    5: [ // Charge (red-blue diverging)
      "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#f7f7f7",
      "#d1e5f0", "#92c5de", "#4393c3", "#2166ac", "#053061"
    ],
    6: [ // Source (warm gradient)
      "#fff3e0", "#ffe0b2", "#ffcc80", "#ffb74d", "#ffa726",
      "#ff9800", "#fb8c00", "#f57c00", "#ef6c00", "#e65100"
    ],
    7: [ // Sink (cool gradient)
      "#e3f2fd", "#bbdefb", "#90caf9", "#64b5f6", "#42a5f5",
      "#2196f3", "#1e88e5", "#1976d2", "#1565c0", "#0d47a1"
    ],
    8: [ // Interface/Boundary (metallic & neutral)
      "#c0c0c0", "#a9a9a9", "#808080", "#696969", "#4d4d4d",
      "#ffd700", "#daa520", "#b8860b", "#8b8000", "#6b8e23"
    ],
    9: [ // Field (rainbow/spectrum)
      "#d73027", "#fc8d59", "#fee08b", "#d9ef8b", "#91cf60",
      "#1a9850", "#66bd63", "#3288bd", "#5e4fa2", "#2c7bb6"
    ]
  };

  const type = Math.floor(num / 10);
  const variant = num % 10;

  if (palette[type] && palette[type][variant] !== undefined) {
    return palette[type][variant];
  }
  return "#fff"; // fallback
}
