#include <DHT.h>
#include <DHT_U.h>

#include "DHT.h"

#define DHTPIN 2

#define DHTTYPE DHT22 

DHT dht(DHTPIN, DHTTYPE);

void setup() {
  Serial.begin(9600);
  Serial.println("DHTxx test!");

  dht.begin();
}

void loop() {
  
  delay(1000);

  float h = dht.readHumidity();
  
  float t = dht.readTemperature();
  
  float f = dht.readTemperature(true);

  if (isnan(h) || isnan(t) || isnan(f)) {
    Serial.println("Failed to read from DHT sensor!");
    return;
  }

  Serial.print(h);
  Serial.print(",");
  Serial.print(t);
}
