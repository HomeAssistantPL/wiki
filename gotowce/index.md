---
title: Gotowce
nav_exclude: false
has_children: true
has_toc: false
nav_order: 5
---
# Gotowce

<ul>
    {% for pg in site.pages %}
        {% if pg.parent == page.title %}
            <li>
                <a href="{{ site.url }}{{ site.baseurl }}/{{ pg.url }}">{{ pg.title }}</a>
            </li>
        {% endif %}
    {% endfor %}
</ul>