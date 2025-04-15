{{- $words := split .Name "-" -}}
{{- $url := lower (index $words 0) -}}
{{- $title := delimit (after 1 $words) " " -}}
+++
title = '{{ $title }}'
date = '{{ .Date }}'
authors = ['viridi']
draft = true
type = 'notes'
tags = []
categories = []
url = '{{ $url }}'
+++

<!-- more -->
