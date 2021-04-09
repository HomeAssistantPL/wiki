# Bramki ZigBee

Bramki ZigBee pozwalają na połączenie urządzeń komunikujących się przez ZigBee z siecią lokalną poprzez WiFi lub Ethernet. W sieci ZigBee pełnią rolę tzw. koordynatora.

Mimo jednego standardu ZigBee i teoretycznej zgodności urządzeń różnych producentów, **bramki obsługują tylko urządzenia tego samego producenta** (z małymi wyjatkami).

# Którą bramkę kupić?
Jeśli masz urządzenia jednego producenta i zamierzasz przy nim pozostać - kup bramkę tego producenta.
Jeżeli chcesz używać urządzeń różnych producentów lub użyć innej integracji w Home Assistant kup bramkę uniwersalną: **Conbee2, CC2652R lub CC2652P  - nie kupuj CC2531!.**

# Bramki producentów
## Lidl
[SILVERCREST Bramka sieciowa Zigbee Smart Home](../producenci/Lidl/SILVERCREST-Bramka-sieciowa-Zigbee-Smart-Home)


## Ikea
[Bramka Ikea Tradfri](../producenci/Ikea/Bramka-Ikea-Tradfri)

## Philips
TODO

## Tuya
TODO

## Sonoff
Sonoff ZBBridge
* ZigBee 3.0
* WiFi 2.4GHz
* brak wsparcia w zigbee2mqtt

Możliwość przeflashowania na oprogramowanie 3rd party.

[https://www.amazon.co.uk/Gateway-Wirelessly-Connect-Devices-Compatible/dp/B08BCL961G](https://www.amazon.co.uk/Gateway-Wirelessly-Connect-Devices-Compatible/dp/B08BCL961G)


## Xiaomi
[Mi Smart Home Hub BLE ZigBee Wi-Fi](../producenci/Xiaomi/Mi-Smart-Home-Hub-BLE-ZigBee-WiFi)


# Bramki uniwersalne
## Conbee2
**Zalecana bramka ZigBee do użycia z HomeAssistant**:
* mocny sygnał (max 10mW), dzięki wbudowanemu wzmacniaczowi (20dB)
* wbudowana antena
* zasięg do 30m w budynku (2-3 pokoje lub piętra), do 200m w polu widzenia
* obsługuje urządzenia wielu producentów: [https://www.phoscon.de/en/conbee2/compatible](https://www.phoscon.de/en/conbee2/compatible)
* może obsługiwać duże sieci
* działa na Raspberry Pi oraz komputerach PC - wpinana do USB
* integracja z Home Assistant:
	* deCONZ
	* Zigbee2mqtt

Urządzenie można kupić na [Amazon](https://www.phoscon.de/en/conbee2?buy=1#buy) 
Cena ok. 40EUR

Strona producenta: [https://www.phoscon.de/en/conbee2](https://www.phoscon.de/en/conbee2)


## CC2531
Tak naprawdę nie jest to bramka, lecz sniffer/analizator pakietów do którego wgrywa się oprogramowanie zamieniające go w koordynatora.

**Jednakże urządzenie nie jest skonstruowane do tego by być bramką ZigBee - ma słaby zasięg i problemy ze stabilnością.**

* stick USB bez anteny lub z antentą (która niewiele poprawia zasięg)
* obsługiwany przez zigbee2mqtt

Znane problemy:
* słaby sygnał wynikający z braku wzmacniacza (5dB)
* problemy z obsługą wiekszej sieci (ponad 20 urządzeń)
* wymaga flashowania przed użyciem (lub kupna już sflashowanego)
* okresowe odłączanie się bramki - konieczny restart komputera
* firmware pada sobie co jakiś czas - trzeba kilka razywyciagac i wkładać donglea z USB

* Cena ok. 4$


## CC1352
* Bez wzmacniacza
* stosunkowo duża płytka
* cena ok. 6,50$
* zasięg porównywalny z CC2530 z antenką
Strona producenta: [https://www.ti.com/tool/LAUNCHXL-CC1352P](https://www.ti.com/tool/LAUNCHXL-CC1352P)

## CC1352P
* wersja P ma wzbudowany wzmacniacz (20dB).
* konfiguracja podobna do CC2531.
* stosunkowo duża płytka
* obsługiwany przez zigbee2mqtt
* może obsługiwać duże sieci
* wystarczy sflashować przez USB i aplikację Uniflash
* cena ok. 49$
Do kupienia np. w Mouser Electronics w Niemczech
Strona producenta: [https://www.ti.com/tool/LAUNCHXL-CC1352P](https://www.ti.com/tool/LAUNCHXL-CC1352P)

## CC2652R
* stick USB 
* antenka
* brak wzmacniacza (wersja R i RB)
* może obsługiwać duże sieci
* obsługiwany i **polecany** przez zigbee2mqtt:
	* Electrolama zzh!
	* [https://www.tindie.com/products/electrolama/zzh-cc2652r-multiprotocol-rf-stick/#product-reviews](https://www.tindie.com/products/electrolama/zzh-cc2652r-multiprotocol-rf-stick/#product-reviews)
	* [https://electrolama.com/projects/zig-a-zig-ah/](https://electrolama.com/projects/zig-a-zig-ah/)

## CC2652RB
* stick USB 
* antenka
* brak wzmacniacza (wersja R i RB)
* może obsługiwać duże sieci
* obsługiwany i **polecany** przez zigbee2mqtt: 
	* Slaesh's CC2652RB stick
		* [https://slae.sh/projects/cc2652/](https://slae.sh/projects/cc2652/)
		* cena ok. 30EUR
	* Wersja DIY
		* Obudowa do wydruku: [https://www.thingiverse.com/thing:3928171](https://www.thingiverse.com/thing:3928171)

## CC2652P
**Polecany!**
* stick USB 
* antenka
* wzmacniacz
* Obudowa do wydruku: [https://www.thingiverse.com/thing:3928171](https://www.thingiverse.com/thing:3928171)
* wersje:
	* EByte
	* RF-STAR
* cena ok. 40$

