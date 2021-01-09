/*
	depog2d.cpp
	Simulation of 2-d grains deposition
	Sparisoma Viridi | dudung@gmail.com
	
	Compile: g++ depog2d.cpp -o depog2d
	Execute: ./depog2d
	
	20141112 Create this project one day before the presentation
*/
 
#include <iostream>
#include <fstream>
#include <cstring>
#include <sstream>
#include <cmath>
#include <cstdlib>
#include <ctime>
#include "vect2.h"

using namespace std;

bool overlap(vect2, vect2, double);

int main(int argc, char *argv[]) {
	// System parameters
	double L = 1.0;
	double H = 1.0;
	vect2 g(0, -1);
	double dt = 1E-3;

	
	// Particles
	double m = 1E-3;
	double D = 1E-2;
	
	// Base particles
	int NB = 100;
	vect2 rB[NB];
	for(int i = 0; i < NB; i++) {
		rB[i].x = (i + 0.5) * D; 
	}
	
	// Deposited particles
	int ND = 1000;
	vect2 rD[ND];
	vect2 vD[ND];
	bool deposited[ND];
	srand(time(NULL));
	for(int i = 0; i < ND; i++) {
		rD[i].y = H;
		int sites = 100;
		int rnum = rand() % sites;
		rD[i].x = L * (rnum + 0.5) / sites;
		deposited[i] = false;
	}
	
	for(int i = 0; i < ND; i++) {
		while(!deposited[i]) {
			if(i > 0) {
				for(int j = 0; j < i; j++) {
					bool is_overlapped = overlap(rD[i], rD[j], D);
					if(is_overlapped) {
						deposited[i] = true;
					}
				}
			}
			for(int j = 0; j < NB; j++) {
				bool is_overlapped = overlap(rD[i], rB[j], D);
				if(is_overlapped) {
					deposited[i] = true;
				}
			}
			
			if(!deposited[i]) {
				vect2 Fext(0, 0);
				
				/*
				if(rD[i].x < 0.5 * L) {
					Fext = vect2(+20E-5, 0);
				} else {
					Fext = vect2(-20E-5, 0);
				}
				*/
				
				double x = 0.5 * L - rD[i].x;
				Fext = vect2(1E-3 * x, 0);
				
				
				vect2 F = m * g + Fext;
				vect2 a = F / m;
				vD[i] += (a * dt);
				rD[i] += (vD[i] * dt);
				
				while(rD[i].x > L) {
					rD[i].x =-L;
				}
				while(rD[i].x < 0) {
					rD[i].x += L;
				}
			}
		}
		double x = 0.01 * (int)((1.0 * i / (ND-1)) * 10000);
		cout << "depog2d: " << x << " %";
		cout << "              \r" << flush;
	}
	cout << endl;
	
	// Write output to file
	const char* ofn = "data.txt";
	ofstream fout;
	fout.open(ofn);
	fout << "# Base particles" << endl;
	for(int i = 0; i < NB; i++) {
		fout << rB[i].x << "\t";
		fout << rB[i].y << endl;
	}
	fout << endl;
	fout << "# Deposited particles" << endl;
	for(int i = 0; i < ND; i++) {
		fout << rD[i].x << "\t";
		fout << rD[i].y << endl;
	}
	fout.close();
	
	return 0;
}

bool overlap(vect2 r1, vect2 r2, double D) {
	double l = length(r1 - r2);
	double xi = max(0.0, D - l);
	bool ov = (xi > 0) ? true : false;
	return ov;
}
