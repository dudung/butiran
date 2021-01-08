/*
	buttons.js
	Group of buttons DOM HTML element
	
	Sparisoma Viridi | dudung@gmail.com
	
	20200204
	1725 Begin this class.
	1854 Continue to class functions.
	2003 Encounter error: Unexpected indentifier.
	2058 Implement captions but not shown.
	20200205
	0134 Integrate createButtons and appendToParent in setParent.
	0150 Add listeners for click event.
	0221 Can register functions for click button event handler.
	0303 Can toggle button.
	0306 Toggle only two states but no error for one state.
	0809 Compile and integrate to butiran lib.
	0826 Test integration and ok
	1318 Set float to left.
	1746 Add paddingTop 1px.
*/

// Require classes
if(butiran == "compile") {
	UI = require('./ui.js');
}


// Define class of Buttons
class Buttons {
	constructor() {
		this.buttonDefaultWidth = 60;
		this.buttonDefaultHeight = 21;
		this.setLayout("vertical");
		this.setId("buttons");
		this.setParent(null);
		
		this.captions = [];
		this.states = [];
		this.listeners = [];
		this.width = 0;
		this.height = 0;
		this.row = 0;
		this.col = 0;
		
		if(arguments.length == 0) {
			this.setCaptions([["About",],]);
		} else {
			this.setCaptions(arguments[0]);
		}		
	}
	
	createButtons() {
		var col = 0;
		var row = 0;
		var N = this.captions.length;
		
		if(this.layout == "vertical") {
			col = 1;
			row = N / col;
		} else if(this.layout = "horizontal") {
			row = 1;
			col = N / row;
		} else {
		}
		this.row = row;
		this.col = col;
		
		this.width = this.col * this.buttonDefaultWidth;
		this.height = this.row * this.buttonDefaultHeight;
		
		if(this.div == undefined) {
			this.div = UI.create("div").withId(this.id);
			UI.apply({
				background: "#eee",
				border: "0px solid black",
				width: this.width + "px",
				height: this.height + "px",
				float: "left",
				paddingTop: "1px",
			}).to(this.div);
			/*
			this.div.style.background = "#eee";
			this.div.style.border = "0px solid black";
			
			this.div.style.width = this.width + "px";
			this.div.style.height = this.height + "px";
			
			this.div.style.float = "left";
			*/
			for(var i = 0; i < N; i++) {
				var btn = document.createElement("button");
				btn.id = this.captions[i][0];
				btn.innerHTML = this.captions[i][0];
				btn.style.width = this.buttonDefaultWidth + "px";
				btn.style.height = this.buttonDefaultHeight + "px";
				if(this.states[i] == 0) {
					btn.disabled = true;
				}
				this.div.append(btn);
			}
		}
	}
	
	setListeners() {
		this.listeners = arguments[0];
	}
	
	addListeners() {
		var N = this.listeners.length;
		for(var i = 0; i < N; i++) {
			var el = UI.elementWithId(this.captions[i][0]);
			el.addEventListener("click", this.listeners[i]);
		}
	}
	
	setLayout() {
		this.layout = arguments[0];
	}
	
	setId() {
		this.id = arguments[0];
	}
	
	setStates() {
		this.states = arguments[0];
	}
	
	setParent() {
		this.parent = arguments[0];
		if(this.captions != undefined) {
			this.createButtons();
			this.appendToParent(this.parent);
			this.addListeners();
		}
	}
	
	appendToParent() {
		if(this.div != undefined
			&& this.div.parentElement == undefined) {
			UI.append(this.div).to(this.parent);
		} else {
		}
	}
	
	setCaptions() {
		this.captions = arguments[0];
	}
	
	state() {
		var bid = arguments[0];
		return this.states[bid];
	}
	
	disable() {
		var bid = arguments[0];
		this.states[bid] = 0;
		var el = UI.elementWithId(this.captions[bid][0]);
		el.disabled = true;
	}
	
	enable() {
		var bid = arguments[0];
		this.states[bid] = 1;
		var el = UI.elementWithId(this.captions[bid][0]);
		el.disabled = false;
	}
	
	toggleCaption() {
		var bid = arguments[0];
		this.states[bid] = 1;
		var toggleStates = this.captions[bid].length;
		var el = UI.elementWithId(this.captions[bid][0]);		
		if(el.innerHTML == this.captions[bid][0]) {
			el.innerHTML = this.captions[bid][0 + toggleStates - 1];
		} else {
			el.innerHTML = this.captions[bid][0];
		}
	}
}


// Export module -- 20200705 0826 ok
if(butiran == "compile") {
	module.exports = function() {
		return Buttons;
	};
}

