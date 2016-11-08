# DevFest IoT Microsoft

This repository contain all code exposed in DevFest Bogotá 2016 (https://devfest.co)

## Projects folders

Follow next steps:

### Server/ (Backend server)

Before run this application please check if you have MongoDB installed because this code check *mongodb://localhost:27017* path, if you prefer can use external database but **configure correctly** your mongo server 

Ok, assuming you have MongoDB server, run with following code:

> node app.js

### Arduino/

Compile Arduino Sketch. In Demo be used Arduino Leonardo and using next tutorials:

- Humidity Sensor: https://learn.adafruit.com/dht/overview
- Photocell: https://learn.adafruit.com/photocells/using-a-photocell

If you prefer, could be use Arduino IDE on Windows and connect with Raspberry Pi

### RPI/ (Raspberry PI)

Run with following code

> sudo node app.js

# AND NOW YOU CAN COLLECT HUMIDITY AND LUMINESCENCE DATA WITH ARDUINO AND RASPBERRY PI!