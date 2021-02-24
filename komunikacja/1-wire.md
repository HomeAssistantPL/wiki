# 1-wire (OneWire)

Standard firmy Dallas stosowany głównie do podłączania czujników z najbardziej znanym DS1820 na czele.
Wymaga jednej linii sygnałowej i masy. Niektóre czujniki mogą korzystać z zasilania z linii sygnałowej (tzw. pasożytniczego). Mogą też być zasilane dodatkową linią.
Każdy czujnik ma swój adres - mikrokontroller może wyszukać jakie czujniki są podpięte (ich adresy), a potem odpytywać je po adresie.
W mikrokontrolerach do komunikacji można wykorzystać dowolny pin plus odpowiednia biblioteka.
W komputerach nie ma złącz tego typu - potrzebna jest przejściówka USB-1-wire