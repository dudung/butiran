---
title: "install tracker 6 for win 10"
date: 2022-06-21T105:46:00+0700
lastmod: 2022-06-21T07:16:00+0700
author: viridi
mathjax: false
mermaid: false
chartjs: false
tags: ['install', 'tracker']
url: "0096"
draft: false
---
Sebagai persiapan untuk mempelajari bagaimana melakukan tracking pada suatu obyek, akan diinstal aplikasi Tracker, suatu alat bantu analisis video dan pemodelan, yang merupakan piranti lunak bebas dibangun pada framework Java Open Source Physics [[1](#r01)].


## steps
1. Buka situs Tracker dan carilah versi terinstal terbarunya, yang dalam hal ini adalah versi 6.0.8, rilis April 2022. <br>
  https://physlets.org/tracker/#:~:text=Recent%20Tracker%20Versions
  
2. Unduh versi yang sesuai dengan spesifikasi komputer yang digunakan, di mana untuk saat ini adalah executable untuk Win64. <br>
  https://physlets.org/tracker/installers/download.php?file=Tracker-6.0.8-windows-x64-installer.exe

3. Pindahkan ke folder tertentu untuk penggunaan lebih lanjut.
  ![](/bugx/img/install/tracker/open-folder.png)
  
4. Tunjuk ikon aplikasi `Tracker-6.0.8-windows-x64-installer.exe` dan klik dengan tetikus.

5. Setelah suatu jendela terbuka, tekan tombol Next. <br>
  ![](/bugx/img/install/tracker/choose-next.png)

6. Terima persetujuannya (I accept the agreement) dan pilih tombol Next. <br>
  ![](/bugx/img/install/tracker/accept-aggreement-and-next.png)

7. Ubah home directory untuk instalasi Tracker bila diperlukan dan tekan tombol Next. <br>
  ![](/bugx/img/install/tracker/change-tracker-home-directory-and-next.png)

8. Pilih komponen yang diperlukan dan klik tombol Next. <br>
  ![](/bugx/img/install/tracker/select-components-and-next.png)

9. Piranti lunak telah siap diinstal, tekan tombol Next. <br>
  ![](/bugx/img/install/tracker/ready-to-install-and-next.png)

10. Tunggu proses instalasi selesai. <br>
  ![](/bugx/img/install/tracker/wait-for-installing-process.png)


11. Proses instalasi telah selesai, tutup jendela yang terbuka dengan menekan tombol Finish. <br>
  ![](/bugx/img/install/tracker/finish-installing-process.png)

12. Akses menu Start pada Windows 10 untuk melihat bahwa aplikasi Tracker telah terinstal dan dapat diakses. <br>
  <img src="/bugx/img/install/tracker/access-start-menu.png" style="width:324px;" />


## todo
+ Pelajari Tracker [[1](#r01)] dengan video yang telah direkam dan digunakan untuk aplikasi ini [[2](#r02)].
+ Pelajari pemrograman untuk tracking obyek dengan OpenCV [[3](#r03)].
+ Pilih bahasa pemrograman Python dan kaji perbedaan paket `opencv-contrib-python` [[4](#r04)] dan `opencv-python` [[5](#r05)].
+ Reproduksi ulang hasil tracking yang telah ditambahkan pada video [[6](#r06)].
+ Tuangkah perkembangannya dalam tulisan lain.


## notes
1. <a name='r01'></a>Douglas Brown, Wolfgang Christian, Robert M. Hanson, “Tracker: Video Analysis and Modeling Tool”, 2022, url https://physlets.org/tracker/ [20220621].
2. <a name='r02'></a>Septian Ulan Dini, “Experimental Video: Floating Object”, YouTube, 20.06.2022, url https://www.youtube.com/watch?v=0CHuIlqJSOE [20220621].
3. <a name='r03'></a>Satya Mallick, "Object Tracking using OpenCV (C++/Python)", LearnOpenCV, 13 Feb 2017, url <https://learnopencv.com/object-tracking-using-opencv-cpp-python/> [20220621].
4. <a name='r04'></a>Gaurav Maindola, "Learn Object Tracking in OpenCV Python with Code Examples", Machine Learning Knowledge, 3 Sep 2021, url <https://machinelearningknowledge.ai/learn-object-tracking-in-opencv-python-with-code-examples/> [20220621].
5. <a name='r05'></a>Simon Kiruri, "Creating a Hand Tracking Module using Python, OpenCv, and MediaPipe", Section, 11 Feb 2022, url <https://www.section.io/engineering-education/creating-a-hand-tracking-module/> [20220621].
6. <a name='r06'></a>Avima Haamesha, “tracking-floating-object | recording 001”, YouTube, 18.06.2022, url https://www.youtube.com/watch?v=jNsK3Ofi1i8 [20220621].

{{< citeas >}}

{{< todo >}}
{{</ todo >}}