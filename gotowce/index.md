---
title: Gotowce
nav_exclude: false
has_children: true
has_toc: false
nav_order: 5
---
# Gotowce

<ul>
    {% assign pages = site.pages | sort: "title" %}
    {% for pg in pages %}
        {% if pg.parent == page.title %}
            <li>
                <a href="{{ pg.url }}">{{ pg.title }}</a>
            </li>
        {% endif %}
    {% endfor %}
</ul>