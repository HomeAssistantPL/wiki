---
title: "Firmware"
nav_exclude: false
parent: "Sprzęt"
---

# Firmware
Firmware to oprogramowanie wgrane do urządzeń smart.
Producent wgrywa własne oprogramowanie, które umożliwia użycie aplikacji producenta.
Część urządzeń pozwala na wgranie własnego firmware.
Do wgrywania może być konieczne podłączenie się do elektroniki urządzenia. Jednak dużo wygodniejszą opcją jest wgranie OTA (Over the Air, czyli przez WiFi).

Możliwość wgrywania firmware jest najczęściej wykorzystywana dla urządzeń opartych o układ ESP8266. Dlatego, jeśli myślisz o takiej operacji, zwróć uwagę, czy sprzęt który kupujesz jest oparty właśnie o ten układ.
Jeśli ktoś potrafi może napisać, skompilować i wgrać własny firmware korzystając np. z Arduino lub Platformio. 
Ale dużo prościej jest skorzystać z gotowych firmware, które pozwalają na konfigurację urządzenia przez stronę www.

Gotowe firmware dla ESP8266:
* [EspEasy](https://espeasy.readthedocs.io/en/latest/)
* [Supla](https://www.supla.org/pl/)
* [Tasmota](https://tasmota.github.io/docs/)

Każdy z tych firmware obsługuje wiele urządzeń oraz posiada integrację z Home Assistant (natywną bądź przez MQTT).

Sposobem pośrednim jest wykorzystanie dodatku do Home Assistant - [ESPHome](https://esphome.io/). Korzystając z niego, dla każdego urządzenia trzeba zdefiniować plik konfiguracyjny (yaml) określający cechy urządzenia, podłączone czujniki, przesyłane wartości oraz proste automatyzacje.
Na podstawie tego pliku ESPHome generuje kod (Arduino/C++), który jest kompilowany i następnie można go wgrać do urządzenia OTA lub kablem USB (przez ESPHome Flasher). Dla wielu urządzeń fabrycznych istnieją szablony takiej konfiguracji na stronach: 
* [esphome.io/devices](https://esphome.io/devices/)
* [esphome-devices.com](https://www.esphome-devices.com/)
