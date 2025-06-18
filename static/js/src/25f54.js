/**
 * 25f54.js
 * Functions used in butiran/25f53 note
 *
 * Author: Sparisoma Viridi (https://github.com/dudung)
 * Created: 2025-06-18
 *
 * Exported:
 * - addContainerWall2(el)
 * - addMovementProbabilityMatrix2(el)
 * -  addAgents2(el)
 */


/**
 * Inserts predefined wall definitions representing a container into a textarea element.
 *
 * This function appends wall definitions to the provided textarea-like element using `addTextToTextarea`. Each wall is defined using the "WALL" keyword followed by:
 *   - Two pairs of coordinates (x1, y1, x2, y2) defining the endpoints of the wall,
 *   - A wall thickness or type parameter (e.g., 16).
 *
 * The two walls likely form the vertical boundaries of a container (e.g., for grains) in a simulation space. A comment line is included at the top to indicate the purpose.
 *
 * Format per line:
 *   "WALL x1 y1 x2 y2 t"
 *     - x1, y1: Starting point of the wall
 *     - x2, y2: Ending point of the wall
 *     - t: Wall type or thickness
 *
 * @param {HTMLElement} el - The textarea DOM element to which the wall definitions are appended.
 */
function addContainerWall2(el) {
  addTextToTextarea(el, "# Grains container");
  addTextToTextarea(el, "WALL 15 11 15 29 16");
  addTextToTextarea(el, "WALL 24 11 24 29 16");
}


/**
 * Inserts predefined movement probability matrices (MPMAT) into a textarea element.
 *
 * This function appends multiple movement probability matrices for different agent types into the given textarea element using `addTextToTextarea`. Each matrix is associated with a specific agent type and consists of three rows of three floating-point numbers, which likely represent directional movement probabilities in a 3x3 neighborhood.
 *
 * The format is:
 *   - "MPMAT <type>" declares the agent type,
 *   - Followed by 3 lines of 3 probabilities (row-wise),
 *   - A blank line separates different matrices.
 *
 * Agent types in this function:
 *   - 48: Fully downward-biased movement (0.50 down-left, 0.50 down),
 *   - 41: Heavily favors straight down (0.80) with slight diagonal movement,
 *   - 43: Prefers down and down-right (0.50 each).
 *
 * @param {HTMLElement} el - The textarea DOM element to which the matrices are appended.
 */
function addMovementProbabilityMatrix2(el) {
  addTextToTextarea(el, "# Movement probability matrix");
  addTextToTextarea(el, "MPMAT 48");
  addTextToTextarea(el, "0.12 0.12 0.12");
  addTextToTextarea(el, "0.12 0.04 0.12");
  addTextToTextarea(el, "0.12 0.12 0.12");
  addTextToTextarea(el, "");

  addTextToTextarea(el, "MPMAT 41");
  addTextToTextarea(el, "0.00 0.00 0.00");
  addTextToTextarea(el, "0.16 0.17 0.16");
  addTextToTextarea(el, "0.17 0.17 0.17");
  addTextToTextarea(el, "");

  addTextToTextarea(el, "MPMAT 43");
  addTextToTextarea(el, "0.00 0.00 0.00");
  addTextToTextarea(el, "0.00 0.00 0.00");
  addTextToTextarea(el, "0.00 1.00 0.00");
}


/**
 * Inserts a predefined set of AGENT entries into a textarea element.
 *
 * This function adds multiple lines of agent definitions into a textarea-like element using the `addTextToTextarea` function. Each agent is defined by a line in the format: "AGENT x y t", where:
 *   - `x` and `y` represent the agent's grid coordinates,
 *   - `t` represents the agent type.
 *
 * The agents are grouped into three blocks, possibly representing different categories or locations of agents. Blank lines separate these blocks.
 *
 * @param {HTMLElement} el - The textarea DOM element to which the agent lines are appended.
 */
function addAgents2(el) {
  addTextToTextarea(el, "# Agents");
  addTextToTextarea(el, "AGENT 10 10 48");
  addTextToTextarea(el, "AGENT 11 11 48");
  addTextToTextarea(el, "AGENT 12 10 48");
  addTextToTextarea(el, "AGENT 13 11 48");
  addTextToTextarea(el, "AGENT 10 12 48");
  addTextToTextarea(el, "AGENT 11 13 48");
  addTextToTextarea(el, "AGENT 12 12 48");
  addTextToTextarea(el, "AGENT 13 13 48");
  addTextToTextarea(el, "");

  addTextToTextarea(el, "AGENT 18 15 41");
  addTextToTextarea(el, "AGENT 19 16 41");
  addTextToTextarea(el, "AGENT 20 15 41");
  addTextToTextarea(el, "AGENT 21 16 41");
  addTextToTextarea(el, "AGENT 18 17 41");
  addTextToTextarea(el, "AGENT 19 18 41");
  addTextToTextarea(el, "AGENT 20 17 41");
  addTextToTextarea(el, "AGENT 21 18 41");
  addTextToTextarea(el, "");

  addTextToTextarea(el, "AGENT 27 13 43");
  addTextToTextarea(el, "AGENT 28 14 43");
  addTextToTextarea(el, "AGENT 29 13 43");
  addTextToTextarea(el, "AGENT 30 14 43");
  addTextToTextarea(el, "AGENT 27 15 43");
  addTextToTextarea(el, "AGENT 28 16 43");
  addTextToTextarea(el, "AGENT 29 15 43");
  addTextToTextarea(el, "AGENT 30 16 43");
}


// marker: 25f54.js
(() => {
  console.log("[marker] 25f54.js loaded");
})();
