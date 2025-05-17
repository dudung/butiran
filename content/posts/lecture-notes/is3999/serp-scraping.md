---
title: "serp scraping"
date: 2023-10-19T19:34:00+07:00
authors: ['Sparisoma Viridi']
tags: ['is3999']
draft: false
math: true
url: "0105"
---
{{< toc >}}


## reading materials
+ [Scraping your webpage: Using Node.js to scrap you GitHub Pages webpage](https://medium.com/@6unpnp/scraping-your-webpage-f4fde3a465db).
+ [How to use Google Scholar: A short introduction to search literature in internet](https://medium.com/@6unpnp/how-to-use-google-scholar-c7d80baaeb6e).
+ [Node.js and Google SERP: Following the steps from Khandelwal story](https://medium.com/@6unpnp/node-js-and-google-serp-36031458b0ac).


## serp structure
+ Let's investigate a Google SERP with \
  https://www.google.com/search?q=scraping+google

{{< svg "img/is3999/serp_scraping_google.svg" >}}


```html
<div class="MjjYud">
  
  <div jscontroller="SC7lYd" class="g Ww4FFb vt6azd tF2Cxc asEBEc" lang="en" style="width:600px" jsaction="QyLbLe:OMITjf;ewaord:qsYrDe;xd28Mb:A6j43c" data-hveid="CBkQAA" data-ved="2ahUKEwjDjcDtkYKCAxUocGwGHVUgAwIQFSgAegQIGRAA">
    <div class="N54PNb BToiNc cvP2Ce" data-snc="ih6Jnb_RPt9Fc">
      <div class="kb0PBd cvP2Ce jGGQ5e" data-snf="x5WNvb" data-snhf="0">
        <div class="yuRUbf">
          <div>
            <span jscontroller="msmzHf" jsaction="rcuQ6b:npT2md;PYDNKe:bLV6Bd;mLt3mc">
              <a jsname="UWckNb" href="https://chrome.google.com/webstore/detail/web-scraper-free-web-scra/jnhgnonknehpejjnehehllkliplmbmhn" jscontroller="M9mgyc" jsaction="rcuQ6b:npT2md" data-ved="2ahUKEwjDjcDtkYKCAxUocGwGHVUgAwIQFnoECBEQAQ" ping="/url?sa=t&amp;source=web&amp;rct=j&amp;opi=89978449&amp;url=https://chrome.google.com/webstore/detail/web-scraper-free-web-scra/jnhgnonknehpejjnehehllkliplmbmhn&amp;ved=2ahUKEwjDjcDtkYKCAxUocGwGHVUgAwIQFnoECBEQAQ">
                <br>
      
                <h3 class="LC20lb MBeuO DKV0Md">Web Scraper - Free Web Scraping</h3>

                <div class="notranslate TbwUpd NJjxre iUh30 ojE3Fb">
                  <span class="DDKf1c">
                    <div class="eqA2re UnOTSe Vwoesf" aria-hidden="true">
                      <img class="XNo5Ab" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAxlBMVEVHcEziOC7iOS3iOiziOSzgNyrgNyvkOy7nQDHcMyfeKR4inEivWDXhS0Hyr6v/49//+vL/8dv/4qT8xSX7twb7whkpnUlpkz7qhX////34/v/F2vuWu/WYvfX91nL7vgn8whknmkcto081geoAaOcAbOf7whspnElGmUQZc+j8xy37vQkom0j8wBL8wxz/+NwqnUr8wxyZvPUlmEUYlD65ybA+oln8wBSCvovg0X+q0bLj8uP4/vW2sSghk0EFjj3Uuy78xSokg+Z6AAAAQnRSTlMAKHrO6v9J/////1b+//////////9d4//9/////////+gs/////zKG////h8H/yf7/////////hf////3+/////4bShas5AAABXklEQVR4AV3QBY7DMABEUZeZw8zZMjPf/1I7hjZKv2XRk5F8KxRL5UqlXCoWyG9VAKqhermYo0KpIaxCtV4qZFZtIKEUUfXXELdapgUQ14wR37kkrNGsYBEmr0St1QahZqfb6/cHw5EkkoGK2mSm6YZp2aahOy7PI8QPgjY3M4ziOArNryYkDYI/LO3oZjxmxaY+4TglswBLm82uEY5FoTF03TlwQZQANZo9M/pgZC45eoTaSq317fiDsdVfu/M5mICC1ardtzLc9EdAKLaFbdX8ttw8MlvRdns9d6E5bUFSEDrknjJfY8yPxGe23Z2yTzi76zXVBN9Hjalubjamrp9gVD368asta3e4XG+36yW4r3kyQcoWC9HjucPNnupotB7BFoTmA0B0oOdrhIAJCLUY8nYqJUyYUNBHRxNIZshXBD3vk8lkNFl8jS9mvPubIE8mv/npTHm+vMU7W/UPUKFPAx+bTxYAAAAASUVORK5CYII=" style="height:26px;width:26px" alt="">
                    </div>
                  </span>

                  <div>
                    <span class="VuuXrf">Google</span>
                    <div class="byrV5b">
                      <cite class="qLRx3b tjvcx GvPZzd cHaqb" role="text">https://chrome.google.com
                        <span class="dyjrff ob9lvb" role="text"> ›  detail</span>
                      </cite>
                    </div>
                  </div>
                </div>
              </a>
            </span>

            <div class="B6fmyf byrV5b Mg1HEd">
              <div class="TbwUpd iUh30 ojE3Fb">
                <span class="DDKf1c">
                  <div class="eqA2re UnOTSe" style="height:26px;width:26px">
                  </div>
                </span>
                <div>
                  <span class="VuuXrf">Google</span>
                  <div class="byrV5b">
                  <cite class="qLRx3b tjvcx GvPZzd cHaqb" role="text">https://chrome.google.com
                    <span class="dyjrff ob9lvb" role="text"> › detail
                    </span>
                  </cite>
                </div>
              </div>
            </div>

            <div class="csDOgf BCF2pd ezY6nb L48a4c">
              <div jscontroller="exgaYe" data-bsextraheight="0" data-isdesktop="true" data-movewtractions="true" jsdata="l7Bhpb;_;B/HfHU cECq7c;_;B/HfHY" data-ved="2ahUKEwjDjcDtkYKCAxUocGwGHVUgAwIQ2esEegQIERAJ">
                <div role="button" tabindex="0" jsaction="RvIhPd" jsname="I3kE2c" class="iTPLzd rNSxBe lUn2nc" style="position:absolute" aria-label="Informationen zu diesem Ergebnis">
                  <span jsname="czHhOd" class="D6lY4c mBswFe">
                    <span jsname="Bil8Ae" class="xTFaxe z1asCe" style="height:18px;line-height:18px;width:18px" jsportable="sass-ported">
                      <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z">
                        </path>
                      </svg>
                      </span>
                    </span>
                  </div>
                  
                  <span jsname="zOVa8" data-ved="2ahUKEwjDjcDtkYKCAxUocGwGHVUgAwIQh-4GegQIERAK"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="kb0PBd cvP2Ce" data-sncf="1" data-snf="nke7rc">
        <div class="VwiC3b yXK7lf lyLwlc yDYNvb W8l4ac lEBKkf" style="-webkit-line-clamp:2">
          <span class="lhLbod gEBHYd"><span>04.07.2023</span> — </span>
          Free and easy to use web data extraction tool for everyone. With a simple point-and-click interface, the ability to extract thousands of ...
        </div>
      </div>
      <div class="kb0PBd cvP2Ce" data-sncf="2" data-snf="mCCBcf">
        <div class="fG8Fp uo4vr"></div>
      </div>
    </div>
  </div>

</div>
```

```html
<div class="MjjYud">

  <div jscontroller="SC7lYd" class="g Ww4FFb vt6azd tF2Cxc asEBEc" lang="en" style="width:600px" jsaction="QyLbLe:OMITjf;ewaord:qsYrDe;xd28Mb:A6j43c" data-hveid="CDUQAA" data-ved="2ahUKEwjDjcDtkYKCAxUocGwGHVUgAwIQFSgAegQINRAA">
    <div class="N54PNb BToiNc cvP2Ce" data-snc="ih6Jnb_b5E00">
      <div class="kb0PBd cvP2Ce jGGQ5e" data-snf="x5WNvb" data-snhf="0">
        <div class="yuRUbf">
          <div>
            <span jscontroller="msmzHf" jsaction="rcuQ6b:npT2md;PYDNKe:bLV6Bd;mLt3mc">
              <a jsname="UWckNb" href="https://www.octoparse.com/blog/scrape-google-search-results" jscontroller="M9mgyc" jsaction="rcuQ6b:npT2md" data-ved="2ahUKEwjDjcDtkYKCAxUocGwGHVUgAwIQFnoECCMQAQ" ping="/url?sa=t&amp;source=web&amp;rct=j&amp;opi=89978449&amp;url=https://www.octoparse.com/blog/scrape-google-search-results&amp;ved=2ahUKEwjDjcDtkYKCAxUocGwGHVUgAwIQFnoECCMQAQ">
                <br>

                <h3 class="LC20lb MBeuO DKV0Md">How to Scrape Google Search Results into Excel</h3>

                <div class="notranslate TbwUpd NJjxre iUh30 ojE3Fb">
                  <span class="H9lube">
                    <div class="eqA2re NjwKYd Vwoesf" aria-hidden="true">
                      <img class="XNo5Ab" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAANlBMVEVHcEw0cP80cP80cP80cP80cP80cP80cP80cP80cP80cP80cP80cP80cP80cP80cP80cP80cP8VlEhBAAAAEnRSTlMAOHyXpmwrif/yHuS2EEFY3MqYcwnOAAAA60lEQVR4AZWTBY4EIQAEG53CRv7/2FNIDm61IjgUpNFbGOu8C1F32OikoBvkBJTqawFK00oDbK864N+MAlmDCEUzAf66RQjrBn5qe9JqEGflfuJgB83AMSusUidhnnA+nnA8O6JBfiiphJ3ajqSlY5b491AG1ubM/mxC5Xx0CYW1o86SG1yamXo8VIVyRSlfXE2yJUFVpwKXA5AAaDsAY48ICcAngoUDytG7Uvy9kwHYVNkuNkXwkCsApgvBITk87D3+VtGnnu4NiL/vDz3AUz5Cz6MbXg0g3/5Zdjw8Uf+IwIiDC7pBtFnv8wkBkwpxIAZGvwAAAABJRU5ErkJggg==" style="height:18px;width:18px" alt="">
                    </div>
                  </span>
                  
                  <div>
                    <span class="VuuXrf">Octoparse</span>
                    <div class="byrV5b">
                      <cite class="qLRx3b tjvcx GvPZzd cHaqb" role="text">https://www.octoparse.com
                        <span class="dyjrff ob9lvb" role="text"> › blog</span>
                      </cite>
                    </div>
                  </div>
                </div>
              </a>
            </span>

            <div class="B6fmyf byrV5b Mg1HEd">
              <div class="TbwUpd iUh30 ojE3Fb">
                <span class="H9lube">
                <div class="eqA2re NjwKYd" style="height:18px;width:18px"></div>
                </span>
                <div>
                  <span class="VuuXrf">Octoparse</span>
                  <div class="byrV5b">
                    <cite class="qLRx3b tjvcx GvPZzd cHaqb" role="text">https://www.octoparse.com
                      <span class="dyjrff ob9lvb" role="text"> › blog</span>
                    </cite>
                  </div>
                </div>
              </div>
              
              <div class="csDOgf BCF2pd ezY6nb L48a4c">
                <div jscontroller="exgaYe" data-bsextraheight="0" data-isdesktop="true" data-movewtractions="true" jsdata="l7Bhpb;_;B/HfII cECq7c;_;B/HfIM" data-ved="2ahUKEwjDjcDtkYKCAxUocGwGHVUgAwIQ2esEegQIIxAJ">
                  <div role="button" tabindex="0" jsaction="RvIhPd" jsname="I3kE2c" class="iTPLzd rNSxBe lUn2nc" style="position:absolute" aria-label="Informationen zu diesem Ergebnis">
                    <span jsname="czHhOd" class="D6lY4c mBswFe">
                      <span jsname="Bil8Ae" class="xTFaxe z1asCe" style="height:18px;line-height:18px;width:18px" jsportable="sass-ported">
                        <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                        </svg>
                      </span>
                    </span>
                  </div>

                  <span jsname="zOVa8" data-ved="2ahUKEwjDjcDtkYKCAxUocGwGHVUgAwIQh-4GegQIIxAK"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="kb0PBd cvP2Ce" data-sncf="1" data-snf="nke7rc">
        <div class="VwiC3b yXK7lf lyLwlc yDYNvb W8l4ac lEBKkf" style="-webkit-line-clamp:2">
          <span class="lhLbod gEBHYd"><span>02.09.2023</span> — </span>
          <span>If you don't want to deal with coding, then Octoparse, the best <em>Google</em> search <em>scraper</em>, can help you <em>scrape</em> the <em>Google</em> search results without ...</span>
        </div>
      </div>
      <div class="kb0PBd cvP2Ce" data-sncf="2" data-snf="mCCBcf">
        <div class="fG8Fp uo4vr"></div>
      </div>
      <div class="kb0PBd cvP2Ce" data-sncf="3" data-snf="gdePb">
        <div class="HiHjCd">‎
          <a href="https://www.octoparse.com/blog/scrape-google-search-results#general-knowledge-about-scraping-google-search" ping="/url?sa=t&amp;source=web&amp;rct=j&amp;opi=89978449&amp;url=https://www.octoparse.com/blog/scrape-google-search-results%23general-knowledge-about-scraping-google-search&amp;ved=2ahUKEwjDjcDtkYKCAxUocGwGHVUgAwIQ0gIoAHoECCkQAQ">General Knowledge about...</a> · ‎<a href="https://www.octoparse.com/blog/scrape-google-search-results#benefits-of-scraping-google-search-results" ping="/url?sa=t&amp;source=web&amp;rct=j&amp;opi=89978449&amp;url=https://www.octoparse.com/blog/scrape-google-search-results%23benefits-of-scraping-google-search-results&amp;ved=2ahUKEwjDjcDtkYKCAxUocGwGHVUgAwIQ0gIoAXoECCkQAg">Benefits of scraping Google...</a>
        </div>
      </div>
    </div>
  </div>

</div>
```


## assignments
1. Do a search with Google and obtain a Google SERP, e.g. https://www.google.com/search?q=something, wherere `something` is your word(s) or phrase.
  Report the result on https://github.com/dudung/lecture-notes/issues/6.
2. Using your previous Google SERP or a new one find the block of elements and classes used for an organic result. Use CTRL+SHIFT+J and highlight it, take a screenshot and paste it on https://github.com/dudung/lecture-notes/issues/7.
3. Find in the source of your previous SERP a block of HTML elements and classses that is representing an organic search result. Report it on https://github.com/dudung/lecture-notes/issues/8.
4. For a SERP find element and class for titles, links, snippets, and displayed links. Report this information on https://github.com/dudung/lecture-notes/issues/9.
5. Read [Node.js and Google SERP](https://medium.com/@6unpnp/node-js-and-google-serp-36031458b0ac) download the example [`GoogleorganicResultsScraper.js`](https://github.com/Darshan972/GoogleScrapingBlogs/blob/main/GoogleorganicResultsScraper.js), modify it with your query and report it on https://github.com/dudung/lecture-notes/issues/11.
6. Modify [`GoogleorganicResultsScraper.js`](https://github.com/Darshan972/GoogleScrapingBlogs/blob/main/GoogleorganicResultsScraper.js) by changing `organicResults` to `response.body` in the line containing `console.log()` and report it on https://github.com/dudung/lecture-notes/issues/12.
7. Use results from answer from 4 and use it in the `GoogleorganicResultsScraper.js` to find information about titles first. Comment the output of links, snippets, and displayed links.
Report the output in https://github.com/dudung/lecture-notes/issues/13.
8. Continue answer 7 for links, snippets, and display links. Report in on https://github.com/dudung/lecture-notes/issues/14. Use something `$('div[data-example="1"]');` to find and element with certain attribute if necessary.
9. Save JSON file to a file by adding some lines. Report this additional lines on https://github.com/dudung/lecture-notes/issues/15.
10. Create a Medium story about your journey today in scraping a Google SERP. Choose a provocative title to attract readers. Report that on https://github.com/dudung/lecture-notes/issues/16.
11. Read [Google Search Operators: The Complete List (44 Advanced Operators)](https://ahrefs.com/blog/google-advanced-search-operators/) and show how to find a definition about something in a particular website between 2000 and 2010. Report it on  https://github.com/dudung/lecture-notes/issues/17.
12. Do you have any idea how to integrate 11 with SERP and scrape it?


## previous notes
+ [web scraping](../0069/)
+ [fun with random number](../0102/)
