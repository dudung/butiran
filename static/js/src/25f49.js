/**
 * 25f49.js
 * Functions used in butiran/25f49 note
 *
 * Author: Sparisoma Viridi (https://github.com/dudung)
 * Created: 2025-06-15
 *
 * Exported:
 * - addAgents(el)
 * - drawAgent(m, p, w)
 * - getBlocksFromTextarea(el, key, row)
 */


/**
 * Writes a formatted block of agent-based model (ABM) input data into a given HTML textarea element.
 *
 * @param {HTMLTextAreaElement} el - The textarea element where the agent input text will be inserted.
 *
 * The function uses a helper `addTextToTextarea(el, text)` to append each line of ABM configuration.
 * It generates:
 * - Metadata (title, format version, author, date)
 * - World dimensions
 * - Movement probability matrices (MPMAT) for different agent types
 * - A list of agents with positions and types
 *
 * The text follows a specific input format intended for simulation or further processing.
 *
 * Example of inserted content:
 *   # ABM Agents Input
 *   # Format Version: 1.1
 *   WORLD 40 40
 *   MPMAT 48
 *   ...
 *   AGENT 11 10 48
 *   ...
 */
 function addAgents(el) {
  addTextToTextarea(el, "# ABM Agents Input");
  addTextToTextarea(el, "# Format Version: 1.1");
  addTextToTextarea(el, "# Author: [Your Name]");
  addTextToTextarea(el, "# Date: 2025-06-15");
  addTextToTextarea(el, "");

  addTextToTextarea(el, "# World dimensions");
  addTextToTextarea(el, "WORLD 40 40");
  addTextToTextarea(el, "");

  addTextToTextarea(el, "# Movement probability matrix");
  addTextToTextarea(el, "MPMAT 48");
  addTextToTextarea(el, "0.00 0.00 0.00");
  addTextToTextarea(el, "0.00 0.00 0.00");
  addTextToTextarea(el, "0.50 0.50 0.00");
  addTextToTextarea(el, "");

  addTextToTextarea(el, "MPMAT 41");
  addTextToTextarea(el, "0.00 0.00 0.00");
  addTextToTextarea(el, "0.00 0.00 0.00");
  addTextToTextarea(el, "0.10 0.80 0.10");
  addTextToTextarea(el, "");

  addTextToTextarea(el, "MPMAT 43");
  addTextToTextarea(el, "0.00 0.00 0.00");
  addTextToTextarea(el, "0.00 0.00 0.00");
  addTextToTextarea(el, "0.00 0.50 0.50");
  addTextToTextarea(el, "");

  addTextToTextarea(el, "# Agents");
  addTextToTextarea(el, "AGENT 11 10 48");
  addTextToTextarea(el, "AGENT 12 11 48");
  addTextToTextarea(el, "AGENT 13 10 48");
  addTextToTextarea(el, "AGENT 14 11 48");
  addTextToTextarea(el, "AGENT 11 12 48");
  addTextToTextarea(el, "AGENT 12 13 48");
  addTextToTextarea(el, "AGENT 13 12 48");
  addTextToTextarea(el, "AGENT 14 13 48");
  addTextToTextarea(el, "");

  addTextToTextarea(el, "AGENT 19 12 41");
  addTextToTextarea(el, "AGENT 20 13 41");
  addTextToTextarea(el, "AGENT 21 12 41");
  addTextToTextarea(el, "AGENT 22 13 41");
  addTextToTextarea(el, "AGENT 19 14 41");
  addTextToTextarea(el, "AGENT 20 15 41");
  addTextToTextarea(el, "AGENT 21 14 41");
  addTextToTextarea(el, "AGENT 22 15 41");
  addTextToTextarea(el, "");

  addTextToTextarea(el, "AGENT 27 11 43");
  addTextToTextarea(el, "AGENT 28 12 43");
  addTextToTextarea(el, "AGENT 29 11 43");
  addTextToTextarea(el, "AGENT 30 12 43");
  addTextToTextarea(el, "AGENT 27 13 43");
  addTextToTextarea(el, "AGENT 28 14 43");
  addTextToTextarea(el, "AGENT 29 13 43");
  addTextToTextarea(el, "AGENT 30 14 43");
}


/**
 * Draws or places an agent on a 2D grid matrix at a specified position.
 *
 * @param {Array<Array<any>>} m - A 2D array (matrix) representing the environment or grid.
 * @param {[number, number]} p - A 2-element array specifying the [x, y] position (column, row) on the matrix.
 * @param {any} w - The value to assign to the specified position in the matrix (e.g., agent's symbol or ID).
 *
 * The function modifies the matrix in place by setting `m[y][x] = w`.
 */
 function drawAgent(m, p, w) {
  const [x, y] = p;
  m[y][x] = w;  // m[row][col] = m[y][x]
}


/**
 * Extracts blocks of text from a textarea element based on a given key and row count.
 *
 * @param {HTMLTextAreaElement} el - The textarea element containing multi-line text input.
 * @param {string} key - The keyword that identifies the beginning of each block (must be followed by a space).
 * @param {number} row - The number of lines to include after the key line (inclusive of the key line).
 *
 * @returns {Array<Array<string>>} An array of blocks, where each block is an array of strings
 *                                 representing consecutive lines (key line + `row` lines after it).
 *
 * The function scans the textarea line-by-line. Whenever it finds a line starting with the given key,
 * it collects that line and the next `row` lines as a block and adds it to the result.
 *
 * Example:
 *   Textarea content:
 *     MPMAT 48
 *     0.0 0.0 0.0
 *     0.0 0.0 0.0
 *     0.0 1.0 0.0
 *     ...
 *
 *   getBlocksFromTextarea(el, "MPMAT", 3) will return:
 *     [
 *       ["MPMAT 48", "0.0 0.0 0.0", "0.0 0.0 0.0", "0.0 1.0 0.0"]
 *     ]
 */
function getBlocksFromTextarea(el, key, row) {
  const lines = el.value.split("\n");
  const blocks = [];
  let j = 0;
  for(l of lines) {
    if (l.indexOf(key + " ") === 0) {
      const b = [];
      for(let k = 0; k <= row; k++) {
        b.push(lines[j + k]);
      }
      blocks.push(b);
    }
    j++;
  }
  return blocks;
}


/*
 *
 */
function getMatrixAfterKeyWord(key, block, dims) {
  console.log(block);
  return [];
}


// marker: 25f49.js
(() => {
  console.log("[marker] 25f49.js loaded");
})();
