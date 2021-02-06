/*
	vect3.h
	Sparisoma Viridi
	20080225
	3D vector class, operation and manipulation
	
	20200702
	0422 Change vect3 to Vect3 as class name.
*/

#include <math.h>

#include <string>
#include <sstream>

using namespace std;

#ifndef vect3_h
#define vect3_h

class Vect3 {
public:
	double x;
	double y;
	double z;
	string str(void);
	Vect3(void);
	Vect3(double, double, double);
	Vect3(const Vect3&);
	~Vect3(void);
	Vect3 operator+ (const Vect3&);
	Vect3 operator- (const Vect3&);
	Vect3 operator* (const double);
	friend Vect3 operator* (const double, const Vect3&);
	Vect3 operator/ (const double);
	double operator| (const Vect3&);
	double len(void);
	Vect3 operator>> (const double);
	Vect3 operator* (const Vect3&);
};

Vect3::Vect3(void) {
	x = 0;
	y = 0;
	z = 0;
}

Vect3::Vect3(double vx, double vy, double vz) {
	x = vx;
	y = vy;
	z = vz;
}

Vect3::Vect3(const Vect3& v) {
	x = v.x;
	y = v.y;
	z = v.z;
}

Vect3::~Vect3(void) {
	x = 0;
	y = 0;
	z = 0;
}

string Vect3::str(void) {
	stringstream text(stringstream::in | stringstream::out);
	text << "(" << x;
	text << ", " << y;
	text << ", " << z;
	text << ")";
	return text.str();
}

Vect3 Vect3::operator+ (const Vect3& a) {
	Vect3 c;
	c.x = x + a.x;
	c.y = y + a.y;
	c.z = z + a.z;
	return c;
}

Vect3 Vect3::operator- (const Vect3& a) {
	Vect3 c;
	c.x = x - a.x;
	c.y = y - a.y;
	c.z = z - a.z;
	return c;
}

Vect3 Vect3::operator* (const double n) {
	Vect3 c;
	c.x = x * n;
	c.y = y * n;
	c.z = z * n;
	return c;
}

Vect3 operator* (const double n, const Vect3& a) {
	Vect3 c;
	c.x = a.x * n;
	c.y = a.y * n;
	c.z = a.z * n;
	return c;
}

Vect3 Vect3::operator/ (const double n) {
	Vect3 c;
	c.x = x / n;
	c.y = y / n;
	c.z = z / n;
	return c;
}

double Vect3::operator| (const Vect3& a) {
	double d = x * a.x + y * a.y + z * a.z;
	return d;
}

double Vect3::len(void) {
	Vect3 a(x, y, z);
	Vect3 b(x, y, z);
	double d = sqrt(a|b);
	return d;
}

Vect3 Vect3::operator>> (const double n) {
	Vect3 v(x, y, z);
	double l = v.len();
	if(l == 0)
		v = Vect3(0, 0, 0);
	else
		v = v / l;
	v = v * n;
	return v;
}

Vect3 Vect3::operator* (const Vect3& a) {
	Vect3 c;
	c.x = y * a.z - z * a.y;
	c.y = z * a.x - x * a.z;
	c.z = x * a.y - y * a.x;
	return c;
}


#endif
