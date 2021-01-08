/*
	ui.js
	Some function for user interface
	
	Sparisoma Viridi | dudung@gmail.com
	
	20200204
	1936 Move from abm-pd file.
	20200705
	0811 Compile and integrate to butiran lib.
	0826 Test integration and ok.
	1842 Add clear for textareawh and canvaswh.
	1900 Can clear a textareawh with [1].
	1904 Can clear a canvaswh and show message in console.
	1909 Create addText().to() function.
	1915 Create readParams().from() function.
	1923 Can read from a textarea.
	1950 Scroll down after add text to a textarea.
	
	References
	1. url https://stackoverflow.com/a/6445016/9475509
*/


// Read param from a textarea
function readParam() {
	var pattern = arguments[0];
	var o = {
		from: function() {
			var el = arguments[0];
			var lines = el.value.split("\n");
			var N = lines.length;
			var value = "";
			for(var i = 0; i < N; i++) {
				var cols = lines[i].split(" ");
				if (cols[0] == pattern) {
					value = parseFloat(cols[1]);
					break;
				}
			}
			return value;
		}
	};
	return o;
}


// Add text to a textarea
function addText() {
	var str = arguments[0];
	var o = {
		to: function() {
			var el = arguments[0];
			el.value += str;
			el.scrollTop = el.scrollHeight;
		}
	};
	return o;
}


// Clear I/O elements
function clear() {
	var el = arguments[0];
	if(el.tagName === "TEXTAREA") {
		//console.log("Clear " + el.id);
		el.value = "";
	}
	if(el.tagName === "CANVAS") {
		//console.log("Clear " + el.id);
	}
}


// Apply style to an element
function apply() {
	var style = arguments[0];
	
	var o = {
		to: function() {
			var el = arguments[0];
			
			for(var prop in style) {
				el.style[prop] = style[prop];
			}
		},
	};
	
	return o;
}


// Append child element to parent element
function append() {
	var child = arguments[0];
	var o = {
		to: function() {
			var parent = arguments[0];
			parent.append(child);
		},
	};
	return o;
}


// Create element of type with id
function create() {
	var type = arguments[0];
	var o = {
		withId: function() {
			var id = arguments[0];
			var el = document.createElement(type);
			el.id = id;
			return el;
		},
	};
	return o;
}


// Get element with id
function elementWithId() {
	var id = arguments[0];
	var el = document.getElementById(id);
	return el;
}


// Export module -- 20200705 0826 !ok
if(butiran == "compile") {
	module.exports = {
		apply: apply,
		append: append,
		create: create,
		elementWithId: elementWithId,
		clear: clear,
		addText: addText,
		readParam: readParam,
	};
}

