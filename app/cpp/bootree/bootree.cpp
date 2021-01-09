/*
	bootree.cpp
	Simulation of bamboo tree oscillation
	
	Sparisoma Viridi | dudung@gmail.com
	
	Compile: g++ bootree.cpp -o bootree
	Execute: ./bootree
	
	20161101 Create this program based on depog2d.cpp
	version 20141112.	
*/

#include <iostream>
#include <fstream>
#include <cmath>
#include "vect2.h"

int main(int argc, char *argv[]) {
	// Define program name
	const char *pname = "bootree";
	
	// Define typical bamboo parameters
	double rho = 500; 						// 0.3-0.4, 0.5-0.8 Mg/m^3
	double L = 30; 								// 25-30 m
	double D = 0.25; 							// 0.25 - 0.30 m
	double E = 20E9;							// 1.9 MN/cm^2, 18-20 GPa
	double A = M_PI / 4 * D * D;
	double V = A * L;
	double M = rho * V;
	
	// Define particle mass properties
	int N = 1000;
	double m = M / N;
	double dl = L / (N - 1);
	
	// Define initial condition
	double theta0 = 0;								// degree
	double th0 = theta0 * M_PI / 180;
	vect2 r[N], v[N], a[N];
	for(int i = 0; i < N; i++) {
		double x = i * dl * cos(th0);
		double y = i * dl * sin(th0);
		r[i] = vect2(x, y);
	}
	
	// Terminate program with success state
	return 0;
}