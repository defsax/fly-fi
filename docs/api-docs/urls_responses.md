# 1. to get the basic flight info for specific criteria:
### variables:
&depIata= Departure airport IATA code<br>
&depIcao= Departure airport ICAO code<br>
&arrIata= Arrival airport IATA code<br>
&arrIcao= Arrival airport ICAO code<br>
&aircraftIcao= Aircraft ICAO code<br>
&aircraftIcao24= Aircraft ICAO24 code<br>
&airlineIata= Airline IATA code<br>
&airlineIcao= Airline ICAO code<br>
&flightIata= Flight IATA code<br>
&flightIcao= Flight ICAO code<br>
&flightNum= Flight number<br>
&status= Status of the flight (started, en-route, landed, unknown)<br>
&limit= Limit value for output<br>
&lat=&lng=&distance= Flights within a specified circle based on the coordinates (distance is radius in km)<br>

### how to use it:
https://aviation-edge.com/v2/public/flights?key=[apikey]&flightIata=9K265

https://aviation-edge.com/v2/public/flights?key=[apikey]&limit=300

https://aviation-edge.com/v2/public/flights?key=[apikey]&lat=51.5074&lng=0.1278&distance=100&arrIata=LHR

https://aviation-edge.com/v2/public/flights?key=[apikey]&depIata=YUL&arrIata=YYZ

### example output:
{"aircraft":{"iataCode":"P212","icao24":"ADCCC6","icaoCode":"P212","regNumber":"N989CA"},"airline":{"iataCode":"9K","icaoCode":"KAP"},"arrival":{"iataCode":"RUT","icaoCode":"KRUT"},"departure":{"iataCode":"BOS","icaoCode":"KBOS"},"flight":{"iataNumber":"9K265","icaoNumber":"KAP265","number":"265"},"geography":{"altitude":2583.18,"direction":306.22,"latitude":42.95,"longitude":-71.89},"speed":{"horizontal":197.424,"isGround":0.0,"vspeed":0.0},"status":"en-route","system":{"squawk":null,"updated":1615577159}}

# 2. to get all airline database:

### how to use it:
https://aviation-edge.com/v2/public/airlineDatabase?key=[apikey]

### example output:
{"ageFleet":10.9,"airlineId":1,"callsign":"AMERICAN","codeHub":"DFW","codeIataAirline":"AA","codeIcaoAirline":"AAL","codeIso2Country":"US","founding":1934,"iataPrefixAccounting":"1","nameAirline":"American Airlines","nameCountry":"United States","sizeAirline":963,"statusAirline":"active","type":"scheduled"}

# 3. Auto-complete:  query by city, 

### how to use it:
https://aviation-edge.com/v2/public/autocomplete?key=[apikey]&city=toronto

### example output:
"airportsByCities": [{"GMT": "-5","codeIataAirport": "XLQ","codeIataCity": "YTO","codeIcaoAirport": "","codeIso2Country": "CA","latitudeAirport": 43.653524,"longitudeAirport": -79.3839069,"nameAirport": "Guildwood Railway Station","nameCountry": "Canada","phone": "","timezone": "America/Toronto"},

# 4. Arrival & Departure Info

### how to use it: https://aviation-edge.com/v2/public/timetable?key=[api-key]&iataCode=JFK&type=arrival

### example output

[{
"airline": {
"iataCode": "KL",
"icaoCode": "KLM",
"name": "KLM"
},
"arrival": {
"actualRunway": null,
"actualTime": null,
"baggage": "T4",
"delay": null,
"estimatedRunway": null,
"estimatedTime": null,
"gate": "B32",
"iataCode": "JFK",
"icaoCode": "KJFK",
"scheduledTime": "2021-03-18T14:07:00.000",
"terminal": "4"
},
"codeshared": {
"airline": {
"iataCode": "dl",
"icaoCode": "dal",
"name": "delta air lines"
},
"flight": {
"iataNumber": "dl1794",
"icaoNumber": "dal1794",
"number": "1794"
}
},
"departure": {
"actualRunway": null,
"actualTime": null,
"baggage": null,
"delay": "8",
"estimatedRunway": null,
"estimatedTime": "2021-03-18T11:31:00.000",
"gate": "E68",
"iataCode": "TPA",
"icaoCode": "KTPA",
"scheduledTime": "2021-03-18T11:23:00.000",
"terminal": null
},
"flight": {
"iataNumber": "KL5138",
"icaoNumber": "KLM5138",
"number": "5138"
},
"status": "scheduled",
"type": "arrival"
},

