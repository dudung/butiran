+++
title = 'random number intro'
date = 2024-10-09T16:52:00+07:00
draft = false
math = true
tags = ['tbr']
authors = ['viridi']
url = '24j13'
+++
Brief intro to random number and with Python<!--more-->

One of the example the use of random numbers, even unethical, is in lotteries with prize money, since the winning number is usually (hopefully) a truly random number, where each digit being determined, for example, by physically drawing a (numbered) ball from some kind of container [^lecuyer_1944]. Main uses of the numbers are in simulation and for cryptography, where the main requirement on the quality of the numbers is on their statistical properties, that appear random, since they are supposed not to be predictable, where one of the approaches is using hardware random number generator [^tkacik_2002]. A true random generator (TRNG) uses a non-deterministic source to produce
randomness, where most operate by measuring unpredictable natural processes, such as thermal (resistance or shot) noise, atmospheric noise, or nuclear decay, since the entropy, trustworthiness, and performance all depend on the TRNG design, while a pseudo random number generator (PRNG) by itself will be insecure without a TRNG for seeding [^jun_1999]. What amazing about random number generators (RNG) is that one of them is invented before symbols to represent numbers, e.g. dice, and then coin [^lecuyer_2017].


[^lecuyer_1944]: Pierre L'Ecuyer, "Uniform random number generation", Annals of Operations Research, vol 53, no 1, p 77-120, Dec 1994, url https://doi.org/10.1007/BF02136827. [`pdf`](https://www.iro.umontreal.ca/~lecuyer/myftp/papers/tutaor-1994.pdf)
[^lecuyer_2017]: Pierre L’Ecuyer, "History of uniform random number generation", WSC 2017 - Winter Simulation Conference, Dec 2017, Las Vegas, United States, url https://inria.hal.science/hal-01561551 [20241009].
[^jun_1999]: Benjamin Jun, Paul Kocher, "The Intel Random Number Generator", White Paper preparead for Intel Corporation, Cryptography Research, Inc., 22 Apr 1999, url https://www.csshl.net/sites/default/files/downloadable/crypto/intelRNG.pdf [20241009].
[^tkacik_2002]: T. E. Tkacik, "A Hardware Random Number Generator", in B.S. Kaliski, ç.K. Koç, C. Paar (eds) Cryptographic Hardware and Embedded Systems - CHES 2002, CHES 2002, Lecture Notes in Computer Science, vol 2523, Springer, Berlin, Heidelberg, p 450-453, url https://doi.org/10.1007/3-540-36400-5_32. [`pdf`](https://citeseerx.ist.psu.edu/document?repid=rep1&type=pdf&doi=704657c4b85597fb4e0eab583a5e64301f4f0dcf#page=466)
