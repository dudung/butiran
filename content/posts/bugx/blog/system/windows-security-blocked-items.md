---
title: "windows security blocked items"
date: 2022-04-01T05:46:00+07:00
lastmod: 2022-04-01T22:36:00+07:00
author: viridi
mathjax: false
mermaid: false
chartjs: false
tags: ['systems', 'windows-10', 'security', 'protection-history']
url: "0029"
draft: false
---
Sabagai salah satu dari ikon-ikon tersembunyi, Windows Security dapat memberikan notifikasi, yang salah satunya mengenai adalah 'Actions recommended'.


## condition
Dengan aplikasi Chrome (2 window luring, dan 2 window dengan 7 tab saat daring), Windows Explorer (2 window), PowerShell, Hugo, Git Bash, Task Manager.

Tabel <a name='tab1'>1</a>. Penggunaan resource pada keadaan luring dan daring.

Hal | Luring | Daring
:- | :- | :-
CPU      | 29-60% | 29-100%
Memori   | 70-71% | 77-79%
Disk     | 3-16%  | 4-100%
Network  | 0%     | 0-2%
GPU      | 0-4%   | 0-6%

Pembuatan Tabel [1](#tab1) terkait dengan notifikasi dari Windows Security. Belum dilakukan pencarian sehingga network belum aktif terlalu banyak saat terdapat koneksi. Git push tidak mengubah network. Demikian juga saat menjelajah internet.

Secara umum telah cukup lama diamati bahwa akses ke Disk cukup tinggi (sering mendekati 100%), terutama saat menggunakan Google Chrome dan pernah dilakukan aksi terkait dengan Antimalware Service Executable dengan detilnya terlupa sehingga akses ke Disk tidak setinggi sebelumnya tetapi masih kadang dapat mencapai 100%.


## see the threats
1. Akses ikon Windows Security sehingga terbuka jendela Windows Security.
2. Pilih bagian App & browser control sehingga terbuka bagian tersebut masih dalam jendela yang sama.
3. Pada bagian pertama dengan judul Reputation-based protection terdapat tombol Review yang dapat dipilih.
4. Dengan Filter telah terpilih Blocked items terdapat tiga threat.

```
Detected: PUAAdvertising:Win32/KuaiZip
Status: Active
Active threats have not been remediated and are running on your device.
Date: 2022-03-17 17:59
Details: This program has potentially unwanted behaviour.
Affected items:
  file: C:\Program Files (x86)\KuaiZip\X86\KuaiZip.exe
```

```
Detected: PUA:Win32/KuaiZip
Status: Active
Active threats have not been remediated and are running on your device.
Date: 2021-10-05 06:55
Affected items:
  driver: KuaiZipDrive2
  file: C:\Program Files (x86)\KuaiZip\X64\KZFormat.dll
  file: C:\Program Files (x86)\KuaiZip\X64\KZipShell.dll
  file: C:\Program Files (x86)\KuaiZip\X64\KZModule.dll
  file: C:\Program Files (x86)\KuaiZip\X86\KuaiZip.exe
  file: C:\Program Files (x86)\KuaiZip\X86\Update.exe
	file: C:\Program Files (x86)\KuaiZip\X86\UpdateChecker.exe
  file: C:\Windows\system32\drivers\KuaiZipDrive2.sys
  process: pid:5504,ProcessStart:132740757304341750
  process: pid:5796,ProcessStart:132775807448137170
```

```
Detected: PUA:Win32/CoinMiner
Status: Active
Active threats have not been remediated and are running on your device.
Date: 2021-08-25 18:49
Affected items:
  containerfile: C:\Users\Sparisoma Viridi\AppData\Roaming\gplyra\gplyra.exe
  file: C:\Users\Sparisoma Viridi\AppData\Roaming\gplyra\gplyra.exe
  file: C:\Users\Sparisoma Viridi\AppData\Roaming\gplyra\gplyra.exe->(Upxw64)
  process: pid:7156,ProcessStart:132740757819136161
```


## action
Dengan menggunakan tombol Actions lalu Remove hanya item pertama yang berhasil sedangkan kedua dan ketiga belum berhasil. Baik dengan ataupun tanpa koneksi internet aksi Remove belum berhasil dilakukan.

Penelusuran dengan istilah KuaZip memberikan beberapa hasil yang pada sebagian penjelasannya menyarankan untuk menginstal piranti lunak anti-malware seperti GridinSoft Anti-Malware [[1](#r01)], Malwarebytes [[2](#r02)], FortiGate / FortiClient [[3](#r03)], atau SpyHunters [[4](#r04)]. Pada situs web Microsoft Malware Protection Center, Windows Defender Security Intelligence terdapat entri mengenai PUA:Win32/KuaiZip [[5](#r05)] dan PUA:Win32/KuaiZip [[6](#r06)] tanpa cara menghilangkannya secara mandiri. Sedangkan untuk Adware:Win32/KuaiZip perlu dihilangkan secara manual sesuai dengan versi sistem operasi Windowsnya [[7](#r07)].

### gplyra
Hasil penelusuran menyatakan bahwa `gplyra.exe` yang berada di Task Manager bila 'Unable to verify' maka kemungkinan merupakan virus [[8](#r08)].

```
C:\Users\Your Name\AppData\Roaming\gplyra

$ ls -l
total 2537
-rw-r--r-- 1 Sparisoma Viridi 197121     229 Aug  8  2016 config.json
-rwxr-xr-x 1 Sparisoma Viridi 197121   71565 Sep 15  2016 gplyra-uninst.exe*
-rwxr-xr-x 1 Sparisoma Viridi 197121 1553920 Aug  8  2016 gplyra.exe*
-rwxr-xr-x 1 Sparisoma Viridi 197121  963232 Oct  5  2013 msvcr120.dll*
```

Dengan isi berkas json adalah

```
{
	"api-bind" : "0",

	"url": "stratum+tcp://pool52.poolminers.net:2856",
	"user" : "miner",
	"pass" : "X",

	"on-idle" : 30,
	"on-idle-low" : 30,

	"algo" : "cryptonight",

	"background" : true,
	"quiet" : true
}
```

Uninstal dilakkan dengan `gplyra-uninst.exe` karena tidak tercatat saat mengakses System Settings lalu Add or remove programs pada kotak pencarian. Setelah proses uninstal selesai proses tersebut juga hilang dari Taks Manager dan tetap tidak ada setelah komputer direstart. Akan tetapi tetap belum bisa melakukan Remove pada Windows Security. Folder `C:\Users\Your Name\AppData\Roaming\gplyra` masih ada akan tetapi isinya telah kosong.

### kuaizip
Terdapat proses `kuazip2updatesvc` di Task Manager, lakukan End Task akan tetapi ada lagi setelah komputer direstart

```
kuazip2updatesvc
|
+-- kuaizip Update Checker
```

Saat dibuka Open File Location merujuk ke svchost.exe di `C:\Windows\SysWOW64`. Belum dipahami bagaimana menghilangkannya. Jugadi Windows Security tidak bisa dilakukan aksi Remove.

### windows security
Dengan mengikuti petunjuk mengenai Windows Security [[9](#r09)] lalu dilanjutkan dengan Microsoft Defender Offile [[10](#r10)] lalu restart komputer, kedua item yang masih tercatat sebagai Blocked items pada App & browser control tetap tidak dapat dilakukan Remove.

### dismiss option
Pada bagian bawah App & browser control terdapat opsi Dismiss dan saat opsi ini dipilih, semua ikon pada Windows Security menjadi hijau. Tidak tahu apakah cara ini benar.

Saat ini CPU 3-29%, Memory 70-71%, Disk 1-7%, Network 0%, GPU 0-1%. Informasi ini mungkin mengindikasikan telah berhasil menghilangkan gangguan yang sebelumnya ada? 

Terdapat informasi bahwa opsi Dismiss ini akan kembali setiap kali setelah proses reboot komputer [[11](#r11)]. Hal ini berbeda dengan yang dialami bahwa satu kali reboot masih mempertahankan keadaan setelah opsi Dismiss dipilih dan telah dilaporkan [[12](#r12)].


## notes
1. <a name='r01'></a>Brendan Smith, "PUA:Win32/KuaiZip Removal. How to remove KuaiZip Adware?", HowToFix.Guide, 14 Dec 2019, url <https://howtofix.guide/kuaizip-removal/> [20220401].
2. <a name='r02'></a>Stelian Pilici, "How to remove KuaiZip adware (Virus Removal Guide)", MalwareTips, 17 Sep 2018, url <https://malwaretips.com/blogs/remove-kuaizip/> [20220401].
3. <a name='r03'></a>-, "Riskware/KuaiZip", FortiGuard Labs, Fortinet, Inc., 26 Feb 2020, url <https://www.fortiguard.com/encyclopedia/virus/7006110> [20220401].
4. <a name='r04'></a>"KuaiZip", Spyware Remove, 12 Jul 2016, url <https://www.spywareremove.com/removekuaizip.html> [20220401].
5. <a name='r05'></a>Microsoft Corporation, "PUA:Win32/KuaiZip", Microsoft Malware Protection Center, Windows Defender Security Intelligence, 20 Jun 2016, 16 Mar 2018, url <https://www.microsoft.com/en-us/wdsi/threats/malware-encyclopedia-description?name=PUA:Win32/KuaiZip&threatid=228919> [20220401].
6. <a name='r06'></a>Microsoft Corporation, "PUA:Win32/CoinMiner", Microsoft Malware Protection Center, Windows Defender Security Intelligence, 29 Jun 2016, 16 Mar 2018, url <https://www.microsoft.com/en-us/wdsi/threats/malware-encyclopedia-description?name=PUA:Win32/CoinMiner&threatid=227033> [20220401].
7. <a name='r07'></a>Microsoft Corporation, "Adware:Win32/KuaiZip", Microsoft Malware Protection Center, Windows Defender Security Intelligence, 20 Oct 2020, url <https://www.microsoft.com/en-us/wdsi/threats/malware-encyclopedia-description?Name=Adware:Win32/KuaiZip&ThreatID=282525> [20220401].
8. <a name='r08'></a>Gowtham V, "What Is gplyra.exe? Is It A Virus Or Malware? Uninstall?", HowToDoNinja, 29 Jul 2021, url <https://howtodoninja.com/files/exe/gplyra-exe/safe-virus-malware-uninstall-fix-gplyra-exe/> [20220401]. 
9. <a name='r09'></a>-, "Stay protected with Windows Security", Microsoft | Support, 28 Oct 2021, url <https://support.microsoft.com/en-us/windows/stay-protected-with-windows-security-2ae0363d-0ada-c064-8b56-6a39afb6a963> [20220401].
10. <a name='r10'></a>-, "Help protect my PC with Microsoft Defender Offline", Microsoft | Support, 1 Mar 2022, url <https://support.microsoft.com/en-us/windows/help-protect-my-pc-with-microsoft-defender-offline-9306d528-64bf-4668-5b80-ff533f183d6c> [20220401].
11. <a name='r11'></a>Booga Roo, "How to permanently dismiss Windows Security PUA notification?", Super User, 23 Jul 2020, url <https://superuser.com/q/1570977/1005329> [20220401].
12. <a name='r12'></a>dudung, "Answer to ''", Super User, 1 Apr 2022, url <https://superuser.com/a/1714056/1005329> [20220401].

{{< citeas >}}
