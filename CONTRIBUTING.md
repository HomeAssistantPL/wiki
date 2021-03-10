---
title: Współtworzenie treści
nav_exclude: false
# nav_order: 5
has_children: true
---

# Jak współtworzyć treści

## Słowo wstępu

Nasza strona [wiki](https://homeassistantpl.github.io/wiki/) zbudowana jest w oparciu o generator [Jekyll](https://jekyllrb.com/). Treści na stronę tworzymy przy użyciu [Markdown](https://pl.wikipedia.org/wiki/Markdown), dzięki czemu nie jest wymagana znajomość HTML-a. 

Jeśli chcesz wpółtworzyć treści, zapoznaj się z metodami opisanymi poniżej oraz [przykładami użycia Markdown](https://guides.github.com/features/mastering-markdown/#examples).

## Metoda prosta

Poniższa metoda zalecana jest w przypadku drobnych zmian w treści istniejących stron. Jej zaletą jest możliwość edycji plików bezpośrednio w przeglądarce. Nie pozwala ona jednak na podgląd wprowadzonych zmian bezpośrednio na stronie, ani na dodawanie treści z obrazkami.

* Użyj linku **"Edytuj stronę na GitHub"**, znajdującego się na dole każdej strony
* Dokonaj [edycji](https://docs.github.com/en/github/managing-files-in-a-repository/editing-files-in-your-repository) treści
* Zapisz zmiany używając `Commit changes`
* Utwórz [Pull request](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request#creating-the-pull-request) (PR) 

## Metoda alternatywna

Poniższa metoda wymaga skonfigurowania środowiska lokalnego, lecz dzięki temu możliwe będzie **przetestowanie** i podgląd zmian przed zapisaniem ich w repozytorium. 

### Wymagania
* [Jekyll](https://jekyllrb.com/docs/installation/)
* [Git](https://git-scm.com/)

### Uruchomienie środowiska
* [Rozwidl](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo) nasze [gitowe repozytorium](https://github.com/HomeAssistantPL/wiki)
* Sklonuj repozytorium wykonując `git clone URL_TWOJEGO_FORKA`
* Zmień folder: `cd wiki`
* Zainstaluj wymagane biblioteki `bundle install`
* Uruchom lokalny serwer: `bundle exec jekyll serve`
* W przeglądarce wejdź pod adres `http://localhost:4000/wiki/`, aby zobaczyć lokalną kopię strony

### Wprowadzanie zmian
* Dokonaj edycji treści istniejącej strony lub [utwórz nową stronę](wspoltworzenie-tresci/tworzenie-nowej-strony)
* Upewnij się, że dokonane zmiany są poprawne **testując** je w swoim lokalnym środowisku
* Wykonaj `git commit -m "ZWIĘZŁY_OPIS_ZMIAN"`, a następnie `git push`, aby lokalne zmiany znalazły się na serwerze `github.com`
* Utwórz [Pull request](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request#creating-the-pull-request) (PR) 
