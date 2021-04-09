# Ethernet
Połączenie przewodem typu skrętka nieekranowana UTP lub ekranowana FTP składającym się z 8 przewodów pogrupowanych w 4 pary skręconych ze sobą przewodów. Najważniejszym parametrem skrętki jest kategoria - im wyższa kategoria tym wyższa możliwa prędkość transmisji (o ile podłączone urządzenia pozwalają). Proste urządzenia działają z prędkością 100 Mbit/s (FastEthernet), lepsze - 1 Gbit/s lub więcej.
Urządzenia nie są łączone ze sobą bezpośrednio lecz poprzez switch (często jest częścią routera). Dla każdego urządzenia potrzebny jest port w switchu.
Poprzez skrętkę można też zasilać urządzenia (Power over Ethernet, PoE). Zasilacz może być wbudowany w switch (switch PoE) lub osobny, korzystający z przejściówki.
Są różne standardy zasilania PoE, dla prostych urządzeń na 100 Mbit/s można wykorzystać dwie, nieużywane pary (zazwyczaj pary niebieski/biało-niebieski, brązowy/biało-brązowy - piny 4, 5 oraz 7, 8) i specjalny adapter wstrzykiwacz PoE z gniazdem DC. 
Przy transmisji 1 GBit/s wykorzystywane są wszystkie pary, więc zasilanie jest puszczone wszystkimi parami.
W układach DIY do obsługi Ethernet wykorzystuje się moduły:
* ENC28J60 - niezalecane, nie obsługują pełnego stosu, wymagają dużo kodu i pamięci w procesorze, ale są tańsze
* W5100 i nowsze: W5500, W5600 - obsługują pełny stos TCP, są lepsze i łatwiejsze w użyciu. Niektóre moduły obsługują lub mają możliwość dodania modułu PoE
* ESP32 z PHY (np. Olimex ESP32-POE, wESP32,  LILYGO TTGO T-Internet-POE ESP32-WROOM LAN8270A, OpenHacks LAN8720, Wireless Tag WT32-ETH01)

Większość komputerów ma złącze Ethernet, a jeśli nie to można skorzystać z WiFi, które poprzez AccessPoint umożliwia połączenie z urządzeniami na kablowym Ethernecie.
