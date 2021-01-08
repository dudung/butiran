/*
	canvaswh.js
	Canvas with header using DOM HTML element
	
	Sparisoma Viridi | dudung@gmail.com
	
	20200205
	1330 Begin this class, modify from textareawh.
	1336 Make such an empty template from textareawh.
	
	References
	1. 
*/

// Require classes
if(butiran == "compile") {
	UI = require('./ui.js');
}


// Define class of Buttons
class CanvasWH {
	constructor() {
		this.setParent(null);
		this.setId("canvaswh");
		this.setBackground("#aaa");
		this.setHeader("Output");
		
		if(arguments.length == 0) {
			this.width = 200;
			this.height = 200;
		} else {
			this.width = arguments[0].width;
			this.height = arguments[0].height;
		}
	}
	
	setBackground() {
		this.background = arguments[0];
	}
	
	setHeader() {
		this.header = arguments[0];
	}
	
	createCanvasWH() {
		var div = UI.create("div").withId("div");
		UI.apply({
			float: "left",
			background: this.background,
			height: (this.height + 25) + "px",
			paddingTop: "1px",
		}).to(div);
		this.div = div;
		
		var can = UI.create("canvas").withId(this.id);
		can.width = this.width;
		can.height = this.height;
		UI.apply({
			width: this.width + "px",
			height: this.height + "px",
			border: "1px solid #888",
			background: "#fff",
		}).to(can);
		
		var divh = UI.create("div").withId("divh");
		UI.apply({
			border: "1px solid #888",
			height: "19px",
			paddingLeft: "6px",
		}).to(divh);
		divh.innerHTML = this.header;
		
		this.div.append(divh);
		this.div.append(can);
	}
	
	appendTo() {
		this.createCanvasWH();
		var el = arguments[0];
		el.append(this.div);		
	}
		
	setId() {
		this.id = arguments[0];
	}
	
	setParent() {
		this.parent = arguments[0];
		var el = arguments[0];
		if(el != null) {
			this.appendTo(el);
		}
	}
}


// Export module -- 20200705 0826 ok
if(butiran == "compile") {
	module.exports = function() {
		return CanvasWH;
	};
}

