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
 */


/**
 *
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
  addTextToTextarea(el, "");

  addTextToTextarea(el, "# Movement probability matrix");
  addTextToTextarea(el, "MPMAT 48");
  addTextToTextarea(el, "0.00 0.00 0.00");
  addTextToTextarea(el, "0.00 0.00 0.00");
  addTextToTextarea(el, "0.00 1.00 0.00");
  addTextToTextarea(el, "");
  addTextToTextarea(el, "MPMAT 41");
  addTextToTextarea(el, "0.00 0.00 0.00");
  addTextToTextarea(el, "0.00 0.00 0.00");
  addTextToTextarea(el, "0.00 1.00 0.00");
  addTextToTextarea(el, "");
  addTextToTextarea(el, "MPMAT 43");
  addTextToTextarea(el, "0.00 0.00 0.00");
  addTextToTextarea(el, "0.00 0.00 0.00");
  addTextToTextarea(el, "0.00 1.00 0.00");
  addTextToTextarea(el, "");
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



// marker: 25f49.js
(() => {
  console.log("[marker] 25f49.js loaded");
})();
