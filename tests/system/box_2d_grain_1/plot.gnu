# plot.gnu
# plot result from simulate.py for box_2d_grain_1 system
# Sparisoma Viridi | https://github.com/dudung

# 20230523
#   2140 Start this script.
#   2244 Create table https://stackoverflow.com/a/53246690/9475509.
#   2312 Finish layout of plot results in README.md file.
#   2323 Correct xz graph.

# svg, grid, xlabel
set term svg size 300,300 font "Times, 16" enhanced
set grid
set tics scale 0.4
set xrange [0:1]
set yrange [0:1]
set ylabel '' offset 2
set lmargin 6
set rmargin 1
set xtics 0.2
set ytics 0.2

# color
c1 = '#0000ff'
c2 = '#ff0000'

# data file
fname="data.tsv"
dt = 0.001

# create table for x, y, z
set table $data2
  plot fname u 1:2:3:4:5:6 every ::0:0:0 with table
unset table

# plot y vs x from previous table
set output 'yx.svg'
set xlabel "{/Times:Italic x}" offset 0, 0.5
set ylabel "{/Times:Italic y}"
plot $data2 u 1:2 t '' w l lw 1 lc rgb c1

# plot z vs y from previous table
set output 'zy.svg'
set xlabel "{/Times:Italic y}" offset 0, 0.5
set ylabel "{/Times:Italic z}"
plot $data2 u 2:3 t '' w l lw 1 lc rgb c1

# plot x vs z from previous table
set output 'xz.svg'
set xlabel "{/Times:Italic z}" offset 0, 0.5
set ylabel "{/Times:Italic x}"
plot $data2 u 3:1 t '' w l lw 1 lc rgb c1

# reset axis tics and ranges
set xtics 5
set xrange [0:20]
set yrange [-1.1:1.1]
set ytics 0.5

# plot vx vs t from previous table
set output 'vxt.svg'
set xlabel "{/Times:Italic t}" offset 0, 0.5
set ylabel "{/Times:Italic v_x}"
plot $data2 u ($0*dt):4 t '' w l lw 1 lc rgb c1

# plot vy vs t from previous table
set output 'vyt.svg'
set xlabel "{/Times:Italic t}" offset 0, 0.5
set ylabel "{/Times:Italic v_y}"
plot $data2 u ($0*dt):5 t '' w l lw 1 lc rgb c1

# plot vz vs t from previous table
set output 'vzt.svg'
set xlabel "{/Times:Italic t}" offset 0, 0.5
set ylabel "{/Times:Italic v_z}"
plot $data2 u ($0*dt):6 t '' w l lw 1 lc rgb c1
