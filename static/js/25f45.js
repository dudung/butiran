/**
 * 25f45.js
 * Functions used in butiran/25f45 note
 *
 * Author: Sparisoma Viridi (https://github.com/dudung)
 * Created: 2025-06-08
 *
 * Exported:
 * - 
 */


/**
 */ 
function addWorldAndWalls(el) {
  addTextToTextarea(el, "WORLD 100 100");
  addTextToTextarea(el, "HWALL 10 10 90");
  addTextToTextarea(el, "HWALL 90 10 90");
  addTextToTextarea(el, "VWALL 40 20 80");
  addTextToTextarea(el, "VWALL 70 20 80");
}


// marker: 25f45.js
(() => {
  console.log("[marker] 25f45.js loaded");
})();
