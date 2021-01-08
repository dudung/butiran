/*
	city.js
	Create city for abm-odm
	
	Sparisoma Viridi | https://github.com/dudung/abm-x
	
	20200604
	0825 Start this library.
	0837 It work just fine. It can be painted on canvas.
	20200612
	2142 Extend City to CitySIR for tomorrow.
	20200613
	0518 Continue calcSIR function.
	0621 Can produce SIR per city at time iter.
	20200703
	0537 Start to integrate to butiran.min.js lib.
	0539 Seperate from City file.
*/

// Require classes
if(butiran == "compile") {
	City = require('./city')();
}


// Define CitySIR class
class CitySIR extends City {
	constructor() {
		super();
		this.S = [];
		this.R = [];
		this.I = [];
		this.N = [];
	}
	
	calcSIR() {
		var iter = arguments[0];
		var a = arguments[1];
		var N = a.length;
		
		var S = 0;
		var I = 0;
		var R = 0;
		
		for(var i = 0; i < N; i++) {
			var xmin = this.region[0];
			var ymin = this.region[1];
			var xmax = this.region[2];
			var ymax = this.region[3];
			
			var x = a[i].x;
			var y = a[i].y;
			
			var inXRange = (xmin <= x) && (x <= xmax);
			var inYRange = (ymin <= y) && (y <= ymax);
			var inRange = inXRange && inYRange;
			
			var SUSCEPTIBLE =
				(a[i].timeSusceptible > -1) &&
				(a[i].timeInfected == -1) &&
				(a[i].timeRecovered == -1);
			var INFECTED =
				(a[i].timeSusceptible > -1) &&
				(a[i].timeInfected > -1) &&
				(a[i].timeRecovered == -1);
			var RECOVERED =
				(a[i].timeSusceptible > -1) &&
				(a[i].timeInfected > -1) &&
				(a[i].timeRecovered > -1);
			
			if(inRange) {
				if(SUSCEPTIBLE) S++;
				if(INFECTED) I++;
				if(RECOVERED) R++;
			}
		}
		var N = S + I + R;
		this.S.push(S);
		this.I.push(I);
		this.R.push(R);
		this.N.push(N);
	}
}


// Export module -- 20200703.0545 ok
if(butiran == "compile") {
	module.exports = function() {
		return CitySIR;
	};
}

