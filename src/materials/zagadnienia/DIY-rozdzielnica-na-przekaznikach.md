# DIY rozdzielnica na przekaźnikach/SSR
W tym wariancie, w rozdzielnicy montowany jest sterownik, który steruje przekaźnikami, które załączają obwody z oświetleniem.
Do sterownika mogą być podpięte przewodami wyłączniki ścienne. Sterownik zapewnia także integrację z Home Assistant, komunikując się z nim przez radiowo (zawyczaj Wifi) lub przewodowo (Ethernet). 

Ponieważ tylko sterownik może uruchomić przekaźnik i w efekcie włączyć światło, to awaria sterownika oznacza **brak** światła.

Wyłącznik w pokoju jest podłączony do sterownika przewodem. Ponieważ używane jest niskie napięcie DC, to może być użyty normalny przewód eletryczny 1,5mm2 lub cieńszy, np. skrętka UTP.
Napięcie DC z zasilacza doprowadzone jest do wyłącznika w pokoju. Naciśnięcie lub włączenie wyłącznika powoduje podanie napięcia na wejście sterownika. Z uwagi na odległość (spadki napięć) i zakłócenia wskazane jest napięcie 12V lub wyższe oraz izolacja optyczna (transoptor) na wejściu sterownika.
Sterownik reagując na zmiany na wejściu lub polecenia wysłane z Home Assistant załącza lub wyłącza przekaźnik, który steruje światłem podając napięcie 230V AC na obwód żarówki.
Z uwagi na pobierany prąd oraz zakłócenia przy przełączaniu przekaźnika (spowodowane indukcyjnością cewki), przekaźniki zazwyczaj nie są sterowane bezpośrednio z mikroprocesora, lecz przez optoizolację (transoptor) i tranzystor.

Wymagany zasilacz w rozdzielnicy do zasilania sterownika i przekaźników.

#### Mikrokontroler plus przekaźniki połaczone bezpośrednio
Jeden wyłącznik zajmuje jedno wejście mikrokontrollera, jeden przekaźnik zajmuje jedno wyjście mikrokontrolera - dla dużej liczby wyłączników i przekaźników potrzeba dużo wyjść czyli np. Arduino Mega

#### Mikrokontroler plus przekaźniki połączone przez ekspander
Wyłączniki są podłaczone do wejść ekspandera, przekaźniki są podłączone do wyjść ekspandera.
Ekspander zajmuje dwa wyjścia mikrokontrolera więc można użyć mikrokontrollera z małą liczbą wyjść np. ESP8266 (Wemos D1 Mini, NodeMcu)