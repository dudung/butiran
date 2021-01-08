/*
	greenpot.js
	Simulation of a green sea port using system dynamics
	
	Sparisom Viridi | gs _HjSaE0AAAAJ
	Tatang Suheri | gs Rjv0zt0AAAAJ
	
	20201029
	0827 Start to code.
	0946 Able to resize textarea while window.
	1008 Try to show time stamp.
	1250 Test some + and - loop, and ok.
	1437 Start again.
	1505 PCTC can limit PCTX.
	1527 Finish internal port nodes interaction.
	1601 Finish cross influence of internal-external industries.
	1641 Finish implement green technology, does not work good.
	1654 Finish connecting all nodes but with arbitrary coeffs.
	1827 Start to find good charts.
*/


// Define global variables
var ta, dw, dh, tah;
var proc, Tproc, tbeg, tend, dt, t;
var l, x, a, b, c;


// Initialize visual elements
function initElements() {
	// Create textarea
	dw = 20;
	dh = 2 * 26;
	
	tah = document.createElement("textarea");
	tah.style.width = (window.innerWidth - dw) + "px";
	tah.style.height = "16px";
	tah.style.background = "#090";
	tah.style.color = "#fff";
	tah.disabled = true;
	document.body.appendChild(tah);
	
	ta = document.createElement("textarea");
	ta.style.overflowY = "scroll";
	ta.style.width = (window.innerWidth - dw) + "px";
	ta.style.height = (window.innerHeight - dh) + "px";
	ta.disabled = true;
	document.body.appendChild(ta);
	
	// Add listener for resize event
	window.addEventListener("resize", resize);
}


// Resize textarea according to window inner size
function resize() {
	tah.style.width = (window.innerWidth - dw) + "px";
	ta.style.width = (window.innerWidth - dw) + "px";
	ta.style.height = (window.innerHeight - dh) + "px";
}


// Initialize parameters
function initParams() {
	// Set time parameters
	tbeg = 0;
	tend = 12 * 20; // 20 years
	dt = 1;
	t = tbeg;
	
	// Set interval parameter
	Tproc = 10;
	
	// Initialize variables and parameters
	l = [];
	x = [];
	a = [];
	b = [];
	c = [];
}


// Start simulation
function start() {
	proc = setInterval(simulate, Tproc);
}


// Stop simulation
function stop() {
	clearInterval(proc);
}


// Add line to textrea
function tout() {
	var ta = arguments[0];
	var line = arguments[1];
	ta.value += line;
	ta.scrollTop = ta.scrollHeight;
}


// Add label and value
function addValue() {
	l.push(arguments[0]);
	x.push(arguments[1]);
}


// Simulate
function simulate() {
	// Initialize all variables and coefficient
	if(t == tbeg) {
		
		GTEC = 1;
		GDPP = 1000;
		GDPU = 1000;
		PCTC = 5;
		
		POPU = 10000;
		
		c_RESL_ENEO = 1;
		c_RESL_WATO = 1;
		c_ENVQ_WASD = 1000;
		c_ENVQ_SHOC = 1;
		c_HRIS_RESL = 1;
		c_HRIS_ENVQ = 1;
		
		c_HRIS_LIFQ = 10;
		
		c_ENEO_GDPP = 0.2;
		c_WASD_GDPP = 0.2;
		c_WATO_GDPP = 0.2;

		c_WASD_GTEC = 10;
		c_ENEO_GTEC = 100;
		c_WATO_GTEC = 100;
		
		c_GDPU_HRIS = 0.1;
		
		c_TRAD_GDPU = 0.001;
		c_PDEM_TRAD = 1;
		c_PCTX_PDEM = 1;
		c_GDPP_PCTX = 1;
		c_GDPU_GDPP = 0.04;
		
		c_PPRE_PDEM = 1;
		c_GDPU_PPRE = 20;
		
		c_PINV_GDPU = 0.01;
		c_PCTC_PINV = 0.001;
		c_PREV_PCTX = 0.2;
		c_PPRO_PREV = 0.2;
		c_PINV_PPRO = 0.5;
		
		c_SHOC_PCTC = 0.01;
		c_PCTX_SHOC = 0.001;
		
		INFO = 100;
		INFI = 1;
		c_IINV_GDPU = 0.1;
		c_INDI_INFO = 0.01;
		c_INDO_INFI = 0.01;
		c_TRAD_INDI = 0.01;
		c_TRAD_INDO = 0.01;
		c_INFI_IINV = 0.1;
		c_INDI_INFI	= 0.1;
		c_INDO_INFO = 0.1;
		
		c_POPB_POPU = 0.010;
		c_POPD_POPU = 0.001;
		c_POPI_GDPU = 0.001;
		
		c_LIFQ_POPU = 100000;

		var header =
			"TIME  " +
			"GDPP   " +
			"GDPU   " +
			"TRAD   " +
			"INDI   " +
			"INDO   " +
			"PCTX   " +
			"PCTC   " +
			"ENEO   " +
			"WATO   " +
			"WASD   " +
			"ENVQ   " +
			"HRIS   " +
			"POPU   " +
			"LIFQ   " +
			"SHOC   " +
			"";
			
		tout(tah, header);
		tout(ta, header + "\n");
	}
	SHOC = c_SHOC_PCTC * PCTC;
			
	// Green Technology
	ENEO = c_ENEO_GDPP * GDPP - c_ENEO_GTEC * GTEC;
	WASD = c_WASD_GDPP * GDPP - c_WASD_GTEC * GTEC;
	WATO = c_WATO_GDPP * GDPP - c_WATO_GTEC * GTEC;
	
	RESL = c_RESL_ENEO * ENEO + c_RESL_WATO * WATO;
	ENVQ = c_ENVQ_WASD / WASD - c_ENVQ_SHOC * SHOC;
	ENVQ = (ENVQ < 0) ? 0 : ENVQ;
	
	LIFQ = c_LIFQ_POPU / POPU;
	
	HRIS = c_HRIS_RESL * RESL - c_HRIS_ENVQ * ENVQ;
	HRIS += -c_HRIS_LIFQ * LIFQ;
	
	// Industry
	IINV = c_IINV_GDPU * GDPU;
	INFI = INFI + c_INFI_IINV * IINV;
	INDI = c_INDI_INFI * INFI - c_INDI_INFO * INFO;
	INDI = (INDI < 0) ? 0 : INDI;
	
	INDO = c_INDO_INFO * INFO - c_INDO_INFI * INFI;
	INDO = (INDO < 0) ? 0 : INDO;
	
	// Port
	TRAD = c_TRAD_GDPU * GDPU;
	TRAD +=  c_TRAD_INDI * INDI;
	TRAD +=  c_TRAD_INDO * INDO;
	
	PDEM = c_PDEM_TRAD * TRAD;
	PPRE = c_PPRE_PDEM * PDEM / PCTC;
	
	PCTX = c_PCTX_PDEM * PDEM - c_PCTX_SHOC * SHOC;
	PCTX = (PCTX < PCTC) ? PCTX : PCTC;
	
	PREV = c_PREV_PCTX * PCTX;
	PPRO = c_PPRO_PREV * PREV;
	
	PINV = c_PINV_GDPU * GDPU + c_PINV_PPRO * PPRO;
	PCTC = PCTC + c_PCTC_PINV * PINV;
	
	// GDP
	GDPP = GDPP + c_GDPP_PCTX * PCTX;
	GDPU = GDPU + c_GDPU_GDPP * GDPP - c_GDPU_PPRE * PPRE;
	GDPU += -c_GDPU_HRIS * HRIS;
	
	// Population
	POPB = c_POPB_POPU * POPU;
	POPD = c_POPD_POPU * POPU;
	POPI = c_POPI_GDPU * GDPP;
	POPU = POPU + (POPB - POPD + POPI);
		
	
	// Set display factors
	var fGDPP = 1;
	var fGDPU = 1;
	var fTRAD = 1000;
	var fINDI = 100;
	var fINDO = 100;
	var fPCTX = 10;
	var fPCTC = 10;
	var fENEO = 100;
	var fWATO = 100;
	var fWASD = 100;
	var fENVQ = 1000;
	var fHRIS = 10;
	var fPOPU = 1;
	var fLIFQ = 1000;
	var fSHOC = 1000;
	
	// Display variables on textarea
	tout(ta,
		("0000" + t).slice(-4) + "  " +
		("0000" + Math.round(fGDPP * GDPP)).slice(-5) + "  " +
		("0000" + Math.round(fGDPU * GDPU)).slice(-5) + "  " +
		("0000" + Math.round(fTRAD * TRAD)).slice(-5) + "  " +
		("0000" + Math.round(fINDI * INDI)).slice(-5) + "  " +
		("0000" + Math.round(fINDO * INDO)).slice(-5) + "  " +
		("0000" + Math.round(fPCTX * PCTX)).slice(-5) + "  " +
		("0000" + Math.round(fPCTC * PCTC)).slice(-5) + "  " +
		("0000" + Math.round(fENEO * ENEO)).slice(-5) + "  " +
		("0000" + Math.round(fWATO * WATO)).slice(-5) + "  " +
		("0000" + Math.round(fWASD * WASD)).slice(-5) + "  " +
		("0000" + Math.round(fENVQ * ENVQ)).slice(-5) + "  " +
		("0000" + Math.round(fHRIS * HRIS)).slice(-5) + "  " +
		("0000" + Math.round(fPOPU * POPU)).slice(-5) + "  " +
		("0000" + Math.round(fLIFQ * LIFQ)).slice(-5) + "  " +
		("0000" + Math.round(fSHOC * SHOC)).slice(-5) + "  " +
		"\n"
	);
	
	// Stop simulation when tend is reached
	if(t >= tend) {
		stop();
	} else {
		t += dt;
	}
}


// Define main function
function main() {
	initElements();
	initParams();
	start();
}


// Execute program
main();
