---
layout: page
title: Projects
permalink: /projects/
description: A list of projects that I am (or was) involved throughout the years
nav: true
nav_order: 3
display_categories: []
horizontal: false
---

<!-- pages/projects.md -->
<div class="projects column">

  {% assign sorted_projects= site.projects | sort: "end" | reverse %}
  {% for project in sorted_projects %}

  <div class="card mb-3 hoverable btn-project projectbutton card-horizontal">
    <div class="row no-gutters ">
      <div class="col-md-4">
        {% if project.img %}
        <img class="card-img-project" src="/assets/projects{{ project.img | relative_url }}">
        {% else %}
        <img class="card-img-project" src="/assets/projects/unknown.png">
        {% endif %}
      </div>
      <div class="col">
        <h2 class="card-title">{{ project.title }}</h2>
        <span style="display:block;" class="card-text span-year">{{ project.description }}</span>
        <br>
        <span style="display:block;" class="card-text span-year span-space"><i>Year started: {{ project.year }} &nbsp;&nbsp;&nbsp; Year Ended: {{ project.end }}</i></span>
      {%- if project.website -%}
        <p class="card-text">For more information: <a class="project-title" href="{{ project.website }}">{{ project.website }}</a></p>
      {%- endif -%}

      </div>
      <div class="hidden">
        <p>{{ project.long_description }}</p>
      </div>
    </div>
  </div>

{% endfor %}

</div>
