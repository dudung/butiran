---
title: "ipynb fourier transform"
date: 2023-10-04T05:16:00+07:00
authors: ['Sparisoma Viridi']
tags: ['fi4002']
draft: false
math: true
url: "0086"
---
{{< toc >}}


## introduction
+ The Fourier transform is a mathematical procedure that allows us to determine the frequency content of a function, where in electrical engineering it is typically applied to function of time called signals ([Kleim, 2020](https://www.allaboutcircuits.com/technical-articles/what-is-the-fourier-transform/)).
+ The Fourier transform is a mathematical function that takes a variable-based pattern as input and determines the overall cycle offset, rotation speed and strength for every possible cycle in the given pattern, where the variables might be time, space, or some other variables and the transform decomposes the pattern into a sinusoid ([Rouse, 2020](https://www.techopedia.com/definition/7292/fourier-transform)).
+ Fourier transforms is an extremely powerful mathematical tool that allows us to view signals in a different domain, inside which several difficult problems become very simple to analyze, e.g. pich and choose the most important components and remove all of the noise in the domain ([Dhuriya](https://medium.com/analytics-vidhya/why-fourier-transform-is-so-important-cb7841733bb8)).


## dft
+ It is not in general possible to compute the discrete-time Fourier transform of a signal because this would require an infinite number of operations, but it is always possible to compute a finite number of frequency samples of the DTFT in the hope that, if the spacing between samplesis sufficiently small, this will provide a good representation of the spectrum ([Delgutte & Greenberg, 1999](https://web.mit.edu/~gari/teaching/6.555/lectures/ch_DFT.pdf)).
+ The Discrete Fourier Transform (DFT) is the equivalent of the continuous Fourier Transform for signals known only at instants separated by sample times, i.e. a finite sequence of data ([Roberts, 2000](https://www.robots.ox.ac.uk/~sjrob/Teaching/SP/l7.pdf)).
+ The DFT is one of the most powerful tools in digital signal processing which enables us to find the spectrum of a finite-duration signal ([Arar, 2017](https://www.allaboutcircuits.com/technical-articles/an-introduction-to-the-discrete-fourier-transform/)).


## fft
+ The fast Fourier transform (FFT) is a particular way of factoring and rearranging the terms in the sums of the discrete Fourier transform or DFT ([Arfken et al., 2013](https://www.sciencedirect.com/topics/mathematics/fast-fourier-transform#:~:text=Arfken)).
+ The FFT, which is just a fast form of a decomposition of a sequence into its resolution (frequency) components, is generally considered to be the most important mathematical tool of the previous century ([Rohwer et al., 2007](https://www.sciencedirect.com/topics/mathematics/fast-fourier-transform#:~:text=Rohwer)).
+ The Fast Fourier Transform (FFT) algorithm is an optimized version of the DFT that reduces the computational complexity of the Fourier transform, where it uses a recursive approach and divides the signal into smaller sub-signals ([Collimator, 2023](https://www.collimator.ai/reference-guides/what-is-a-fast-fourier-transform)).
+ A FFT can be used in various types of signal processing and it may be useful in reading things like sound waves, or for any image-processing technologies and it can be used to solve various types of equations, or show various types of frequency activity in useful ways ([Rouse, 2016](https://www.techopedia.com/definition/7167/fast-fourier-transform-fft)).


## ipynb audio hands on
+ [linspace](https://github.com/dudung/py-jupyter-nb/blob/main/src/apply/fft/audio/linspace.ipynb)
+ [generator](https://github.com/dudung/py-jupyter-nb/blob/main/src/apply/fft/audio/generator.ipynb)
+ [plot_wave_curve](https://github.com/dudung/py-jupyter-nb/blob/main/src/apply/fft/audio/plot_wave_curve.ipynb)
+ [mix_signal](https://github.com/dudung/py-jupyter-nb/blob/main/src/apply/fft/audio/mix_signal.ipynb)
+ [save_wav_file](https://github.com/dudung/py-jupyter-nb/blob/main/src/apply/fft/audio/save_wav_file.ipynb)
+ [beats](https://github.com/dudung/py-jupyter-nb/blob/main/src/apply/fft/audio/beats.ipynb)
+ [gen_wave_rfft](https://github.com/dudung/py-jupyter-nb/blob/main/src/apply/fft/audio/gen_wave_rfft.ipynb)
+ [rfft_params](https://github.com/dudung/py-jupyter-nb/blob/main/src/apply/fft/audio/rfft_params.ipynb)
+ [rfft_sin_cos](https://github.com/dudung/py-jupyter-nb/blob/main/src/apply/fft/audio/rfft_sin_cos.ipynb)
+ [read_wav_file](https://github.com/dudung/py-jupyter-nb/blob/main/src/apply/fft/audio/read_wav_file.ipynb)
+ [some_instruments](https://github.com/dudung/py-jupyter-nb/blob/main/src/apply/fft/audio/some_instruments.ipynb)
+ [sample_rate](https://github.com/dudung/py-jupyter-nb/blob/main/src/apply/fft/audio/sample_rate.ipynb)
+ [sample_rate_low](https://github.com/dudung/py-jupyter-nb/blob/main/src/apply/fft/audio/sample_rate_low.ipynb)
+ [time_duration](https://github.com/dudung/py-jupyter-nb/blob/main/src/apply/fft/audio/time_duration.ipynb)
+ [multi_frequency](https://github.com/dudung/py-jupyter-nb/blob/main/src/apply/fft/audio/multi_frequency.ipynb)


## ipynb image hands on
+ [single_color_image](https://github.com/dudung/py-jupyter-nb/blob/main/src/apply/fft/image/single_color_image.ipynb)
+ [single_color_array_content](https://github.com/dudung/py-jupyter-nb/blob/main/src/apply/fft/image/single_color_array_content.ipynb)
+ [create_image_per_pixel](https://github.com/dudung/py-jupyter-nb/blob/main/src/apply/fft/image/create_image_per_pixel.ipynb)
+ [generator](https://github.com/dudung/py-jupyter-nb/blob/main/src/apply/fft/image/generator.ipynb)
+ [generate_samples](https://github.com/dudung/py-jupyter-nb/blob/main/src/apply/fft/image/generate_samples.ipynb)
+ [fft_samples](https://github.com/dudung/py-jupyter-nb/blob/main/src/apply/fft/image/fft_samples.ipynb)
+ [sinusoidal_grating](https://github.com/dudung/py-jupyter-nb/blob/main/src/apply/fft/image/sinusoidal_grating.ipynb)
+ [generator2](https://github.com/dudung/py-jupyter-nb/blob/main/src/apply/fft/image/generator2.ipynb)
+ [fft_sin_grating](https://github.com/dudung/py-jupyter-nb/blob/main/src/apply/fft/image/fft_sin_grating.ipynb)
+ [sg_gen_fft](https://github.com/dudung/py-jupyter-nb/blob/main/src/apply/fft/image/sg_gen_fft.ipynb)
+ [sg_gen_fft_shift](https://github.com/dudung/py-jupyter-nb/blob/main/src/apply/fft/image/sg_gen_fft_shift.ipynb)
+ [sine_grating_fft](https://github.com/dudung/py-jupyter-nb/blob/main/src/apply/fft/image/sine_grating_fft.ipynb)
+ [sine_grating_fft_test_gen2_save](https://github.com/dudung/py-jupyter-nb/blob/main/src/apply/fft/image/sine_grating_fft_test_gen2_save.ipynb)
+ [sinusoidal_grating_shift](https://github.com/dudung/py-jupyter-nb/blob/main/src/apply/fft/image/sinusoidal_grating_shift.ipynb)
