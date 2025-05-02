---
layout: page
permalink: /publications/type
title: Publications
description:
sorting: type
pubtype: year
nav: false
post-header: true
social: true
bibtypes:
  - bibquery: "@article"
    text: "Journals & Magazines"
  - bibquery: "@patent"
    text: "Patents"
  - bibquery: "@inproceedings"
    text: "Conferences & Workshops"
  - bibquery: "@book"
    text: "Book Chapters"
  - bibquery: "@misc|@thesis"
    text: "Other"
---
{% include bibbuttons.liquid %}

{% for bibtype in page.bibtypes %}
  {% capture category_counter %}
  {% bibliography_count -q {{bibtype.bibquery}} %}
  {% endcapture %}

  <div style="counter-reset:bibitem {{ category_counter | plus:1 }}">
  <div class="publications">
  <h2 class="type">{{bibtype.text}}</h2>
    {% bibliography -q {{bibtype.bibquery}} %}
  </div>

{% endfor %}
