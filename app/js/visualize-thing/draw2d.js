/*
	draw2d.js
	Draw in 2d using canvas
	
	Sparisoma Viridi | dudung@gmail.com
	
	20171216
	Create this script and can set color, draw a pixel,
	draw text, and clear canvas.
*/

// Define real coordinates
var xmin = 0;
var ymin = 0;
var xmax = 1;
var ymax = 1;

// Define drawing coordinates
var XMIN = 0;
var YMIN = 0;
var XMAX = 1;
var YMAX = 1;

// Define canvas id
var canvasId = "";

// Set real coordinates
function setRealCoordinate(x1, y1, x2, y2) {
	xmin = x1;
	ymin = y1;
	xmax = x2;
	ymax = y2;
}

// Set drawing coordinates
function setDrawingCoordinate(X1, Y1, X2, Y2) {
	var can = document.getElementById(canvasId);
	XMIN = X1;
	YMIN = Y1;
	XMAX = X2;
	YMAX = Y2;
}

// Set canvas id
function setCanvasId(canvasid) {
	canvasId = canvasid;
}

// Transform x linearly
function ltrX(x) {
	var X = (x - xmin) / (xmax - xmin) * (XMAX - XMIN) + XMIN;
	return X;
}

// Transform y linearly
function ltrY(y) {
	var Y = (y - ymin) / (ymax - ymin) * (YMAX - YMIN) + YMIN;
	return Y;
}

// Set fill style
function setFillStyle(r, g, b) {
	var can = document.getElementById(canvasId);
	var cx = can.getContext("2d");
	cx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";	
}

// Set stroke style
function setStrokeStyle(r, g, b) {
	var can = document.getElementById(canvasId);
	var cx = can.getContext("2d");
	cx.strokeStyle = "rgb(" + r + "," + g + "," + b + ")";	
}

// Draw a pixel
function drawPixel(x, y) {
	var X = ltrX(x);
	var Y = ltrY(y);
	var can = document.getElementById(canvasId);
	var cx = can.getContext("2d");
	cx.fillRect(X, Y, 1, 1);
}

// Draw a circle
function drawCircle(x, y, r) {
	var X = ltrX(x);
	var Y = ltrY(y);
	var R = ltrX(x + r) - ltrX(x);
	var can = document.getElementById(canvasId);
	var cx = can.getContext("2d");
	cx.beginPath();
	cx.arc(X, Y, R, 0, 2 * Math.PI)
	cx.stroke();
}

// Draw text
function drawText(x, y, someText) {
	var X = ltrX(x);
	var Y = ltrY(y);
	var can = document.getElementById(canvasId);
	var cx = can.getContext("2d");
	cx.textAlign = "center";
	cx.fillText(someText, X, Y);	
}

// Clear canvas
function clearDrawing() {
	var can = document.getElementById(canvasId);
	var cx = can.getContext("2d");
	cx.fillStyle = "#fff";
	cx.clearRect(0, 0, XMAX, YMIN);
}