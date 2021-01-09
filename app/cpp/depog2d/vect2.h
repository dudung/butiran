/*
	vect2.h
	Class for 2-d vector
	Sparisoma Viridi | dudung@gmail.com
	
	20141112 Create this class
*/


#include <cstring>
#include <sstream>
#include <cmath>

using namespace std;

#ifndef vect2_h
#define vect2_h

// Structure for 2-d vector
struct vect2 {
	double x;
	double y;
	vect2(void);
	vect2(const vect2&);
	vect2(double, double);
	string strval(void);
};

// Operator overloading
vect2 operator+(vect2, vect2);
vect2 operator-(vect2, vect2);
double operator|(vect2, vect2);
double length(vect2);
vect2 operator*(double, vect2);
vect2 operator*(vect2, double);
vect2 operator/(vect2, double);
vect2 operator>>(vect2, double);
vect2 operator+=(vect2&, vect2);
vect2 operator-=(vect2&, vect2);

// Implementation
vect2::vect2(void) {
	x = 0.0;
	y = 0.0;
}

vect2::vect2(const vect2& z) {
	x = z.x;
	y = z.y;
}

vect2::vect2(double zx, double zy) {
	x = zx;
	y = zy;
}

string vect2::strval(void) {
	stringstream ss;
	ss << "(" << x << ", " << y << ")";
	return ss.str();
}

vect2 operator+(vect2 a, vect2 b) {
	vect2 c;
	c.x = a.x + b.x;
	c.y = a.y + b.y;
	return c;
}

vect2 operator-(vect2 a, vect2 b) {
	vect2 c;
	c.x = a.x - b.x;
	c.y = a.y - b.y;
	return c;
}

double operator|(vect2 a, vect2 b) {
	double c = a.x * b.x + a.y * b.y;
	return c;
}

double length(vect2 r) {
	double c = sqrt(r|r);
	return c;
}

vect2 operator*(double a, vect2 b) {
	vect2 c;
	c.x = a * b.x;
	c.y = a * b.y;
	return c;
}

vect2 operator*(vect2 a, double b) {
	vect2 c;
	c.x = a.x * b;
	c.y = a.y * b;
	return c;
}

vect2 operator/(vect2 r, double l) {
	vect2 s;
	s.x = r.x / l;
	s.y = r.y / l;
	return s;
}

vect2 operator>>(vect2 r, double s) {
	double l = length(r);
	vect2 u = (l > 0) ? r / l : vect2(0, 0);
	return u;
}

vect2 operator+=(vect2& a, vect2 b) {
	a = a + b;
}

vect2 operator-=(vect2& a, vect2 b) {
	a = a - b;
}
#endif
