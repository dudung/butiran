/*
	layout.js
	Set layout of a HTML page
	
	Sparisoma Viridi | dudung@gmail.com
	
	20171215
	Create this script, which is called from index.html and
	nothing works.
	20171216
	Add event onClick using addEventListener and it works.
	Element can be hidden using style.visibility = "hidden"
	but it still takes place or style.display = "none", which
	is better.
*/

function layout() {
	// Set system coordinates and canvas id
	setRealCoordinate(0, 0, 100, 100);
	setCanvasId("canvas1")
	setDrawingCoordinate(0, 300, 300, 0);
	
	// Add text area for input
	var ta1 = document.createElement("textarea");
	ta1.id = "textarea1";
	ta1.style.width = "220px";
	ta1.style.height = (YMIN - 4) + "px";
	ta1.style.overflowY = "scroll";
	document.body.appendChild(ta1);
	
	// Add canvas for visualizing input
	var can1 = document.createElement("canvas");
	can1.id = canvasId;
	can1.width = XMAX;
	can1.height = YMIN;
	can1.style.width = XMAX + "px";
	can1.style.height = YMIN + "px";
	can1.style.border = "1px solid #999";
	document.body.appendChild(can1);
	
	// Add paragraph for storing an integer value
	var t1 = document.createElement("text");
	t1.innerHTML = "<br/>"
	document.body.appendChild(t1);

	// Add a button for loading
	var btn1 = document.createElement("button");
	btn1.innerHTML = "Load";
	btn1.id = "button1"
	btn1.addEventListener("click", click1);
	document.body.appendChild(btn1);
	
	// Add a button
	var btn2 = document.createElement("button");
	btn2.innerHTML = "Draw";
	btn2.id = "button2"
	btn2.addEventListener("click", click2);
	document.body.appendChild(btn2);
}

function loadTestContent(textareaId) {
	var ta = document.getElementById(textareaId);
	ta.value = "city00\t10\t10\t10\n";
	ta.value += "city01\t20\t50\t5\n";	
	ta.value += "city02\t50\t30\t20\n";	
}

function drawContent(textareaId, canvasId) {
	var can = document.getElementById(canvasId);
	var ta = document.getElementById(textareaId);

	var rows = ta.value.split("\n");
	var N = rows.length;
	if(rows[N-1].length == 0) {
		N = N - 1;
	}
	var n = new Array(N);
	var x = new Array(N);
	var y = new Array(N);
	var r = new Array(N);
	for(var i = 0; i < N; i++) {
		var cols = rows[i].split("\t");
		n[i] = cols[0];
		x[i] = parseFloat(cols[1]);
		y[i] = parseFloat(cols[2]);
		r[i] = parseFloat(cols[3]);
	}
	
	for(var i = 0; i < N; i++) {
		setStrokeStyle(255, 0, 0);
		drawCircle(x[i], y[i], r[i]);
		setFillStyle(0, 0, 255);
		drawText(x[i], y[i], n[i]);
	}
}

function click1() {
	loadTestContent("textarea1");
}

function click2() {
	clearDrawing();
	drawContent("textarea1", "canvas1");
}