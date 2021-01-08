/*
	gravitational.js
	Gravitational force
	
	Sparisoma Viridi | dudung@gmail.com
	
	20180602
	Create this library from previous force.js and buoyant.js
	libraries.
	20180603
	Rename from gravitation to gravitational.
	20200618
	2146 Integrate to abm-x manually, comment the last part.
	2146 Commment require classes part.
	2233 Set webpack_libs_md_force_gravitational to false.
	20200702
	1959 Move from amb-x to butiran.
	2130 Add require config.js file.
	2356 Use locaSotrage to store butiran state, remove Compile.
*/

//var butiran = localStorage.getItem("butiran");

// Require classes
if(butiran == "compile") {
	Vect3 = require('../vect3')();
	Grain = require('../grain')();
}

// Define class of Gravitational
class Gravitational {
	// Create constructor
	constructor() {
		// Set gravitational constant
		this.G = 6.67408E-11; // m^3 kg^-1 s^-2 
		
		// Set default gravitational field
		this.g = new Vect3(0, 0, -9.80665); // m s^-1
	}
	
	// Set gravity
	setField(g) {
		this.g = g;
		delete this.G;
	}
	
	// Set gravitational constant
	setConstant(G) {
		this.G = G;
		delete this.g;
	}
	
	// Calculate gravitational force
	force() {
		// Set default value to (0, 0, 0)
		var f = new Vect3;
		if(this.g != undefined) {
			if(arguments[0] instanceof Grain) {
				var m = arguments[0].m;
				var g = this.g;
				f = Vect3.mul(m, g);				
			}
		} if(this.G != undefined) {
			if(arguments[0] instanceof Grain &&
				arguments[1] instanceof Grain) {
				var m1 = arguments[0].m;
				var m2 = arguments[1].m;
				var r1 = arguments[0].r;
				var r2 = arguments[1].r;
				var r12 = Vect3.sub(r1, r2);
				var u12 = r12.unit();
				var l12 = r12.len();
				var G = this.G;
				f = Vect3.mul(-G * m1 * m2 / (l12 * l12), u12);
			}
		}
		
		// Note that (0, 0, 0) value could be due to error
		return f;
	}
}

// Export module -- 20180602.2020 ok
if(butiran == "compile") {
	module.exports = function() {
		return Gravitational;
	};
}
