---
title: Tworzenie nowej strony
nav_exclude: false
nav_order: 1
parent: "Współtworzenie treści"
---
# Tworzenie nowej strony

Do tworzenia nowych stron zalecana jest metoda opisana szczegółowo [tutaj](../CONTRIBUTING#metoda-alternatywna). Po przygotowaniu lokalnego środowiska możesz przejść do tworzenia nowej strony.

## Wykonaj poniższe kroki
* Utwórz nowy plik z rozszerzeniem `.md` w lokalizacji związanej z tematem Twojej strony
* Treść pliku musi zaczynać się od sekcji [Front Matter](https://jekyllrb.com/docs/front-matter/). Przykładowy Front Matter:

```yaml
---
title: Tworzenie nowej strony
nav_exclude: false
parent: "Współtworzenie treści"
---
```

* Możesz również skorzystać z [szablonu]({{ site.gh_edit_repository }}/{{ site.gh_edit_view_mode }}/{{ site.gh_edit_branch }}{% if site.gh_edit_source %}/{{ site.gh_edit_source }}{% endif %}/wspoltworzenie-tresci/szablon.md). Ten sam szablon w wersji `raw`, wraz z objaśnieniami jak korzystać z poszczególnych parametrów znajdziesz [tutaj](https://raw.githubusercontent.com/{{ site.repository }}/{{ site.gh_edit_branch }}{% if site.gh_edit_source %}/{{ site.gh_edit_source }}{% endif %}/wspoltworzenie-tresci/szablon.md)
* Poniżej sekcji `Front Matter` umieść treść swojej strony korzystając z [Markdown](https://guides.github.com/features/mastering-markdown/#examples)
* **Przetestuj**, a następnie opublikuj zmiany zgodnie z kolejnymi krokami [instrukcji](../CONTRIBUTING#wprowadzanie-zmian)
