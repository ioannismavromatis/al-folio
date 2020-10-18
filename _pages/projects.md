---
layout: page
title: projects
permalink: /projects/
nav: true
social: true
post-header: false
---
<header class="post-header">
    <h1 class="post-title">Projects</h1>
    <p class="post-description">A list of projects that I was involved throughout the years.</p>
</header>

<div class="projects column">

  {% assign sorted_projects = site.projects | sort: "year" | reverse %}
  {% for project in sorted_projects %}    

  <div class="card mb-3 hoverable card-horizontal" role="button">
    <div class="row no-gutters ">
      <div class="col-md-4">
        {% if project.img %}
        <img class="card-img" src="/assets/projects/{{ project.img | relative_url }}" alt="project thumbnail">
        {% endif %}
      </div>
      <div class="card-body">
        <h2 class="card-title">{{ project.title }}</h2>
        <span class="card-text span-year">{{ project.description }}</span>
        <span class="card-text span-year span-space"><i>Year started: {{ project.year }} &nbsp;&nbsp;&nbsp; Year Ended: {{ project.end }}</i></span>
        {%- if project.website -%}
        <p class="card-text">For more information: <a class="project-title" href="{{ project.website }}">{{ project.website }}</a></p>
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