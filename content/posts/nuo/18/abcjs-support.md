+++
title = 'abcjs support'
date = 2024-01-13T17:48:45+07:00
draft = false
url = '1813'
+++
Add support for display music notation witn [abcjs](https://paulrosen.github.io/abcjs/).
<!--more-->


## create post
```
$ hugo new content tests/abcjs-support.md
Content "D:\\blank\\content\\tests\\abcjs-support.md" created
```


## test
{{< abcjs >}}
X:1
T:Twinkle Twinkle Little Star
K:C
L:1/4
CC GG | AA G2 | CC GG | AA G2 |
w:Twin- kle, twin- kle, lit- tle star how I won- der what you are!
GG FF | EE D2 | GG FF | EE D2 |
w:Up a- bove the world so hight, like a dia- mond in the sky.
CC GG | AA G2 | FF EE | DD C2 ||
w:Twin- kle, twin- kle, lit- tle star, how I won- der what you are!
{{< /abcjs >}}

```
{{</* blank/abcjs */>}}
X:1
T:Twinkle Twinkle Little Star
K:C
L:1/4
CC GG | AA G2 | CC GG | AA G2 |
w:Twin- kle, twin- kle, lit- tle star how I won- der what you are!
GG FF | EE D2 | GG FF | EE D2 |
w:Up a- bove the world so hight, like a dia- mond in the sky.
CC GG | AA G2 | FF EE | DD C2 ||
w:Twin- kle, twin- kle, lit- tle star, how I won- der what you are!
{{</* /blank/abcjs */>}}
```


## refs
+ [Information fields](https://abcnotation.com/wiki/abc:standard:v2.1#information_fields)
+ [Twinkle, Twinkle, Little Star](https://www.lieder-archiv.de/twinkle_twinkle_little_star-notenblatt_100300.html)