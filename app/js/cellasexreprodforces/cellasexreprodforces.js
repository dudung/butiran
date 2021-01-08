/*
	cellasexreprodforces.js
	Simulation of cell asexual reproduction with two mechanismm
	
	Sparisom Viridi | gs _HjSaE0AAAAJ
	Suprijadi       | gs MJJnvxUAAAAJ
	
	20201106
	0344 Use greenport as template.
	0516 Still do the layout.
	0641 Create Growable class.
	0738 Create Color class.
	0900 Finish create Range and Conversion classes.
	0915 Create Process class.
	0946 Process does not work.
	1020 It can work now, using arguments in setInterval.
	1024 Clean all lines of code.
	1034 Set absolute of distance in Conversion.
	1045 Can draw a single growing circular cell.
	1321 Try normal force.
	1453 Normal and gravitational forces work a little bit.
	1811 Start to budding.
	1842 Can have budding state every tBud.
	1857 Still explode by budding.
	1940 Add empty feature for fission.
	1946 Fix budding for next instead of first only.
	2045 Can perform (binary) fission.
	2117 Can not find the right parameters.
	20201107
	0445 Continue improving the program.
	0516 Mass ratio through D^3 does not work, but the inverse?
	0553 Gravout replace Gravitational and it works.
	0631 Change color according to size of the cell.
	0653 Can pause for every tpause for saving image manually.
	20201107
	0335 Try to seperate two mechanismm for report.
	0502 Try to create initial configuration.
	20201118
	0554 Set all parameters for variation purpose.
	1527 Rename the program, forgot it about two weeks ago.
*/


// Define a process of a function every period
class Process {
	constructor() {
		this.func = arguments[0];
		this.period = arguments[1];
		this.beg = arguments[2];	
		this.end = arguments[3];
		this.inc = arguments[4];
		this.pse = arguments[5]
		
		this.cur = this.beg;
	}
	
	setPeriod() {
		this.period = arguments[0];
	}
	
	setFunction() {
		this.func = arguments[0];
	}
	
	setIteration() {
		this.beg = arguments[0];	
		this.end = arguments[1];
		this.inc = arguments[2];	
		
		this.cur = this.beg;
	}
	
	setPause() {
		this.pse = arguments[0];
	}
	
	step() {
		this.cur = this.cur + this.inc;
		if(this.cur > this.end) {
			this.cur = this.end;
			this.stop();
		}
	}
	
	start() {
		this.id = setInterval(
			function() {
				arguments[0].func();
				arguments[0].step();
			},
			this.period,
			this
		);
	}
	
	stop() {
		clearInterval(this.id);
	}
	
	pause() {
		this.pse = arguments[0];
		if(this.cur < this. end) {
			this.end = this.pse;
		} else {
			this.end += this.pse;
		}
		this.start();
	}
}


// Define a conversion
class Conversion {
	constructor() {
		this.src = arguments[0];
		this.dest = arguments[1];
	}
	
	setSrc() {
		this.src = arguments[0];
	}
	
	setDest() {
		this.dest = arguments[0];
	}
	
	coordinate() {
		var x = arguments[0];
		
		var min = this.src.min;
		var max = this.src.max;
		
		var MIN = this.dest.min;
		var MAX = this.dest.max;
		
		var X = (x - min) / (max - min);
		X *= (MAX - MIN);
		X += MIN;
		
		return X;
	}
	
	distance() {
		var a = 0;
		var b = a + arguments[0];
		var A = this.coordinate(a);
		var B = this.coordinate(b);
		var L = Math.abs(B - A);
		return L;
	}
}


// Define a range
class Range {
	constructor() {
		this.min = arguments[0];
		this.max = arguments[1];
	}
	
	setMin() {
		this.min = arguments[0];
	}
	
	setMax() {
		this.max = arguments[0];
	}
}


// Define outline and fill colors
class Color {
	constructor() {
		if(arguments.length == 0) {
			this.outline = "#000";
			this.fill = "#fff";
		} else if(arguments.length == 1) {
			this.outline = arguments[0];
			this.fill = "#fff";
		} else if(arguments.length == 2) {
			this.outline = arguments[0];
			this.fill = arguments[1];
		}
	}
	
	setOutline() {
		this.outline = arguments[0];
	}
	
	setFill() {
		this.fill = arguments[0];
	}
}


// Define something that can grow linearly
class Growable {
	constructor(state, max, rate) {
		this.state = arguments[0];
		this.max = arguments[1];
		this.rate = arguments[2];
		this.end = false;
	}
	
	setState() {
		this.state = arguments[0];
	}
	
	setMax() {
		this.max = arguments[0];
	}
	
	setRate() {
		this.rate = arguments[0];
	}
	
	grow() {
		if(!this.end) {
			var dt = arguments[0];
			var newState = this.state + this.rate * dt;
			if(newState <= this.max) {
				this.state = newState;
			} else {
				this.end = true;
			}
		}
	}
}


// Define spherical cell Cell
class Cell {
	constructor() {
		this.D = new Growable(2, 21, 0.1);
		this.m = 1;
		this.q = 0;
		this.r = new Vect3(50, 50, 0);
		this.v = new Vect3();
		this.c = new Color(blue, "rgba(79, 129, 189, 0.5)");
		this.age = 1;
	}
	
	setMode() {
		this.mode = arguments[0];
		var Trepro = arguments[1];
		if(this.mode == "budding") {
			this.tBud = Trepro;
			this.iBud = this.tBud;
			this.budding = false;
		} else if(this.mode == "fission") {
			this.tFis = Trepro;
			this.iFis = this.tFis;
			this.fission = false;
		}
	}
	
	grow() {
		var dt = arguments[0];
		this.D.grow(dt);
		
		if(this.D.end) {
			if(this.mode == "budding") {
				
				if(this.tBud == this.iBud) {
					this.budding = true;
				} else {
					this.budding = false;
				}
				this.iBud--;
				
				if(this.iBud <= 0) {
					this.iBud = this.tBud;
				}
				
			} else if(this.mode == "fission") {
				
				if(this.tFis == this.iFis) {
					this.fission = true;
				} else {
					this.fission = false;
				}
				this.iFis--;
			
				if(this.iFis <= 0) {
					this.iFis = this.tFis;
				}
			}
		}
		
		this.age++;
	}
};


// Define global variables
var blue;
var ta, tw, th, tah;
var div;
var can, cw, ch;
var proc, Tproc, tbeg, tend, dt, t;
var cx, xmin, xmax, XMIN, XMAX;
var cy, ymin, ymax, YMIN, YMAX;
var cell, mode, crad;
var FN, FG;
var Dmin, Dmax, dD, Trepro;

// Initialize parameters
function initParams() {
	// Set elements (c, t, d) width and height
	cw = 400;
	ch = 400;
	tw = 400;
	th = ch - 30;
	dw = tw + 6;
	dh = ch;
	
	// Set conversion parameters for drawing
	var xmin = -100; // -100
	var xmax = 100;
	var rngx = new Range(xmin, xmax);
	var ymin = -100;
	var ymax = 100;
	var rngy = new Range(ymin, ymax);
	var XMIN = 0;
	var XMAX = cw;
	var RNGX = new Range(XMIN, XMAX);
	var YMIN = ch;
	var YMAX = 0;
	var RNGY = new Range(YMIN, YMAX);
	cx = new Conversion(rngx, RNGX);
	cy = new Conversion(rngy, RNGY);
	
	// Set blue color
	blue = "#"
		+ (079).toString(16)
		+ (129).toString(16)
		+ (189).toString(16);

	// Set time parameters and proces
	tbeg = 0;
	tend = 1000;
	dt = 1;
	t = tbeg;
	Tproc = 10;
	tpause = 90;
	proc = new Process(simulate, Tproc, tbeg, tend, dt, tpause);
	
	// Initialize variables and parameters
	cell = [];
	mode = "fission";
	Dmin = 1;
	Dmax = 11;
	dD = 0.1;
	initConfMode = 1;
	
	if(mode == "budding") {
		Trepro = 100;
	} else if(mode == "fission") {
		Trepro = 100;
	}
	Trepro = 100;
}


// Initialize visual elements
function initElements() {
	// Create canvas
	can = document.createElement("canvas");
	can.style.float = "left";
	can.width = cw;
	can.height = ch;
	can.style.width = can.width + "px";
	can.style.height = can.height + "px";
	can.style.border = blue + " 1px solid";
	
	// Create div
	div = document.createElement("div");
	div.style.float = "left";
	div.style.width = dw + "px";
	div.style.height = dh + "px";
	
	// Create textarea
	tah = document.createElement("textarea");
	tah.style.width = tw + "px";
	tah.style.height = "16px";
	tah.style.background = blue;
	tah.style.color = "#fff";
	tah.disabled = true;
	
	ta = document.createElement("textarea");
	ta.style.overflowY = "scroll";
	ta.style.width = tw + "px";
	ta.style.height = th + "px";
	ta.style.border = blue + " 1px solid";
	ta.disabled = true;

	document.body.append(div);
		div.append(tah);
		div.append(ta);
	document.body.appendChild(can);
}


// Add line to textarea
function tout() {
	var ta = arguments[0];
	var line = arguments[1];
	ta.value += line;
	ta.scrollTop = ta.scrollHeight;
}


// Draw a cell on canvas
function draw() {
	var cell = arguments[0];
	
	var x = cell.r.x;
	var y = cell.r.y;
	var r = 0.5 * cell.D.state;
	
	var X = Math.round(cx.coordinate(x));
	var Y = Math.round(cy.coordinate(y));
	var R = Math.round(0.5 * (cx.distance(r) + cy.distance(r)));
	
	var outline = cell.c.outline;
	var fill = cell.c.fill;
	
	var val = {
		on() {
			var can = arguments[0];
			var ctx = can.getContext("2d");
			
			ctx.lineWidth = 2;
			ctx.beginPath();
			
			ctx.strokeStyle = outline;
			ctx.arc(X, Y, R, 0, 2 * Math.PI);
			ctx.stroke();
			
			ctx.fillStyle = fill;
			ctx.arc(X, Y, R, 0, 2 * Math.PI);
			ctx.fill();
		}
	};
	
	return val;
}


// Clear canvas and textarea
function clear() {
	var el = arguments[0];
	if(el instanceof HTMLTextAreaElement) {
		el.value = "";
	} else if(el instanceof HTMLCanvasElement) {
		var cx = el.getContext("2d");
		cx.clearRect(0, 0, cw, ch);
	}
}


// Define main function
function main() {
	initParams();
	initElements();
	//proc.pause(125);
	//proc.start();
}


// Execute program
main();


// Perform simulation
function simulate() {
	// Initialize all variables and coefficient
	if(proc.cur == proc.beg) {
		
		if(initConfMode == 0) {
			var first;
			
			first = new Cell();
			first.setMode(mode, Trepro);
			first.r = new Vect3(0, 0, 0);
			first.D = new Growable(Dmin, Dmax, dD);
			cell.push(first);
		}
		
		if(initConfMode == 1) {
			var first;
			
			first = new Cell();
			first.setMode(mode, Trepro);
			first.r = new Vect3(-4 * Dmax, 0, 0);
			first.D = new Growable(Dmin, Dmax, dD);
			cell.push(first);
			
			first = new Cell();
			first.setMode(mode, Trepro);
			first.r = new Vect3(4 * Dmax, 0, 0);
			first.D = new Growable(Dmin, Dmax, dD);
			cell.push(first);
		}

		if(initConfMode == 2) {
			var first;
			
			first = new Cell();
			first.setMode(mode, Trepro);
			first.r = new Vect3(-4 * Dmax, -4 * Dmax, 0);
			first.D = new Growable(Dmin, Dmax, dD);
			cell.push(first);
			
			first = new Cell();
			first.setMode(mode, Trepro);
			first.r = new Vect3(4 * Dmax, -4 * Dmax, 0);
			first.D = new Growable(Dmin, Dmax, dD);
			cell.push(first);
			
			first = new Cell();
			first.setMode(mode, Trepro);
			first.r = new Vect3(-4 * Dmax, 4 * Dmax, 0);
			first.D = new Growable(Dmin, Dmax, dD);
			cell.push(first);
			
			first = new Cell();
			first.setMode(mode, Trepro);
			first.r = new Vect3(4 * Dmax, 4 * Dmax, 0);
			first.D = new Growable(Dmin, Dmax, dD);
			cell.push(first);
		}
		
		FN = new Normal();
		FN.setConstants(0.2, 0.1);
		
		FG = new Gravout();
		FG.setConstant(1);
		
		var header =
			"TIME  " +
			"CNUM  " +
			"CRAD      " +
			"EKIN  " +
			"";
			
		tout(tah, header);
		tout(ta, header + "\n");
	}
	
	// Calculate position of center of mass
	var rcom = new Vect3();
	var m = 0;
	var N = cell.length;
	for(var i = 0; i < N; i++) {
		var mi = cell[i].m;
		m += mi;
		var miri = Vect3.mul(cell[i].r, cell[i].m);
		rcom = Vect3.add(rcom, miri);
	}
	rcom = Vect3.div(rcom, N);
	
	var crad = 0;
	for(var i = 0; i < N; i++) {
		var ri = cell[i].r;
		var rad = Vect3.sub(ri, rcom).len();
		if(rad > crad) {
			crad = rad;
		}
	}
	
	// Calculate kinetic energy
	var K = 0;
	for(var i = 0; i < N; i++) {
		var mi = cell[i].m;
		var vi = cell[i].v.len();
		var Ki = 0.5 * mi * vi * vi;
		K += Ki;
	}
	
	// Draw cells
	var N = cell.length;
	clear(can);
	for(var i = 0; i < N; i++) {
		var cD = cell[i].D.state;
		var cDmax = cell[i].D.max;
		var alpha = 0.5 + (1 - cD / cDmax);
		cell[i].c.fill = "rgba(79, 129, 189, " + alpha + ")";
		draw(cell[i]).on(can);
	}	
	
	// Display variables on textarea
	t = proc.cur;
	tout(ta,
		("0000" + t).slice(-4) + "  " +
		("0000" + N).slice(-4) + "  " +
		crad.toExponential(3) + "  " +
		K.toExponential(3) + "  " +
		"\n"
	);
		
	// Grow cells
	var N = cell.length;
	for(var i = 0; i < N; i++) {
		cell[i].grow(dt);
		
		if(cell[i].budding) {
			var x = cell[i].r.x;
			var y = cell[i].r.y;
			var r = 0.5 * cell[i].D.state;
			var theta =  Math.random() * 2 * Math.PI;
			var dx = r * Math.cos(theta);
			var dy = r * Math.sin(theta);
			
			var next = new Cell();
			next.setMode(mode);
			next.r = new Vect3(x + dx, y + dy, 0);
			next.D = new Growable(Dmin, Dmax, dD);
			cell.push(next);
			
			var j = cell.length;
			/*
			console.log(
				t + ": cell " + i +
				" buds cell " + j
			);
			*/
		}
		
		if(cell[i].fission) {
			var x = cell[i].r.x;
			var y = cell[i].r.y;
			var r = 0.5 * cell[i].D.state;
			var theta =  Math.random() * 2 * Math.PI;
			var dx = r * Math.cos(theta);
			var dy = r * Math.sin(theta);
			
			cell[i].r.x = x + 0.5 * dx;
			cell[i].r.y = y + 0.5 * dy;
			cell[i].D.state = r;
			cell[i].D.end = false;
			cell[i].fission = false;
			
			var next = new Cell();
			next.setMode(mode);
			next.r = new Vect3(x - 0.5 * dx, y - 0.5 * dy, 0);
			next.D = new Growable(Dmin, Dmax, dD);
			next.D.state = r;
			cell.push(next);
			
			//console.log(r, Dmin, Dmax);
			
		}
	}
	
	// Move cells
	var N = cell.length;
	var SF = [];
	for(var i = 0; i < N; i++) {
		var fi = new Vect3();
		for(var j = 0; j < N; j++) {
			if(i != j) {
				var gi = new Grain();
				gi.r = cell[i].r;
				gi.v = cell[i].v;
				gi.m = cell[i].m;
				gi.D = cell[i].D.state;
				
				var gj = new Grain();
				gj.r = cell[j].r;
				gj.v = cell[j].v;
				gj.m = cell[j].m;
				gj.D = cell[j].D.state;
				
				var fn = FN.force(gi, gj);
				fi = Vect3.add(fi, fn);
				
				var fg = FG.force(gi, gj);
				fi = Vect3.add(fi, fg);			
			}
		}
		SF.push(fi);
	}
	
	
	for(var i = 0; i < N; i++) {
		// Euler algoritm in MD
		var a = Vect3.div(SF[i], cell[i].m);
		var v = Vect3.add(cell[i].v, Vect3.mul(a, dt));
		var r = Vect3.add(cell[i].r, Vect3.mul(v, dt));
		
		// Update cell parameters of motion
		cell[i].r = r;
		cell[i].v = v;
		
	}
}
