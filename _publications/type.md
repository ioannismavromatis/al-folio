---
layout: page
permalink: /publications/type
title: Publications
description: 
sorting: type
pubtype: year
nav: true
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
{% include bibbuttons.html %}

{% for bibtype in page.bibtypes %}
  {% capture category_counter %}
  {% bibliography_count -f {{site.scholar.bibliography}} -q {{bibtype.bibquery}} %}
  {% endcapture %}

  <div style="counter-reset:bibitem {{ category_counter | plus:1 }}">
  <div class="publications">
  <h2 class="type">{{bibtype.text}}</h2>
    {% bibliography -f {{site.scholar.bibliography}} -q {{bibtype.bibquery}} %}
  </div>

{% endfor %}
