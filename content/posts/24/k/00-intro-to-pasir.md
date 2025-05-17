+++
title = 'intro to pasir'
date = 2024-11-02T20:22:25+07:00
draft = false
tags = ['note']
authors = ['viridi']
url = '24k00'
+++
Create pasir as continuation of butiran, which has undetermined pause.

<!--more-->



Updates:

+ It is now has Python and JavaScript parts, where the first is for calculation and the second is for visulization.

Progress:

+ `01-dec-2024` Create rust.
  - Copy content from [pasir](https://dudung.github.io/pasir) to [rust](https://dudung.github.io/rust).
  - End this log and move to intro to rust (not yet made).
+ `30-nov-2024` Use [blockquote render hooks](https://gohugo.io/render-hooks/blockquotes/).
  - Update Hugo from `v0.124.1` to [`v0.139.3`](https://github.com/gohugoio/hugo/releases/tag/v0.139.3) since it is new in `v0.132.0`.
  - Create `layouts/_default/_markup/render-blockquote.html`.
  - Modify `hugo.toml`.
  - Use first blockquote in [`24k17`](/rust/24k17) note.
+ `26-nov-2024` Update pasir to PyPI with version [`0.0.5`](https://pypi.org/project/pasir/0.0.5/), including `datasets` package.
+ `16-nov-2024` Change post to note in `layouts/partials/footer.html`.
+ `15-nov-2024` Add icon for external link, that open new tab.
  - Create `render-link.html` in `layouts/_default/_markup` as in Hugo  [`28677`](https://discourse.gohugo.io/t/simple-way-to-open-in-a-new-tab/28677/4?u=dudung).
  - Add style for the external link []() as given in W3Schools [`fa fa-external-link`](https://www.w3schools.com/icons/tryit.asp?filename=tryicons_fa-external-link).
+ `10-nov-2024` Fix `hugo.yml` and `python-publish.yml` GitHub Actions.
  - Create fresh repository.
  - Clone `pasir` to `testpasir`.
  - Rename `pasir` to `old-pasir` and `testpasir` to `pasir`.
  - Test blog built with Hugo, still error [`11760110667`](https://github.com/dudung/pasir/actions/runs/11760110667/job/32760300240).
  - Finally [`hugo.yml`](https://github.com/dudung/pasir/blob/main/.github/workflows/hugo.yml) work [`11760166744`](https://github.com/dudung/pasir/actions/runs/11760166744/job/32760418928).
  - Check existance of `secrets.A_TOKEN` using [`check-secret.yml`](https://github.com/dudung/pasir/blob/main/.github/workflows/check-secret.yml).
  - Twine works for [pasir 0.0.1](https://pypi.org/project/pasir/0.0.1/) but not yet GitHub Action [`python-publish.yml`](https://github.com/dudung/pasir/blob/main/.github/workflows/python-publish.yml).
  - Finally `python-publish.yml` works [`11761303889`](https://github.com/dudung/pasir/actions/runs/11761303889/job/32762892975), after defining it as [Trusted Publishers](https://blog.pypi.org/posts/2023-04-20-introducing-trusted-publishers/), but this is not a unrecommended way. Then it does not work anymore for other GitHub Action, e.g. `ci-cd.yml` as illustred [here](https://blog.pypi.org/posts/2023-04-20-introducing-trusted-publishers/).
  - Now, `python-publish.yml` works [`11762105117`](https://github.com/dudung/pasir/actions/runs/11762105117) without adding it to Trusted Publishers, stil using `__token__` as user and `secrets.A_TOKEN` as password. Not really sure how it can happen.
  - The steps and discussion to make AIP Token Authentification works is available on [`67303803-ff04-800a-aa67-ba747bd57ebf`](https://chatgpt.com/share/67303803-ff04-800a-aa67-ba747bd57ebf). 
+ `09-nov-2024` Use a word for section instead of `##` prefix.
  - Current section words are Update, Progress, Info, Activities.
  - It is to accompany Tags, which is genereated by Hugo template.
  - Still unable to fix error [`11753616655`](https://github.com/dudung/pasir-old/actions/runs/11753616655/job/32746705870) while deploying to [PyPI](https://pypi.org/).
  - Similar GitHub Action works on [`11753526587`](https://github.com/dudung/remah/actions/runs/11753526587/job/32746507721).
  - Try a solution but still not works [`11753616655`](https://github.com/dudung/pasir-old/actions/runs/11753616655/job/32750716145).
  - It works on new repo with [`11755638995`](https://github.com/dudung/pasir/actions/runs/11755638995/job/32750903513)
+ `03-nov-2024` Add [butiran](https://pypi.org/project/butiran/).
  - Create folder `butiran` in `src` for integration to pasir.
  - Unable to fix error [`11646202081`](https://github.com/dudung/pasir-old/actions/runs/11646202081) while uploading package to [PyPI](https://pypi.org/).
+ `02-nov-2024` Create [pasir](https://github.com/dudung/pasir-old/tree/0245302c3eef38d6948c059ba458a0738f3e4a00).
  - Combine `src` (Python + JavaScript) and `blog` (Hugo) in a repo.
  - Fix default `hugo.yml` for GitHub Action.
    + Add `-s blog` after `run: | hugo`.
    + Modify `./public` to `./blog/public` in `path` of `Upload artifact`.
