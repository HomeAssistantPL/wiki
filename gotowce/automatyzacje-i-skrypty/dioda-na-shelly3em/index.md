---
layout: config_example
title: Diosta na shelly3em
nav_exclude: true
has_children: false
parent: "Automatyzacje i skrypty"
grand_parent: "Gotowce"
author: "theundefined"
---
# Dioda na shelly3m

## Opis

Shelly 3EM posiada wbudowaną diodę. Niestety nie jest ona możliwa do sterowania za pomocą normalnych sensorów za pomocą żadnej z znanych mi integracji (wbudowanna ani mqtt). Można ją jednak obsłużyć za pomocą curla. Założenie poniżej - stały adres ip dla shelly i brak autoryzacji (jak jest potrzebna - wystarczy dodać w curlu).


## Konfiguracja switcha do przełączania

```yaml
switch:
  - platform: command_line
    switches:
      power_led:
        command_on: curl 'http://192.168.69.169/settings?led_status_disable=false'
        command_off: curl 'http://192.168.69.169/settings?led_status_disable=true'
        command_state: curl -s 'http://192.168.69.169/settings' |grep led_status_disable.:false
```

## Przykład wykorzystania

Zapalam diodę w sytuacji gdy na wszystkich 3 fazach następuje wysył energii (co jest sygnałem że w domu jest za dużo prądu i może warto już włączyć urządzenia które ten prąd zużyją):

```yaml
- id: '1234'
  alias: Włączenie diody gdy włączamy energię
  description: ''
  trigger:
  - platform: numeric_state
    entity_id: sensor.shellyem3_identyfikator_0_power
    below: '0'
  - platform: numeric_state
    entity_id: sensor.shellyem3_identyfikator_1_power
    below: '0'
  - platform: numeric_state
    entity_id: sensor.shellyem3_identyfikator_2_power
    below: '0'
  condition:
  - condition: and
    conditions:
    - condition: numeric_state
      entity_id: sensor.shellyem3_identyfikator_0_power
      below: '0'
    - condition: numeric_state
      entity_id: sensor.shellyem3_identyfikator_1_power
      below: '0'
    - condition: numeric_state
      entity_id: sensor.shellyem3_identyfikator_2_power
      below: '0'
  action:
  - service: switch.turn_on
    target:
      entity_id: switch.power_led
  mode: single
- id: '1235'
  alias: Wyłączenie diody gdy pobieramy energię
  description: ''
  trigger:
  - platform: numeric_state
    entity_id: sensor.shellyem3_identyfikator_0_power
    above: '0'
  - platform: numeric_state
    entity_id: sensor.shellyem3_identyfikator_1_power
    above: '0'
  - platform: numeric_state
    entity_id: sensor.shellyem3_identyfikator_2_power
    above: '0'
  condition: []
  action:
  - service: switch.turn_off
    target:
      entity_id: switch.power_led
  mode: single
```
