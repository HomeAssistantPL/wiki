# Szeregowa
Serial TTL, nie mylić z [RS232](RS232). W serial TTL sygnał ma napięcie ok. 5V i ok. 0V. Czasem jest też używane 3,3V zamiast 5V.

Transmisja jest jednokierunkowa TX->RX, do komunikacji w dwie strony potrzeba 3 linii: masy i TX -> RX oraz RX <- TX.

Połączenie punkt-punkt - można połączyć tylko dwa urządzenia. 

Urządzenia mogą nadawać równocześnie, bo wykorzystują osobne linie.
Średnia odległość

Możliwe różne prędkości transmisji

Chyba każdy mikrokontroler ma dedykowane wejście szeregowe RX i wyjście TX. Jeśli są one zajęte lub potrzeba więcej, to łatwo użyć innych pinów i biblioteki do programowej obsługi (SoftwareSerial).

Linie portu szeregowego są też w Raspberry Pi. 

Większe komputery nie mają takiego złącza i potrzeba stosować przejściówki USB-Serial (na układach CP2102 lub CH340).
