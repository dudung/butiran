/*
	Simulation of Casimir force in 2-d for two intruders
	
	Sparisoma Viridi | dudung@gmail.com
	
	20170727
	Start to code this simulation.
*/

#include <iostream>
#include <cstring>
#include <sstream>
#include <cmath>
#include <cstdlib>

// Define constants
const double G = 1;

using namespace std;

// Define variable type of 1-d particle
struct p1d {
	double m;
	double D;
	double x;
	string type;
	
	p1d(void);
	p1d(double, double, double, string);
	~p1d(void);
	string strval(void);
};

// Define some functions
double energy(p1d, p1d);
double energy(p1d[], int);
void swap(p1d&, p1d&);
string state(p1d[], int);
int random(int, int);

// Construct main program 
int main(int argc, char *argv[]) {
	// Set random seed
	srand(time(0));
	
	// Define bed parameters
	double mbed = 1;
	double Dbed = 1;
	
	// Declare array of 1-d particles
	int N = 10;
	p1d Z[N];
	
	// Initiate mass and diameter of bed particles
	for(int i = 1; i < N - 1; i++) {
		Z[i].m = mbed;
		Z[i].D = Dbed;
	}
	
	// Initiate mass and diameter of intruders
	Z[0].D = 2 * Dbed;
	Z[0].m = 2 * mbed;
	Z[0].type = "1";
	Z[N-1].D = 2 * Dbed;
	Z[N-1].m = 0.5 * mbed;
	Z[N-1].type = "1";
	
	// Calculate initial position
	for(int i = 1; i < N; i++) {
		Z[i].x = Z[i-1].x + 0.5 * (Z[i-1].D + Z[i].D); 
	}
	
	int M = 100;
	for(int j = 0; j <= M; j++) {

			double Ui = energy(Z, N);
			double Uf = Ui;
			int i1, i2;
			while(Uf >= Ui) {
				i1 = random(0, N - 1);
				i2 = random(0, N - 1);
				swap(Z[i1], Z[i2]);
				Uf = energy(Z, N);
				if(Uf > Ui) {
					swap(Z[i1], Z[i2]);
				}
			}
			
			string s = state(Z, N);
			double U = energy(Z, N);
			
			cout << j << "\t";
			cout << i1 << "\t";
			cout << i2 << "\t";
			cout << s << "\t";
			cout << U << endl;
	}
	
	return 0;
}

// Calculate potential energy of pair of particles
double energy(p1d Z1, p1d Z2) {
	double m1 = Z1.m;
	double m2 = Z2.m;
	double x1 = Z1.x;
	double x2 = Z2.x;
	double x12 = x1 - x2;
	double l12 = sqrt(x12 * x12);
	double U = G * m1 * m2 / l12;
	return U;
}

// Calculate potential energy of system of particles
double energy(p1d Z[], int N) {
	double U = 0;
	for(int i = 0; i < N; i++) {
			for(int j = i + 1; j < N; j++) {
				double Uij = energy(Z[i], Z[j]);
				U += Uij;
			}
	}
	return U;
}

// Define swap operator for 1-d particle
void swap(p1d &Z1, p1d &Z2) {
	string t1 = Z1.type;
	string t2 = Z2.type;
	double m1 = Z1.m;
	double m2 = Z2.m;
	double D1 = Z1.D;
	double D2 = Z2.D;
	double dx = 0.5 * (D2 - D1);
	double x1 = Z1.x;
	double x2 = Z2.x;
	x1 += dx;
	x2 += dx;
	
	Z1.m = m2;
	Z1.D = D2;
	Z1.x = x2;
	Z1.type = t2;

	Z2.m = m1;
	Z2.D = D1;
	Z2.x = x1;
	Z2.type = t1;
}

// Create string representation of particles
string state(p1d Z[], int N) {
	stringstream ss;
	for(int i = 0; i < N; i++) {
		ss << Z[i].type;
	}
	return ss.str();
}

// Generate random number
int random(int a, int b) {
	int r = a + floor((b - a + 1) * (1.0 * rand() / RAND_MAX));
	return r;
}


// Create implementation of p1d
p1d::p1d(void) {
	m = 0;
	D = 0;
	x = 0;
	type = "0";
}

p1d::p1d(double mm, double DD, double xx, string t) {
	m = mm;
	D = DD;
	x = xx;
	type = t;
}

p1d::~p1d(void) {
	m = 0;
	D = 0;
	x = 0;
	type = "";
}

string p1d::strval(void) {
	stringstream ss;
	ss << "(";
	ss << m << ", ";
	ss << D << ", ";
	ss << x << ", ";
	ss << type;
	ss << ")";
	string s = ss.str();
	return s;
}
