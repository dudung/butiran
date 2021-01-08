!	
!	vect3.f95
!	A 3-d vector in Fotran 95 for butiran
!	
!	Sparisoma Viridi | htpps://github.com/dudung/butiran
!	
!	20200702
!	1452 Start his module from vect3-test.f95 file.
!	1457 Using style from [1].
! 1523 Dertimen 95 version even not sure from [2].
! 1547 Change to lower case name after Vect3.
! 1613 Deprecate Vect3_disp_xyz and Vect3_str_xyz.
! 1616 Create Vect3_add function.
! 1626 Create Vect3_sub function.
! 1645 Create Vect3_dot, Vect3_cross, Vect3_len functions.
! 1651 Create Vect3_div, Vect3_unit functions.
!	
!	References
!	1. url https://www.tutorialspoint.com/fortran/fortran
!	   _modules.htm [20200702].
!	2. url https://www.lahey.com/check.htm [20207032].

! Define Vect3 module
module Vect3
	implicit none
contains
	! Create Vect3 as array
	function Vect3_create(x, y, z) result(r)
		implicit none
		real :: x, y, z
		real, dimension(3) :: r
		r(1) = x
		r(2) = y
		r(3) = z
	end function Vect3_create
	
	! Convert Vect3 to character(15)
	function Vect3_str(r) result(rv)
		implicit none
		real, dimension(3) :: r
		character(35) :: fmt
		character(35) :: rv
		fmt = "(A1, F6.3, A2, F6.3, A2, F6.3, A1)"
		write(rv, fmt) "(", r(1), ", ", r(2), ", ", r(3), ")"
	end function Vect3_str
	
	! Add two Vect3
	function Vect3_add(r1, r2) result(r3)
		implicit none
		integer :: i
		real, dimension(3) :: r1, r2, r3
		do i = 1, 3
			r3(i) = r1(i) + r2(i)
		end do
	end function Vect3_add
	
	! Sub two Vect3
	function Vect3_sub(r1, r2) result(r3)
		implicit none
		integer :: i
		real, dimension(3) :: r1, r2, r3
		do i = 1, 3
			r3(i) = r1(i) - r2(i)
		end do
	end function Vect3_sub
	
	! Cross two Vect3
	function Vect3_cross(r1, r2) result(r3)
		implicit none
		real, dimension(3) :: r1, r2, r3
		r3(1) = r1(2) * r2(3) - r1(3) * r2(2)
		r3(2) = r1(3) * r2(1) - r1(1) * r2(3)
		r3(3) = r1(1) * r2(2) - r1(2) * r2(1)
	end function Vect3_cross
	
	! Dot two Vect3
	function Vect3_dot(r1, r2) result(r3)
		implicit none
		real, dimension(3) :: r1, r2
		real :: r3
		r3 = r1(1) * r2(1) + r1(2) * r2(2) + r1(3) * r2(3)
	end function Vect3_dot
	
	! Length of a Vect3
	function Vect3_len(r1) result(r2)
		implicit none
		real, dimension(3) :: r1
		real :: r2
		r2 = sqrt(Vect3_dot(r1, r1))
	end function Vect3_len
	
	! Multiply Vect3 with scalar
	function Vect3_mul(r1, a) result(r2)
		implicit none
		real :: a
		real, dimension(3) :: r1, r2
		integer :: i
		do i = 1, 3
			r2(i) = r1(i) * a
		end do
	end function Vect3_mul
	
	! Divide Vect3 by scalar
	function Vect3_div(r1, a) result(r2)
		implicit none
		real :: a
		real, dimension(3) :: r1, r2
		integer :: i
		do i = 1, 3
			r2(i) = r1(i) / a
		end do
	end function Vect3_div
	
	! Unit of a Vect3
	function Vect3_unit(r1) result(r2)
		implicit none
		real, dimension(3) :: r1, r2
		real :: l
		l = Vect3_len(r1)
		r2 = Vect3_div(r1, l);
	end function Vect3_unit	
end module Vect3


! Archive deprecated module of Vect3
module Vect3_deprecated
contains
	! Display a vect3 in "(x, y, z)" format -- deprecated
	subroutine Vect3_disp_xyz(x, y, z)
		implicit none
		real :: x, y, z
		character(40) :: fmt
		fmt = "(A5, F3.1, A2, F3.1, A2, F3.1, A1)"
		write(*, fmt) "r = (", x, ", ", y, ", ", z, ")"
	end subroutine Vect3_disp_xyz
	
	! Convert to "(x, y, z)" string of character -- deprecated
	character(20) function Vect3_str_xyz(x, y, z)
		implicit none
		real :: x, y, z
		character(35) :: fmt
		character(15) :: retval
		fmt = "(A1, F3.1, A2, F3.1, A2, F3.1, A1)"
		write(retval, fmt) "(", x, ", ", y, ", ", z, ")"
		Vect3_str_xyz = retval
		return
	end function Vect3_str_xyz
end module Vect3_deprecated

