/*
	agent.js
	Create and manipulate agent for abm-odm
	
	Sparisoma Viridi | https://github.com/dudung/abm-x
	
	20200604
	0552 Start this library.
	0740 Test random move but not painted.
	0742 Fix color from object type.
	0905 Add checkCity function to record in visitedCity.
	0908 Add visitedIter for time record.
	0916 Can record visited city in agent.
	1155 Try to implement Road direction for agent motion.
	1245 Fix random motion on a road.
	20200612
	1933 Extend Agent to AgenSIR according to [1].
	2036 Create setSusceptible, setInfected, setRecovered.
	2119 Fix how to use paint() in displaying agents in world.
	2136 Problem: infected can not heal itself.
	2139 Fix previous problem.
	20200613
	0633 Add infectedByAgent information.
	1016 Fix recover time information.
	1040 Try to create chain of infection.
	20200703
	0625 Start to integrate to butiran.min.js lib, seperate AgentSIR.
	
	References
	1. https://stackoverflow.com/a/46244457/9475509
*/


// Require classes
if(butiran == "compile") {
	Agent = require('./agent')();
}


// Defina agent type
typeS = 12;
typeI = 14;
typeR = 13;


// Define AgentSIR class
class AgentSIR extends Agent {
	constructor() {
		if(arguments.length == 2) {
			var x = arguments[0];
			var y = arguments[1];
			super(x, y);
		} else {
			super();
		}
		this.timeSusceptible = -1;
		this.timeInfected = -1;
		this.timeRecovered = -1;
		this.timeForHealing = 0;
		this.infectedByAgent = -1;
		this.chainInfection = [];
	}
	
	setHealingTime() {
		this.timeForHealing = arguments[0];
	}
	
	setSusceptible() {
		var iter = arguments[0];
		this.type = typeS;
		this.timeSusceptible = iter;
	}
	
	setInfected() {
		var iter = arguments[0];
		var otherId = arguments[1];
		if(this.timeSusceptible > -1 && this.timeInfected == -1) {
			this.type = typeI;
			this.timeInfected = iter;
			if(otherId == undefined) {
				this.infectedByAgent = this.id;
			} else {
				this.infectedByAgent = otherId;
			}
		}
	}
	
	setRecovered() {
		var iter = arguments[0];
		if(this.timeInfected > -1) {
			this.type = typeR;
			this.timeRecovered = iter;
		}
	}
	
	heal() {
		var iter = arguments[0];
		if(this.timeInfected > -1 &&
			iter - this.timeInfected >= this.timeForHealing &&
			this.timeRecovered == -1) {
			this.setRecovered(iter);
		}
	}
	
	spreadInfection() {
		var iter = arguments[0];
		var a = arguments[1];
		var N = a.length;
		
		if(this.timeInfected > -1 && this.timeRecovered == -1) {
			var xinf = this.x;
			var yinf = this.y;
			
			for(var i = 0; i < N; i++) {
				var xi = a[i].x;
				var yi = a[i].y;
				var NEAREST_NEIGBOR =
					(Math.abs(xi - xinf) == 1 &&
					Math.abs(yi - yinf) == 0)
					||
					(Math.abs(xi - xinf) == 0 &&
					Math.abs(yi - yinf) == 1)
					||
					(Math.abs(xi - xinf) == 1 &&
					Math.abs(yi - yinf) == 1);
				
				if(NEAREST_NEIGBOR) {
					a[i].setInfected(iter, this.id);
				}
			}
		}
	}
}


// Export module -- 20200703.0627 ok
if(butiran == "compile") {
	module.exports = function() {
		return AgentSIR;
	};
}

