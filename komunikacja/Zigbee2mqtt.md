# Zigbee2mqtt

Strona projektu: https://www.zigbee2mqtt.io/
Oficjalny addon do Home Assistant: https://github.com/zigbee2mqtt/hassio-zigbee2mqtt


## Zmiana urządzenia na inne z zachowaniem dotychczasowych pan_id i channel

Żeby zachować pan\_id i channel trzeba odciąć adapter zigbee od innych urządzeń. Te rzeczywiście zdają się komunikować z nim od razu przy starcie. Ja po prostu wyłączyłem bezpieczniki odpowiadające za miejsca gdzie mam zigbee. Nie jestem pewien czy to by wystarczyło, czy bateryjne też robią kłopot, ale dla pewności opakowałem adapter folią alu ! Wtedy wstał bez problemu.

Ważne żeby przed całą akcją skopiować starą "database.db".

Natomiast niekoniecznie należy kopiować wcześniej plik zawierający "friendly names", czyli: "devices.yaml" lub "configuration.yaml". Dlaczego? Ano dlatego że zazwyczaj gdy dodajemy urządzenie do HA to entity name tworzy się w rodzaju: switch.0x00158d000325eff8\_switch\_left. Późniejsze dodanie "friendly name" dodaje atrybut "friendly name", ale nie zmienia nazwy entity. Natomiast jeśli wrzucimy "friendly names" wcześniej to entity będą się nazywać na przykład: switch.friendly\_name\_right. Jeśli w GUI odwoływaliście sie do tych pierwszych to będzie sporo zabawy ze zmianami.

Pewnie i tutaj da się to jakoś obejść, ale warto wiedzieć, notatka się przyda