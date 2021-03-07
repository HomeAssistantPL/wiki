---
title: Automatyzacje i skrypty
has_children: true
nav_exclude: false
has_toc: false
parent: "Gotowce"
---
Automatyzacje/Skrypty
{: .label .label-green }

# Automatyzacje i skrypty

<ul>
    {% for pg in site.pages %}
        {% if pg.parent == page.title %}
            <li>
                <a href="{{ site.url }}{{ site.baseurl }}/{{ pg.url }}">{{ pg.title }}</a>
            </li>
        {% endif %}
    {% endfor %}
</ul>

