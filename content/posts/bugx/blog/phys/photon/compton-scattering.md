---
title: "compton scattering"
date: 2022-04-20T04:58:00+07:00
lastmod: 2022-04-21T22:56:00+0700
author: viridi
mathjax: true
mermaid: false
chartjs: false
tags: ['physics', 'photon', 'scattering', 'compton', 'draft']
url: "0064"
draft: false
---
Hamburan Compton terjadi saat sinar-x terdefleksi dari jalurnya semula akibat interaksi dengan sebuah elektron [[1](#r01)] dalam target karbon. Untuk menjelaskan pengamatannya ini Compton berasumsi bahwa cahaya bersifat sebagai partikel atau foton [[2](#r02)].


## probability of compton effect
Saat foton  masuk ke dalam bahan tidak selalu dapat terjadi efek Compton. Probabilitas terjadinya efek ini [[3](#r03)]
- berbanding lurus dengan jumlah elektron pada kulit terluar, i.e. kerapatan elektron dan rapat fisis bahan,
- bergantung lemah pada energi foton (secara relatif tetap untuk rentang energi $10 - 600 \ {\rm keV}$),
- tidak bergantung pada nomor atom (tidak seperti efek fotolistrik dn produksi pasangan).

Secara umum saat sinar-x memasuki bahan, kekuatannya akan berkurang karena berinterkasi pada bahan. Terdapat berbagai mekanisme seperti hamburan Thomson, hamburan Compton, efek fotolistrik, dan produksi pasangan, yang telah terdapat simulasinya [[4](#r04)].


## formula
Formula Compton berbentuk

\begin{equation}\label{eqn:compton-scattering}
\lambda_f - \lambda_i = \Delta \lambda = \frac{h}{m c} (1 - \cos \theta)
\end{equation}

dapat diturunkan menggunakan hukum kekekalan energi, hukum kekekalan momentum, hubungan Planck, dan ekspresi energi relativistik [[5](#r05)].

{{< svg "/static/img/phys/photon/compton_scattering.svg" "fig1" "1" "Hamburan Compton foton $\lambda$ yang menumbuk elektron $e$ dan kemudian terhambur." >}}

Foton bergerak dari kiri ke kanan searah dengan sumbu $x$ dan menumbuk elektron yang "diam" dan kemudian foton terhambur ke arah kanan atas, sementara elektron ke arah kanan bawah. Setelah tumbukan baik elektron maupun foton memiliki momentum pada arah $y$.


## conservation laws
Pada hamburan Compton untuk foton dan elektron yang ditumbuknya berlaku hukum kekekalan momentum

\begin{equation}\label{eqn:conservation-of-momentum}
\vec{p} _{\lambda i} + \vec{p} _{ei} = \vec{p} _{\lambda f} + \vec{p} _{ef}
\end{equation}

dan hukum kekekalan energi

\begin{equation}\label{eqn:conservation-of-energy}
E_{\lambda i} + E_{ei} = E_{\lambda f} + E_{ef}
\end{equation}

dengan indeks $\lambda$ untuk foton, $e$ untuk elektron, $i$ untuk keadaan awal (inisial), dan $f$ untuk keadaan akhir (final).

### momentum
Momentum foton sebelum dan sesudah tumbukan adalah

\begin{equation}\label{eqn:photon-initial-momentum}
\vec{p} _{\lambda i} = p_i \ \hat{x} 
\end{equation}

dan

\begin{equation}\label{eqn:photon-final-momentum}
\vec{p} _{\lambda f} = p_f \cos\theta \ \hat{x} + p_f \sin\theta \ \hat{y}. 
\end{equation}

Sedangkan momentum elektron sebelum dan sesudah tumbukan adalah

\begin{equation}\label{eqn:electron-initial-momentum}
\vec{p} _{e i} = 0
\end{equation}

dan

\begin{equation}\label{eqn:electron-final-momentum}
\vec{p} _{e f} = p_e \cos\phi \ \hat{x} - p_e \sin\phi \ \hat{y}. 
\end{equation}

Substitusi Persamaan \eqref{eqn:photon-initial-momentum}, \eqref{eqn:photon-final-momentum}, \eqref{eqn:electron-initial-momentum}, \eqref{eqn:electron-final-momentum} ke Persamaan \eqref{eqn:conservation-of-momentum} akan memberikan hubungan

\begin{equation}\label{eqn:conservation-of-momentum-x}
p_i = p_f \cos\theta + p_e \cos\phi
\end{equation}

pada arah $x$ dan hubungan

\begin{equation}\label{eqn:conservation-of-momentum-y}
0 = p_f \sin\theta - p_e \sin\phi
\end{equation}

pada arah $y$. Dari Persamaan \eqref{eqn:conservation-of-momentum-x} dapat diperoleh

\begin{equation}\label{eqn:conservation-of-momentum-x-pe}
\begin{array}{rcl}
p_e \cos\phi & = & p_i - p_f \cos\theta \newline
p_e^2 \cos^2 \phi & = & p_i^2 - 2p_i p_f \cos\theta + p_f^2 \cos^2 \theta
\end{array}
\end{equation}

dan dari \eqref{eqn:conservation-of-momentum-y} dapat diperoleh

\begin{equation}\label{eqn:conservation-of-momentum-y-pe}
\begin{array}{rcl}
p_e \sin\phi & = & p_f \sin\theta \newline
p_e^2 \sin^2 \phi & = & p_f^2 \sin^2 \theta.
\end{array}
\end{equation}

Dengan menjumlahkan baris terakhir dari kedua Persamaan \eqref{eqn:conservation-of-momentum-x-pe} dan \eqref{eqn:conservation-of-momentum-y-pe} hubungan

\begin{equation}\label{eqn:conservation-of-momentum-pe}
\begin{array}{rcl}
p_e^2 \cos^2 \phi + p_e^2 \sin^2 \phi & = & p_i^2 - 2p_i p_f \cos\theta + p_f^2 \cos^2 \theta \newline
& & + \ p_f^2 \sin^2 \theta \newline
p_e^2 & = & p_i^2 - 2p_i p_f \cos\theta + p_f^2
\end{array}
\end{equation}

dapat diperoleh.

### energy
Energi foton sebelum dan sesudan tumbukan adalah

\begin{equation}\label{eqn:photon-initial-energy}
E _{\lambda i} = p_i c
\end{equation}

dan

\begin{equation}\label{eqn:photon-final-energy}
E _{\lambda i} = p_f c.
\end{equation}

Sedangkan energi elektron sebelum dan sesudah tumbukan adalah

\begin{equation}\label{eqn:electron-initial-energy}
E_{e i} = mc^2
\end{equation}

dan

\begin{equation}\label{eqn:electron-final-energy}
E_{e f} = \sqrt{m^2 c^4 + p_e^2 c^2}. 
\end{equation}

Pada Persamaan \eqref{eqn:electron-initial-energy} dan \eqref{eqn:electron-final-energy} $m$ adalah massa elektron saat dalam keadaan diam.

Substitusi Persamaan \eqref{eqn:photon-initial-energy}, \eqref{eqn:photon-final-energy}, \eqref{eqn:electron-initial-energy}, \eqref{eqn:electron-final-energy} ke Persamaan \eqref{eqn:conservation-of-energy} akan dapat menghasilkan

\begin{equation}\label{eqn:conservation-of-energy-pe}
\begin{array}{rcl}
p_i c + mc^2 & = & p_f c \newline
&& + \sqrt{m^2 c^4 + p_e^2 c^2} \newline \newline
(p_i - p_f) c + mc^2 & = & \sqrt{m^2 c^4 + p_e^2 c^2} \newline \newline
(p_i - p_f)^2 c^2 && \newline
+2 (p_i - p_f) mc^3 && \newline
+m^2c^4 & = & m^2 c^4 + p_e^2 c^2 \newline \newline
(p_i - p_f)^2 c^2 && \newline
+2 (p_i - p_f) mc^3 & = & p_e^2 c^2 \newline \newline
(p_i - p_f)^2 && \newline
+2 (p_i - p_f) mc & = & p_e^2 \newline \newline
p_i^2 -2p_i p_f + p_f^2 && \newline
+2 (p_i - p_f) mc & = & p_e^2.
\end{array}
\end{equation}

### equating
Menyamakan Persamaan \eqref{eqn:conservation-of-momentum-pe} dengan Persamaan \eqref{eqn:conservation-of-energy-pe} akan memberikan

\begin{equation}\label{eqn:compton-derivation-1}
\begin{array}{rcl}
p_i^2 -2p_i p_f & + & p_f^2 + 2 (p_i - p_f) mc \newline
& = & p_i^2 - 2p_i p_f \cos\theta + p_f^2 \newline
2 (p_i - p_f) mc & = & 2p_i p_f (1 - \cos\theta) \newline
(p_i - p_f) mc & = & p_i p_f (1 - \cos\theta).
\end{array}
\end{equation}

Selanjutnya dengan menggunakan momentum foton 

\begin{equation}\label{eqn:photon-momentum}
p = \frac{h}{\lambda}
\end{equation}

Persamaan \eqref{eqn:compton-derivation-1} akan menjadi
\begin{equation}\label{eqn:compton-derivation-2}
\begin{array}{rcl}
\displaystyle \left( \frac{h}{\lambda_i} - \frac{h}{\lambda_f} \right) mc & = & \displaystyle \frac{h}{\lambda_i} \frac{h}{\lambda_f} (1 - \cos\theta) \newline
\displaystyle h \left( \frac{1}{\lambda_i} - \frac{1}{\lambda_f} \right) mc & = & \displaystyle \frac{h^2}{\lambda_i \lambda_f} (1 - \cos\theta) \newline
\displaystyle \left( \frac{1}{\lambda_i} - \frac{1}{\lambda_f} \right) & = & \displaystyle \frac{h}{mc \lambda_i \lambda_f} (1 - \cos\theta) \newline
\displaystyle \left( \frac{\lambda_f - \lambda_i}{\lambda_i \lambda_f} \right) & = & \displaystyle \frac{h}{mc \lambda_i \lambda_f} (1 - \cos\theta) \newline
\lambda_f - \lambda_i & = & \displaystyle \frac{h}{mc} (1 - \cos\theta) \newline
\end{array}
\end{equation}

yang tidak lain adalah formula hamburan Compton pada Persamaan \eqref{eqn:compton-scattering}.


## notes
1. <a name='r01'></a>Jean Dubberke (coord.), "Compton Scattering", Nondestructive Testing and Nondestructive Evaluation, Center for Nondestructive Evaluation, Iowa State University, 2021, url <https://www.nde-ed.org/Physics/X-Ray/comptonscattering.xhtml> [20220420]. 
2. <a name='r02'></a>Carl Rod Nave, "Compton Scattering", HyperPhysics, 2017, url <http://hyperphysics.phy-astr.gsu.edu/hbase/quantum/comptint.html> [20220420].
3. <a name='r03'></a>Ayush Goel, Henry Knipe, Stuart Price, Francesco Priamo, Aanand Vibhakar, Craig Hacking, Frank Gaillard, Monica Wong, Trang Hoang, "Compton effect", Radiopaedia.org, 15 Sep 2021, url <https://doi.org/10.53347/rID-30308>.
4. <a name='r01'></a>Jean Dubberke (coord.), "Summary of different mechanisms that cause attenuation of an incident x-ray beam", Nondestructive Testing and Nondestructive Evaluation, Center for Nondestructive Evaluation, Iowa State University, 2021, url <https://www.nde-ed.org/Physics/X-Ray/attenuation.xhtml> [20220420].
5. <a name='r05'></a>Carl Rod Nave, "Compton Scattering Equation", HyperPhysics, 2017, url <http://hyperphysics.phy-astr.gsu.edu/hbase/quantum/compeq.html#c1> [20220418].

{{< citeas >}}
