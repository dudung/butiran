/*
	textareawh.js
	Textarea with header using DOM HTML element
	
	Sparisoma Viridi | dudung@gmail.com
	
	20200205
	0836 Begin this class.
	0840 Try to copy and modify from abm-sir ui.
	0921 Width of div header can not be obtained [1].
	0924 And it does not also work with [2].
	1011 Finally get the width according to [3].
	1123 Can change color, calculate and remove [4].
	1139 Clean some lines.
	1149 Create appendTo and compile with webpack.
	1319 Set float to left.
	1324 Add setRows for number of rows or lines.
	1736 Not work entirely display:flex [5], but reduce v-gap.
	1742 Still do not understand this [6].
	References
	1. url https://stackoverflow.com/a/118251/9475509
	2. url https://stackoverflow.com/a/37876264/9475509
	3. url https://stackoverflow.com/a/51044450/9475509
	4. url https://stackoverflow.com/a/62341926/9475509
	5. url https://stackoverflow.com/a/19038859/9475509
	6. url https://css-tricks.com/snippets/css/a-guide-to-flexbox
	   [20200705].
*/

// Require classes
if(butiran == "compile") {
	UI = require('./ui.js');
}


// Define class of Buttons
class TextareaWH {
	constructor() {
		this.setParent(null);
		this.setId("textareawh");
		this.setColor("#fff");
		this.setBackground("#000");
		this.setRows(7);
		
		if(arguments.length == 0) {
			this.header = "ITER PAR0 PAR1 PAR2";
			// The output: 0123456789012345679
		} else {
			this.header = arguments[0];
		}
		
		this.width = "0px";
		this.height = "0px";
		this.calculateHeader(this.header);
	}
	
	setRows() {
		this.rows = arguments[0];
	}
	
	setColor() {
		this.color = arguments[0];
	}
	
	setBackground() {
		this.background = arguments[0];
	}
	
	createTextareaWH() {
		var div = UI.create("div").withId("div");
		var txah = this.height * 8;
		
		UI.apply({
			background: this.background,
			border: "0px solid #aaa",
			width: (this.width + 31) + "px",
			height: (this.height + 2 + txah - 10) + "px",
			padding: "0px 0px 0px 0px",
			float: "left",
		}).to(div);
		
		var divh = UI.create("div").withId("divh");
		UI.apply({
			color: this.color,
			paddintTop: "0px",
			background: this.backround,	
			fontFamily: "Monospace",
			letterSpacing: "normal",
			wordSpacing: "0px",
			fontSize: "13.3333px",
			fontStretch: "normal",
			display: "inline-block",
		}).to(divh);

		var spanh = UI.create("div").withId("spanh");
		UI.apply({
			border: "1px solid #aaa",
			paddingLeft: "2px",
			width: (this.width + 27) + "px",
			height: "19px",
		}).to(spanh);
		spanh.innerHTML = this.header;
		
		var txa = UI.create("textarea").withId(this.id);
		UI.apply({
			overflowY: "scroll",
			width: (this.width - 3 + 28) + "px",
			height: (this.height * this.rows) + "px",
		}).to(txa);
		
		divh.append(spanh);
		div.append(divh);
		div.append(txa);
		this.div = div;
	}
	
	appendTo() {
		this.createTextareaWH();
		var el = arguments[0];
		el.append(this.div);		
	}
	
	calculateHeader() {
		var headerText = arguments[0];
		var divh = UI.create("div").withId("divh");
		UI.apply({
			color: "#fff",
			background: "#000",	
			paddingLeft: "2px",
			fontFamily: "Monospace",
			letterSpacing: "normal",
			wordSpacing: "0px",
			fontSize: "13.3333px",
			fontStretch: "normal",
			display: "inline-block",
		}).to(divh);
		divh.innerHTML = headerText;
		document.body.append(divh);
		
		var width = Math.ceil(divh.getBoundingClientRect().width);
		this.width = width;
		divh.style.width = this.width + "px";
		var height = Math.ceil(divh.getBoundingClientRect().height);
		this.height = height;
		divh.style.height = this.height + "px";
		divh.remove();
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
		return TextareaWH;
	};
}

