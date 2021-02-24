# DIY rozdzielnica na przekaźnikach bistabilnych dwukanałowych
Przekaźniki bistabilne różnią się od zwykłych tym, że potrzebują sterowanie tylko do zmiany stanu (włączenia bądź wyłączenia). Czyli sterowane są krótkimi impulsami - na przykład wywołanymi krótkim naciśnięciem przycisku chwilowego.
Wynika stąd też problem - nie wiadomo jaki stan w danej chwili ma przekaźnik (czy jest włączony czy wyłączony). Dlatego warto wykorzystać przekaźnik z dwoma parami styków. Pierwsza para steruje obwodem oświetleniowym. Druga para jest podpięta do wejście sterownika i pozwala mu monitorować stan przekaźnika. Z kolei, gdy sterownik chce zmienić stan przekaźnika (np. na skutek polecenia z Home Assistant), to wystarczy, że zasili przekaźnik krótkim impulsem. W tym celu, równolegle do wyłącznika ściennego montuje się przekaźnik pomocniczy (zwykły, nie bistabilny) lub SSR sterowany ze sterownika. 
Wejścia dla drugiej pary styków oraz wyjścia dla przekaźników pomocniczych mogą być połączone bezpośrednio z wejściami i wyjściami mikrokontrolera lub poprzez ekspander.
W tym rozwiązaniu wyłącznik ścienny bezpośrednio steruje przekaźnikiem, dzięki czemu ewentualna awaria części smart **nie blokuje** ręcznego sterowania.

Rozwiązanie to występuje w dwóch wariantach, różniących się napięciem sterującym przekaźnik bistabilny.

## Przekaźniki sterowane 230V AC
Przycisk chwilowy w pokoju zasilany z 230V AC - bezpośrednio steruje przekaźnikiem bistabilnym. Musi być podłączony przewodem elektrycznym np. 1,5mm2 350V.
Pierwszy kanał przekaźnika bistabilnego steruje obwodem 230V AC światła
Drugi kanał przekaźnika bistabilnego pracuje na niskim napięciu - jest podłączony do wejścia sterownika (np. zwiera wejście pull-up do masy)
Sterownik steruje przekaźnikiem pomocniczym (lub SSR) podając na niego krótki impuls niskiego napięcia. Przekaźnik pomocniczy podłączony równolegle do wyłacznika podaje impuls 230V AC na wejście przekaźnika bistabilnego.

Wymagany jest zasilacz w rozdzielnicy do zasilania sterownika i przekaźników pomocniczych. Przekaźniki bistabilne zasilane są z 230V AC.

## Przekaźniki sterowane DC
Przycisk chwilowy w pokoju zasilany jest z niskiego napięcia i bezpośrednio steruje przekaźnikiem bistabilnym. Może być podłączony przewodem elektrycznym np. 1,5mm2 ale można użyć także przewodu niskonapięciowego np. skrętki UTP lub przewodów teletechnicznych (alarmowych) 0,75mm.
Pierwszy kanał przekaźnika steruje obwodem 230V AC światła.
Drugi kanał przekaźnika bistabilnego pracuje na niskim napięciu - jest podłączony do wejścia sterownika (np. zwiera wejście pull-up do masy)
Sterownik steruje przekaźnikiem pomocniczym (lub SSR) podając na niego krótki impuls niskiego napięcia. Przekaźnik pomocniczy podłączony równolegle do wyłacznika podaje impuls niskiego napięcia na wejście przekaźnika bistabilnego.

Wymagany zasilacz w rozdzielnicy do zasilania sterownika, przekaźników pomocniczych i przekaźników bistabilnych.