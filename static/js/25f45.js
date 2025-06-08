/**
 * 25f45.js
 * Functions used in butiran/25f45 note
 *
 * Author: Sparisoma Viridi (https://github.com/dudung)
 * Created: 2025-06-08
 *
 * Exported:
 * - drawWall(m, p1, p2, w)
 */


/**
 * Draws a straight wall on a 2D matrix `m` from point `p1` to `p2` using Bresenham's line algorithm.
 *
 * @param {number[][]} m - 2D matrix representing the simulation world (rows × columns).
 * @param {[number, number]} p1 - Starting coordinate as [x, y] (column, row).
 * @param {[number, number]} p2 - Ending coordinate as [x, y] (column, row).
 * @param {number} w - Wall type or value to fill into each cell along the wall.
 *
 * @returns {void} - The matrix `m` is modified in-place; function does not return anything.
 *
 * @example
 * let m = Array.from({ length: 10 }, () => Array(10).fill(0));
 * drawWall(m, [3, 2], [5, 2], 1);  // Horizontal wall at row 2 from col 3 to 5
 * drawWall(m, [0, 0], [5, 5], 2);  // Diagonal wall from top-left to center
 * drawWall(m, [7, 0], [7, 4], 3);  // Vertical wall in column 7 from row 0 to 4
 */
function drawWall(m, p1, p2, w) {
  const [x1, y1] = p1;
  const [x2, y2] = p2;

  const rows = m.length;
  const cols = m[0].length;

  const dx = Math.abs(x2 - x1);
  const dy = -Math.abs(y2 - y1);
  const sx = x1 < x2 ? 1 : -1;
  const sy = y1 < y2 ? 1 : -1;
  let err = dx + dy;

  let x = x1;
  let y = y1;

  while (true) {
    if (x >= 0 && x < cols && y >= 0 && y < rows) {
      m[y][x] = w;  // m[row][col] = m[y][x]
    }

    if (x === x2 && y === y2) break;
    const e2 = 2 * err;
    if (e2 >= dy) {
      err += dy;
      x += sx;
    }
    if (e2 <= dx) {
      err += dx;
      y += sy;
    }
  }
}


/**
 */ 
function addWorldAndWalls(el) {
  addTextToTextarea(el, "WORLD 10 10");
  addTextToTextarea(el, "WALL 2 2 2 8 10");
  addTextToTextarea(el, "WALL 2 8 5 8 10");
  addTextToTextarea(el, "WALL 5 8 2 2 10");
}


// marker: 25f45.js
(() => {
  console.log("[marker] 25f45.js loaded");
})();
