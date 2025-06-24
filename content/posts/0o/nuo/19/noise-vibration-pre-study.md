+++
title = 'noise-vibration pre-study'
date = 2024-02-20T05:35:00+07:00
draft = false
tags = ['fi8094']
math = true
url = '1962'
+++
Numerical pre-study on noise-vibration spreading near a power plant
<!--more-->

+ [noise_vibration_pre_study.pdf](https://osf.io/z7gkf)
  [&middot;](https://osf.io/pwgz6)


## airport
Based on ICAO (International Civil Aviation Organization) standards
noise level in airport is calculated using WECPNL (Weighted Equivalent Continuous Perceived Noise Level) as follow

$$\tag{1}
{\rm WECPNL} = {\rm dB} (A) + 10 \log N - 27,
$$

where ${\rm dB} (A)$ is average noise intensity and $N$ is number of arrival and departures in 24 hours. The average noise intensity is

$$\tag{2}
{\rm dB} (A) = 10 \log \left( \frac{1}{n} \sum_{i=1}^n 10^{\frac{L_i}{10}} \right)
$$

with ${\rm dB} (A)$ is average noise intensity, $L_i$ is noise value at time of plane $i$ activities, and $n$ is number of aircrafts. One example of the use of Equations (1) and (2) is for the study of Raja Haji Fisabilillah airport, Tanjung Pinang ([Nofriandi et al., 2018](https://dx.doi.org/10.1088/1755-1315/106/1/012024)).


## general
There are some average sound levels defined ([NAC, 1977](https://apps.dtic.mil/sti/pdfs/ADA044384.pdf)), e.g. for yearly day-night is

$$\tag{3}
L_{\rm dny} = 10 \log_{10} \left( \frac{1}{365} \sum_{i=1}^{365} 10^{L_{{\rm dn},i} / 10} \right),
$$

where $_{{\rm dn},i}$ is the day-night average sound level for the $i$-th day out of one year.


## calculation
After manual measurement, e.g. LZeq or Leq dB(Z) by the optimus sound level meter, then add the A-weighting corrections to the measured levels ([NN, 2020](https://www.cirrusresearch.co.uk/blog/2020/03/calculation-of-dba-from-octave-band-sound-pressure-levels/)). Various weightings have their owns meaning ([E, 2021](https://envirotecmagazine.com/2021/09/09/noise-frequency-weightings-a-quick-guide/)) and formula ([W, 2024a](https://w.wiki/9DWy); [W, 2024b](https://w.wiki/9DX2)).
