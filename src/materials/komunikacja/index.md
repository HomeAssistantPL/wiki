---
title: Komunikacja
nav_order: 2
tags:
  - komunikacja
---

Komunikacja urządzeń z Home Assistant może być przewodowa lub bezprzewodowa (radiowa).
Komunikacja przewodowa powinna być **pierwszym wyborem** tam gdzie to tylko możliwe, ponieważ:

- jest bardziej odporna na zakłócenia:
  - pochodzące od innych urządzeń elektrycznych
  - pochodzące od innych urządzeń smart (zwłaszcza przy ich dużej liczbie)
  - celowe zakłócanie przez osoby trzecie
- jest bardziej odporna na atak (podsłuchanie, hackowanie), bo wymaga fizycznego wpięcia do przewodów komunikacyjnych
- bardziej niezawodna - grube ściany (np. stropy żelbetonowe) nie tłumią sygnału
- można od razu doprowadzić zasilanie - przewodami komunikacyjnymi lub dodatkową parą

Komunikacja przewodowa wymaga prowadzenia przewodów, więc wchodzi w grę tylko przy budowie nowego domu lub przy większym remoncie.

Komunikacja bezprzewodowa powinna być stosowana w przypadku gdy:

- poprowadzenie przewodów jest niemożliwe lub nieopłacalne
- urządzenie będzie przenoszone z miejsca na miejsce
- urządzenie nie jest krytyczne i ewentualne problemy z jego działaniem nie będą bardzo bolesne

[Rodzaje komunikacji przewodowej](../Rodzaje-komunikacji-przewodowej)

[Rodzaje komunikacji bezprzewodowej](../Rodzaje-komunikacji-bezprzewodowej)

## Chmura

Większość gotowych urządzeń smart korzysta z połączenia z chmurą czyli serwerami producenta w Internecie. Aplikacja na smartfonie łączy się też z tymi serwerami, dzięki czemu można odczytywać stan czujników i sterować urządzeniem.
Jednakże taki sposób ma też wady:

- urządzenie i aplikacja musi mieć cały czas dostęp do serwerów producenta - brak internetu, problemy z serwerami mogą zakłócić lub całkowicie uniemożliwić komunikację z urządzeniem, a co za tym idzie sterowanie nim
- ponieważ urządzenie musi mieć dostęp do internetu, to bardziej narażone jest na atak hackerów

Z tego powodu preferowana jest **lokalna** integracja, bez wykorzystania chmury. W tym rozwiązaniu, Home Assistant steruje urządzeniem bezpośrednio przez sieć lokalną.
