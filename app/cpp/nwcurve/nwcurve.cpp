/*
	nwcurve.cpp
	Calculate curvature of a nanowire due to its weight
	againts the shear modulus
	
	Sparisoma Viridi | dudung@gmail.com
	
	Compile: g++ nwcurve.cpp -o nwcurve
	Execute: ./nwcurve [paramf ofile]
	
	20161026
	Create this program for presentation in Symposium
	Nanotechnology, 28-29 October 2016, Grand Inna Kuta,
	Jalan Pantai Kuta No. 1, Banjar Pande Mas, Kuta, Badung,
	Bali 80361, Indonesia.
	This version still can not read parameters file, which
	requires rwparams.h library.
*/

#include <iostream>
#include <cstdlib>
#include <fstream>
#include <cmath>

using namespace std;

int main(int argc, char *argv[]) {
	// Define program name
	const char *pname = "nwcurve";
	
	// Verbose usage
	if(argc < 3) {
		cout << "Usage: " << pname << " [paramf ofile]";
		cout << endl;
		return 1;
	}
	
	// Get arguments
	const char *pfn = argv[1];
	const char *ofn = argv[2];
	
	ifstream fpar;
	fpar.open(pfn);
	if(!fpar.is_open()) {
		cout << pname << ": ";
		cout << "error in opening file: " << pfn << endl;
		return 2;
	}
	
	while(fpar.good()) {
		string line;
		getline(fpar, line);
		//cout << line << endl;
	}
	
	// Define some parameters
	double g = 9.78;
	double rho = 5.606E+3;
	double G = 370.0E+8;
	double D = 394E-9;
	double theta0 = 0.116;
	double L = 5820E-9;
	int N = 1000000;
	double x0 = 0;
	double y0 = 0;
	
	// Calculate some derivative parameters
	double dl = L / N;
	
	// Initialize some variables
	double theta = theta0;
	double x = x0;
	double y = y0;
	
	cout << theta << endl;
	//cout << endl;
	
	for(int i = 0; i <= N; i++) {
		double l = i * dl;
		double r2 = 0.25 * D * D;
		double m = rho * r2 * (L - l);
		double dtheta = (m * g * sin(theta)) / (r2 * G);
		double dx = dl * sin(theta);
		double dy = dl * cos(theta);
		
		//cout << x << "\t";
		//cout << y << endl;
		
		x += dx;
		y += dy;
		theta += dtheta;
	}
	
	//cout << endl;
	cout << theta << endl;
	
	return 0;
}