/*
	gravout.js
	Gravitational force only outside the grain
	
	Sparisoma Viridi | dudung@gmail.com
	
	20201107
	0547 Create this librarty from gravitational.js file.
	0800 Test and it works for cellasexrepodforces program.
*/

// Require classes
if(butiran == "compile") {
	Vect3 = require('../vect3')();
	Grain = require('../grain')();
}

// Define class of Gravitational
class Gravout {
	// Create constructor
	constructor() {
		// Set gravitational constant
		this.G = 6.67408E-11; // m^3 kg^-1 s^-2 
		
		// Set radius
		this.R = 1;
	}
	
	// Set gravitational constant
	setConstant(G) {
		this.G = G;
	}
	
	// Calculate gravitational force
	force() {
		// Set default value to (0, 0, 0)
		var f = new Vect3;
		
		if(arguments[0] instanceof Grain &&
			arguments[1] instanceof Grain) {
			var m1 = arguments[0].m;
			var m2 = arguments[1].m;
			var r1 = arguments[0].r;
			var r2 = arguments[1].r;
			var r12 = Vect3.sub(r1, r2);
			var u12 = r12.unit();
			var l12 = r12.len();
			
			var R1 = 0.5 * arguments[0].D;
			var R2 = 0.5 * arguments[1].D;
			
			if(l12 > R1 + R2) {
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
		return Gravout;
	};
}
