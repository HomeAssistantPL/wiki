# i2c
Stosowana głównie do łączenia układów na bliskie odległości.
Potrzebne 3 przewody - masa i 2 linie:
* SDA - linia danych
* SCL - linia zegara

Każde urządzenie ma swój adres. Zazwyczaj jest jedno urządzenie nadrzędne (master) inicjujące transmisję, choć bywają też przypadki multi-master.
Mikrokontrolery zazwyczaj mają dedykowane piny SDA i SCL.
W komputerach nie ma raczej złącz tego typu.