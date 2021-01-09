/*
	abm_4.js
	Display configuration for agent-based modelling
	
	Sparisoma Viridi | dudung@gmail.compile
	
	20171003
	Create this script by modifying abm_1.js and unfortunately
	still already a little bit more efficient than previos
	version -- also add timer for setInterval() and
	clearInterval()
	20171004
	Modify abm_2.js and try to improve collision detecting
	Continue modifying abm_3.js
*/

// Initialize agent
function init() {
	// Declare initial i, j, di, dj
	i = 5;
	j = 2;
	di = 1;
	dj = 1;
}

// Read wall position
function readWall() {
	// Read information from textarea
	var ta = document.getElementById('room');
	var content = ta.value;
	var lines = content.split('\n');
	var Ny = lines.length;
	for(var j = 0; j < Ny; j++) {
		var box = lines[j].split(" ");
		var Nx = box.length;
	}
	
	// Create matrix for wall position
	wall = new Array(Ny);
	for(var j = 0; j < Ny; j++) {
		wall[j] = new Array(Nx);
	}
	
	// Fill the array
	for(var j = 0; j < Ny; j++) {
		for(var i = 0; i < Nx; i++) {
			var box = lines[j].split(" ");
			wall[j][i] = parseInt(box[i]);
		}
	}
}

// Load default content for textarea representing room
function loadRoom() {
	var s = '1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1';
	s += '\n1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1';
	s += '\n1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1';
	s += '\n1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1';
	s += '\n1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1';
	s += '\n1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1';
	s += '\n1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1';
	s += '\n1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1';
	var ta = document.getElementById('room');
	ta.value = s;
}

// Draw configuration from textarea to canvas
function drawRoom() {
	var ca = document.getElementById('display');
	var ctx = ca.getContext('2d');
	
	var ta = document.getElementById('room');
	var content = ta.value;
	var lines = content.split('\n');
	var rows = lines.length;
	for(var j = 0; j < rows; j++) {
		var box = lines[j].split(" ");
		var cols = box.length;
		
		var dx = ca.width / cols;
		var dy = ca.height / rows;
		
		for(var i = 0; i < cols; i++) {
			if(box[i] == '1') {
				ctx.fillStyle = '#a00';
			} else {
				ctx.fillStyle = '#fff';		
			}
			var x = i * dx;
			var y = j * dy;
			ctx.fillRect(x+1, y+1, dx-2, dy-2);
		}
	}
}

// Clear textarea
function clearText() {
	var ta = document.getElementById('room');
	ta.value = '';	
}

// Clear canvas
function clearImage() {
	var ca = document.getElementById('display');
	var ctx = ca.getContext('2d');
	ctx.clearRect(0, 0, ca.width, ca.height);
}

// Move agent one step
function moveAgent() {
	var ta = document.getElementById('room');
	var content = ta.value;
	var lines = content.split('\n');
	var rows = lines.length;
	var box = lines[0].split(" ");
	var cols = box.length;

	var ca = document.getElementById('display');
	var ctx = ca.getContext('2d');
	
	var dx = ca.width / cols;
	var dy = ca.height / rows;
	var x = i * dx;
	var y = j * dy;
	
	i += di;
	j += dj;
	
	if((i < 2) || (i > cols-3) || (j < 1) || (j > rows-3)) {
		i -= di;
		j -= dj;
		if((i < 2) || (i > cols-3)) {
			di = -di
		}
		if((j < 2) || (j > rows-3)) {
			dj = -dj;
		}

		i += di;
		j += dj;
	}
}

// Move agent one step and detect collision
function moveAgent2() {
	if(wall[j+dj][i] == 1) {
		dj = -dj;
	}
	if(wall[j][i+di] == 1) {
		di = -di;
	}
	
	i += di;
	j += dj;
}

// Draw agent position
function drawAgent() {
	var ta = document.getElementById('room');
	var content = ta.value;
	var lines = content.split('\n');
	var rows = lines.length;
	var box = lines[0].split(" ");
	var cols = box.length;

	var ca = document.getElementById('display');
	var ctx = ca.getContext('2d');
	
	var dx = ca.width / cols;
	var dy = ca.height / rows;
	var x = i * dx;
	var y = j * dy;
	
	ctx.fillStyle = '#00c';
	ctx.fillRect(x+1, y+1, dx-2, dy-2);
}

// StartStop button
function btnStartStop() {
	var bss = document.getElementById("btnSS");
	if(bss.innerHTML == "Start") {
		myTimer = setInterval(btnStep, 80);
		bss.innerHTML = "Stop";
	} else {
		bss.innerHTML = "Start";
		clearInterval(myTimer);
	}
}

// Load button
function btnLoad() {
	loadRoom();
}

// Draw button
function btnDraw() {
	readWall();
	drawRoom();
	drawAgent();
}

// Clear button
function btnClear() {
	clearText();
	clearImage();
}

// Step button
function btnStep() {
	clearImage();
	drawRoom();
	moveAgent2();
	drawAgent();
	changeCounter();
}

// Change counter
function changeCounter() {
	var left = document.getElementById("left");
	left.innerHTML = i;
	var right = document.getElementById("right");
	right.innerHTML = j;
}