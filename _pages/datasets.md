---
layout: newdataset
title: Datasets
permalink: /dataset/
description: Available datasets
nav: true
social: true
nav_order: 4
---
<!-- pages/datasets.md -->
<div class="projects column">

  {% assign sorted_datasets= site.datasets | sort: "year" | reverse %}
  {% for dataset in sorted_datasets %}
  {% assign project = dataset %}

  <div class="card mb-3 card-horizontal projectbutton">
    <div class="row no-gutters ">
      <div class="col-md-4">
        {% if dataset.img %}
        <img class="card-img-project" src="/assets/projects{{ project.img | relative_url }}" alt="Image not found">
        {% endif %}
      </div>
      <div class="col">
        <h2 class="card-title">{{ dataset.title }}</h2>
        <span style="display:block; margin-bottom: 0.75rem;" class="card-text span-year">{{ dataset.description }}</span>
        <span style="display:block;" class="card-text span-year span-space"><i>Year Published: {{ dataset.year }}</i></span>
        <span style="display:block; margin-bottom: 0.75rem;" class="card-text span-year span-space"><i>Length: {{ dataset.length }}</i></span>
      {%- if dataset.website -%}
        <p class="card-text">For more information: <a class="project-title" href="{{ dataset.website }}">{{ dataset.website }}</a></p>
      {%- endif -%}

      {%- if dataset.long_description -%}
        <button title="Description (Show/hide)" class="datasetbutton btn btn-sm">More</button>
      {% endif %}
      {%- if dataset.download_link -%}
        <a role="button" name="download" id="download" href="{{ dataset.download_link }}" title="Download Dataset" class="btn btn-sm">Download</a>
      {% endif %}

      </div>
      <div class="hidden">
        <p>{{ project.long_description }}</p>
      </div>
    </div>
  </div>

{% endfor %}

</div>
