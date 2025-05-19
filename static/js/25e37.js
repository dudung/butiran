/**
 * 25e37.js
 * Functions used in butiran/25e37 note
 *
 * Author: Sparisoma Viridi (https://github.com/dudung)
 * Created: 2025-05-19
 *
 * Exported:
 * - createDiv(width, height, stroke, fill)
 * - createTextarea(width, height)
 * - createButton(width, height, caption)
 * - addTextToTextarea(el, lines)
 * - getCoords()
 * - shuffle(arr)
 * - createPopulation(arr, n)
 * - joinNestedArrays(arr)
 */


/**
 * Creates a styled div element.
 * @param {number} width - Width of the div.
 * @param {number} height - Height of the div.
 * @param {string} stroke - Stroke color.
 * @param {string} fill - Fill color.
 * @returns {HTMLDivElement}
 */
function createDiv(width, height, stroke, fill) {
  const div = document.createElement("div");
  div.style.width = width + "px";
  div.style.height = height + "px";
  div.style.border = "0.5px solid " + stroke;
  div.style.background = fill;
  return div;
}


/**
 * Creates a styled textarea element.
 * @param {number} width - Width of the textarea.
 * @param {number} height - Height of the textarea.
 * @returns {HTMLTextareaElement}
 */
function createTextarea(width, height) {
  const txa = document.createElement("textarea");
  txa.style.width = width + "px";
  txa.style.height = height + "px";
  txa.style.overflowY = "scroll";
  return txa;
}


/**
 * Creates a styled button element.
 * @param {number} width - Width of the button.
 * @param {number} height - Height of the button.
 * @param {string} caption - Caption of the button.
 * @returns {HTMLButtonElement}
 */
function createButton(width, height, caption) {
  const btn = document.createElement("button");
  btn.style.width = width + "px";
  btn.style.height = height + "px";
  btn.innerHTML = caption;
  return btn;
}


/**
 * Adds multiple lines of text to a textarea element.
 * @param {HTMLTextAreaElement} el - The textarea element to append text to.
 * @param {string[]} lines - An array of strings to be added as lines.
 * @returns {void}
 */
function addTextToTextarea(el, lines) {
  for(let l of lines) {
    el.value += l + "\n";
  }
}


/**
 * Generates an array of coordinate objects from predefined x and y values.
 * Each coordinate object has `x` and `y` properties from corresponding indices.
 *
 * @returns {Array<{x: number, y: number}>} Array of coordinate objects.
 */
function getCoords() {
  const x = [0, 5, 9, 8, 4, 1, 3, 7, 6, 2];
  const y = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const n = 10;
  const Coords = [];
  for(let i = 0; i < n; i++) {
    const coord = {
      x: x[i],
      y: y[i],
    };
    Coords.push(coord);
  }
  return Coords;
}


/**
 * Randomly shuffles the elements of an array in place using the Fisher–Yates algorithm.
 *
 * This function modifies the original array, ensuring that all possible permutations are equally likely.
 *
 * @param {any[]} arr - The array to be shuffled. The array is modified in place.
 * @returns {any[]} The shuffled array (same reference as the input).
 *
 * @example
 * const numbers = [1, 2, 3, 4, 5];
 * shuffle(numbers);
 * console.log(numbers); // [3, 1, 5, 2, 4] (example output; actual result will vary)
 */
function shuffle(array) {
  const arr = array.slice(); // Create a shallow copy to avoid mutating original
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
  }
  return arr;
}


/**
 * Generates a population of randomly shuffled arrays (chromosomes).
 *
 * This function creates a population of `n` chromosomes by shuffling the elements of the input array `arr`. Each chromosome is a new permutation of the original array. Useful in genetic algorithms where initial populations are composed of permutations.
 *
 * @param {Array} arr - The array representing a single chromosome or gene pool.
 * @param {number} n - The number of individuals (chromosomes) to generate in the population.
 * @returns {Array<Array>} An array of `n` chromosomes, each a shuffled permutation of `arr`.
 *
 * @example
 * const genePool = [1, 2, 3];
 * const population = createPopulation(genePool, 2);
 * // Example output: [[3, 1, 2], [2, 3, 1]]
 */
function createPopulation(arr, n) {
  const popu = [];
  for(let i = 0; i < n; i++) {
    let chro = shuffle(arr);
    popu.push(chro);
  }
  return popu;
}


/**
 * Converts an array of number arrays into an array of strings by joining
 * each nested array's elements into a single string.
 *
 * @param {number[][]} arr - An array where each element is a nested array of numbers.
 * @returns {string[]} An array of strings, where each string is the result of joining
 *                     the numbers in the corresponding nested array.
 *
 * @example
 * joinNestedArrays([[1, 2, 3], [4, 5], [6]])
 * // Returns: ['123', '45', '6']
 */
function joinNestedArrays(arr) {
  const str = [];
  for (let i of arr) {
    const s = i.join("");
    str.push(s);
  }
  return str;
}
