---
title: Sceny
has_children: true
nav_exclude: false
has_toc: false
parent: "Gotowce"
---
Sceny
{: .label .label-yellow }

# Sceny

<ul>
    {% assign pages = site.pages | sort: "title" %}
    {% for pg in pages %}
        {% if pg.parent == page.title %}
            <li>
                <a href="{{ pg.url }}">{{ pg.title }}</a>, Autor: <a href="https://github.com/{{ pg.author }}">@{{ pg.author }}</a>
            </li>
        {% endif %}
    {% endfor %}
</ul>

