---
layout: page
title: projects
permalink: /projects/
description: 
nav: true
social: true
nav_order: 2
nav_order: 2
# display_categories: [work, fun]
horizontal: false
---
<header class="post-header">
    <h1 class="post-title">Projects</h1>
    <h2 class="post-description">A list of projects that I was involved throughout the years.</h2>
</header>

<div class="projects column">

  {% assign sorted_projects = site.projects | sort: "year" | reverse %}
  {% for project in sorted_projects %}    

  <div class="card card-project mb-3 hoverable card-horizontal" role="button">
    <div class="row no-gutters ">
      <div class="col-md-4">
        {% if project.img %}
        <img class="card-img-project" src="/assets/projects/{{ project.img | relative_url }}" alt="project thumbnail">
        {% endif %}
      </div>
      <div class="col">
        <h2 class="card-title">{{ project.title }}</h2>
        <span style="display:block;" class="card-text span-year">{{ project.description }}</span>
        <span style="display:block;" class="card-text span-year span-space"><i>Year started: {{ project.year }} &nbsp;&nbsp;&nbsp; Year Ended: {{ project.end }}</i></span>
        {%- if project.website -%}
        <span style="display:block;" class="card-text">For more information: <a class="project-title" href="{{ project.website }}">{{ project.website }}</a></span>
        {%- endif -%}
      </div>
      {%- if project.long_description -%}
      <div class="go-corner" href="#">
        <i class="fas fa-expand-alt"></i>
      </div>
      <div class="hidden">
        <p>{{ project.long_description }}</p>
      </div>
      {%- endif -%}
    </div>
  </div>

{% endfor %}

</div>