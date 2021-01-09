var c = document.createElement("canvas");
document.body.appendChild(c);
c.id = "canvas";
//c.style.border = "1px solid black";
c.style.background = "black";
c.width = "580";
c.height = "250";
var ctx = c.getContext("2d");


// Create textarea object as console part
var ta = document.createElement("textarea");
document.body.appendChild(ta);
ta.style.color = "white";
ta.style.background = "black";
ta.rows = "10";
ta.cols = "80";
ta.style.overflowY = "scroll";
ta.style.display = "block";

// Define time variable
var timer1;
// Create start/stop button
var b1 = document.createElement("button");
document.body.appendChild(b1);
b1.style.width = "60px";
b1.innerHTML = "Start";
b1.onclick = function() {
	if(b1.innerHTML == "Start") {
		b1.innerHTML = "Stop";
		timer1 = setInterval(randnum, 10);
	} else {
		b1.innerHTML = "Start";
		clearInterval(timer1);
	}
}

// Create clear button
var b2 = document.createElement("button");
document.body.appendChild(b2);
b2.style.width = "60px";
b2.innerHTML = "Clear";
b2.onclick = function() {
	ta.value = "";
	ta.focus();
}

// Define random content
function randnum() {
		var i = parseInt(Math.random() * 10);
		display(i);
		
		var j = parseInt(Math.random() * 10);
		if(j == 0) {
			display("\n")
			ta.scrollTop = ta.scrollHeight;
		}
}

function display(line) {
	ta.value = ta.value + line;
}

var READING = false;
var i = 0;

ta.onkeypress = function() {
	var x = event.keyCode;
	if(x == 13) {
		//display(x);
		var lines = ta.value.split('\n');
		var L = lines.length;
		var cl = lines[L - 1];
		
		if(cl == "clear") {
			ta.value = "";
			ta.scrollTop = ta.scrollHeight;
		}
		if(cl == "clearg") {
			ctx.fillStyle = "#000";
			ctx.fillRect(0, 0, 580, 250);
		}
		
		
		
		
		if(cl == "whoami") {
			ta.value += "\nuser";
			ta.scrollTop = ta.scrollHeight;
		}
		if(cl == "**") {
			for(i = 0; i < 100; i++) {
				display(i + "\n");
			}
		}
		
		if(cl.substr(0,4) == "line") {
			var p = cl.split(/[ ,]+/);
			
			ctx.strokeStyle = "#fff";
			ctx.moveTo(p[1], p[2]);
			ctx.lineTo(p[3], p[4]);
			ctx.stroke();
		}
		
		if(cl == "<") {
			READING = true;
		}
		
		
		
		/*
		display("\nLast line:" + lines[L - 1]);
		var lines = ta.value.split('\n');
		diplay(lines.length);
		var ll = lines[lines.length - 1];
		diplay(ll + "\n");
		*/
	}
}