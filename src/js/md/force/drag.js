/*
	drag.js
	Drag force
	
	Sparisoma Viridi | dudung@gmail.com
	
	20180602
	Create this library from previous force.js and viscous.js
	library.
	20200618
	2144 Integrate to abm-x manually, comment the last part.
	2144 Commment require classes part.
	2231 Set webpack_libs_md_force_drag to false.
	20200702
	2001 Move from amb-x to butiran.
	2129 Add require config.js file.
	2155 Add Compile option.
	2355 Use locaSotrage to store butiran state, remove Compile.
*/

//var butiran = localStorage.getItem("butiran");

// Require classes
if(butiran == "compile") {
	Vect3 = require('../vect3')();
	Grain = require('../grain')();
}

// Define class of Drag
class Drag {
	// Create constructor
	constructor() {
		// Set default constants
		this.c0 = 0; // N
		this.c1 = 0; // N s m^-1
		this.c2 = 0; // N s^2 m^-2
		
		// Set default fluid velocity
		this.vf = new Vect3;
	}
	
	// Set constants
	setConstants(c0, c1, c2) {
		this.c0 = c0;
		this.c1 = c1;
		this.c2 = c2;
	}
	
	// Set fluid velocity 'field'
	setField(vf) {
		this.vf = vf;
	}
	
	// Calculate drag force
	force() {
		var f = new Vect3;
		if(arguments[0] instanceof Grain) {
			var c0 = this.c0;
			var c1 = this.c1;
			var c2 = this.c2;
			var vf = this.vf;
			var v = arguments[0].v;
			var v12 = Vect3.sub(v, vf);
			var u12 = v12.unit();
			var s12 = v12.len();
			var mag = c0 + c1 * s12 + c2 * (s12 * s12);
			var f = Vect3.mul(mag, u12.neg());
		}
		return f;
	}
}

// Export module -- 20180603.1340 !ok
if(butiran == "compile") {
	module.exports = function() {
		return Drag;
	};
}
