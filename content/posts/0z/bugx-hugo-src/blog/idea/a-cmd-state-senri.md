---
title: "a-cmd-state-senri"
date: 2022-08-04T11:39:00+0700
lastmod: 2022-08-05T06:27:00+0700
author: viridi
mathjax: false
mermaid: false
chartjs: false
tags: ['idea', 'iscs', 'a-cmd', 'state-senri']
url: "0134"
draft: false
---
Dalam kegiatan Asia Computational Material Design (A-CMD) Workshop yang diadakan secara bauran [[1](#r01)], Prof. Yoshitada Morikawa memberikan materi mengenai STATE - Senri [[2](#r02)], dengan petunjuk teknis dapat dipelajari sebelumnya yang telah disiapkan oleh Dr. Ikutaro Hamada [[3](#r03)]. Platform vicon yang digunakan adalah Zoom [[4](#r04)]. Terdapat informasi, bila tidak salah dengar karena tidak mengikuti dari awal kegiatan pada hari kedua, bahwa koneksi harus menggunakan VPN kampus [[5](#r05)].


## hands on i
Pada sesi hands on yang pertama diberikan cara-cara menjalankan STATE - Senri pada peserta oleh pembicara dan dipandu oleh tutor dan moderator.

![](/bugx/img/idea/a-cmd/a-cmd-zoom-20220804-1133.png)

Gambar <a name='fig1'>1</a>. Isi berkas luaran dari hasil suatu contoh perhitungan.

![](/bugx/img/idea/a-cmd/a-cmd-zoom-20220804-1137.png)

Gambar <a name='fig2'>2</a>. Folder perhitungan dan berkas-berkasnya.

![](/bugx/img/idea/a-cmd/a-cmd-zoom-20220804-1152.png)

Gambar <a name='fig3'>3</a>. Interaksi dan diskusi saat pelatihan bauran saat materi STATE - Senri.

Suasana secara umum tayangan vicon kegiatan adalah seperti tayangan layar pembicara dan interaksi antara pembicara dengan peserta diberikan pada Gambar [1](#fig1),  [2](#fig2), dan [3](#fig3).


## hands on ii
Saat jeda istrahat siang dan makan siang terjadi diskusi daring antara Fahdzi Muttaqien dan Yuji Hamamoto mengenai konfigurasi yang kurang tepat.

![](/bugx/img/idea/a-cmd/a-cmd-zoom-20220804-1238.png)

Gambar <a name='fig4'>4</a>. Pembandingan dua berkas konfigurasi.

Proses perbaikan dilakukan dengan membandingkan berkas konfigurasi yang digunakan, seperti diberikan pada Gambar [4](#fig4).

![](/bugx/img/idea/a-cmd/a-cmd-zoom-20220804-1302.png)

Gambar <a name='fig5'>5</a>. Tutorial untuk memperbaiki hasil perhitungan yang telah diperoleh sebelumnya.

Sebagaimana disampaikan oleh moderator pada sesi siang dengan pembicara Yuji Hamamoto akan dibahas kasus selain silikon, dengan salah satu contoh tutorialnya adalah seperti pada Gambar [5](#fig5).


## todo
+ Mempelajari materi mengenai STATE - Senri yang tersedia baik teknis [[6](#r06)] maupun teori yang mendasarinya [[7](#r07)].
+ Menjalankan dengan akses ke server kampus dengan info akun yang diberikan, bila setelah kegiatan belum dihapus.
+ Menghitung struktur-struktur yang mudah untuk merasakan dan mempelajari bekerjanya sistem.

### test
Tanpa VPN akses bahkan ping pun tidak dapat dilakukan

```batch
viridi@IQQMB2K MINGW64 /l/home/bugx (master)
$ ssh -Y stud22@167.205.41.48


viridi@IQQMB2K MINGW64 /l/home/bugx (master)
$ ping 167.205.41.48

Pinging 167.205.41.48 with 32 bytes of data:
Request timed out.
Request timed out.

Ping statistics for 167.205.41.48:
    Packets: Sent = 2, Received = 0, Lost = 2 (100% loss),
Control-C

viridi@IQQMB2K MINGW64 /l/home/bugx (master)
$
```

dan setelah VPN

```batch
viridi@IQQMB2K MINGW64 /l/home/bugx (master)
$ ping 167.205.41.48

Pinging 167.205.41.48 with 32 bytes of data:
Reply from 167.205.41.48: bytes=32 time=84ms TTL=60
Reply from 167.205.41.48: bytes=32 time=116ms TTL=60
Reply from 167.205.41.48: bytes=32 time=80ms TTL=60
Reply from 167.205.41.48: bytes=32 time=83ms TTL=60

Ping statistics for 167.205.41.48:
    Packets: Sent = 4, Received = 4, Lost = 0 (0% loss),
Approximate round trip times in milli-seconds:
    Minimum = 80ms, Maximum = 116ms, Average = 90ms

viridi@IQQMB2K MINGW64 /l/home/bugx (master)
$ ssh -Y stud22@167.205.41.48
The authenticity of host '167.205.41.48 (167.205.41.48)' can't be established.
ED25519 key fingerprint is SHA256:9IyFmPnk7t2ooCi+uM1HB6Yn+FP0iZ13wcCuxOb65LI.
This key is not known by any other names
Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
Warning: Permanently added '167.205.41.48' (ED25519) to the list of known hosts.
stud22@167.205.41.48's password:
Warning: No xauth data; using fake authentication data for X11 forwarding.
Linux headmaster 4.19.0-18-amd64 #1 SMP Debian 4.19.208-1 (2021-09-29) x86_64

The programs included with the Debian GNU/Linux system are free software;
the exact distribution terms for each program are described in the
individual files in /usr/share/doc/*/copyright.

Debian GNU/Linux comes with ABSOLUTELY NO WARRANTY, to the extent
permitted by applicable law.
/usr/bin/xauth:  file /home/stud22/.Xauthority does not exist
stud22@headmaster:~$ git clone -b acmd_itb_2022 https://github.com/ikuhamada/state-setup.git STATE
Cloning into 'STATE'...
fatal: unable to access 'https://github.com/ikuhamada/state-setup.git/': gnutls_handshake() failed: Error in the pull function.
stud22@headmaster:~$ ping www.github.com
PING github.com (20.205.243.166) 56(84) bytes of data.
^C
--- github.com ping statistics ---
27 packets transmitted, 0 received, 100% packet loss, time 657ms

stud22@headmaster:~$ ^C
stud22@headmaster:~$ w^C
stud22@headmaster:~$
stud22@headmaster:~$
stud22@headmaster:~$
stud22@headmaster:~$
stud22@headmaster:~$
stud22@headmaster:~$
stud22@headmaster:~$
stud22@headmaster:~$
stud22@headmaster:~$ ^C
stud22@headmaster:~$
stud22@headmaster:~$ ping www.github.com
PING github.com (20.205.243.166) 56(84) bytes of data.
^C
--- github.com ping statistics ---
25 packets transmitted, 0 received, 100% packet loss, time 580ms

stud22@headmaster:~$ ^C
stud22@headmaster:~$ ^C
stud22@headmaster:~$ ^C
stud22@headmaster:~$ ^C
stud22@headmaster:~$ whoami
stud22
stud22@headmaster:~$ ls
stud22@headmaster:~$ ls
stud22@headmaster:~$
```

coba lagi untuk memastikan

```batch
stud22@headmaster:~$ git clone -b acmd_itb_2022 https://github.com/ikuhamada/state-setup.git STATE
Cloning into 'STATE'...
fatal: unable to access 'https://github.com/ikuhamada/state-setup.git/': gnutls_handshake() failed: Error in the pull function.
stud22@headmaster:~$
```

dan masih belum berhasil.


## notes
1. <a name='r01'></a>Fahdzi Muttaqien, "Asia Computational Material Design (A-CMD) Workshop", Master Program in Computational Science, Institut Teknologi Bandung, 3-5 Aug 2022, url <https://iscs2022.site/event/5/> [20220804].
2. <a name='r02'></a>Yoshitada Morikawa, "Basic theory of STATE - Senri", Asia Computational Material Design (A-CMD) Workshop, 4 Aug 2022, url <https://iscs2022.site/event/5/#:~:text=Morikawa> [20220804].
3. <a name='r03'></a>Ikutaro Hamada, "Hands-on for ACMD@ITB", GitHub, 3 Aug 2022, url <https://github.com/ikuhamada/state-hands-on/blob/master/CMD/ACMD2022_ITB/Beginner/index.rst> [20220804].
4. <a name='r04'></a>url <https://itb-ac-id.zoom.us/j/96629278661> [20220805].
5. <a name='r05'></a>-, "Layanan Virtual Private Network (VPN) ITB", Direktorat Teknologi Informasi, Institut Teknologi Bandung, 2022, url <https://dti.itb.ac.id/layanan-vpn/> [20220805].
6. <a name='r06'></a>-, "第一原理分子動力学プログラム STATE Senri Wiki", 22 Feb 2022, url <http://www-cp.prec.eng.osaka-u.ac.jp/puki_state/> [20220805].
7. <a name='r07'></a>Ikutaro Hamada, Kouji Inagaki, Yuji Hamamoto, Hidetoshi Kizaki, Yoshitada Morikawa, "STATE-Senri", Department of Precision Science and Technology,
Osaka University, 2 Sep 2022, url <https://cmdworkshop.sakura.ne.jp/CMD37/texts_b/STATE-SenriNotes.pdf> [20220805].

{{< citeas >}}

{{< todo >}}
[11:45, 4.8.2022] Sparisoma Viridi:
Tolong dikabari, ya. Nuhun.
[11:45, 4.8.2022] KI Atthar Luqman Ivansyah:
username : stud22
password : stud22
[11:45, 4.8.2022] Sparisoma Viridi:
thanks
[11:46, 4.8.2022] KI Atthar Luqman Ivansyah:
sami-sami Pak

[11:45, 4.8.2022] Sparisoma Viridi:
Maaf jadi merepotkan bersamaan dengan acaranya..
[11:45, 4.8.2022] KI Atthar Luqman Ivansyah:
santai Pak. hehe
{{</ todo >}}