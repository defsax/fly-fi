## Features:
Backend query api for flight:
  - by flight #
  - by airport codes
  - if flight is being tracked, update on backend at regular intervals (only for registered users)
  - tracked flight notification logic: only send 1 notification near landing time

Backend use SMS notification api:
  - send a text when flight is within 30 minutes (or similar)
  - sent out from backend so user can be away from computer
  - queue system: check once a minute if there are queued notifications, if so, are they within landing time frame? if so, send sms to phone # in database

Map api:
  - integration (google maps, leaflet)
  - fetch data (async?, axios?)

One/two/three tracked flights:
  - display plane icons
  - display eta

All flights:
  - query for flights within viewport geographical area
  - filter results so not to cause lag



## Components:
- NavBar
- LoginBox
- RegisterBox
- SearchBox
- Map
- InfoBox
- Show Flight Info Box(registered/unregistered)


## Steps

### Search by flight # (yields one flight):
- if flight # box is filled in on submit
- send to backend (get?)
- backend query flight api
  - flight exists
  - flight doesn't exist
- cache data in backend (request every minute or so)
- send back coords/eta/other data
- map data
- update at certain intervals
  - if user is not logged in, maybe front end queries api vs backend end knowing when to stop
  - if user is logged in, backend update at regular intervals until sms is (or isn't sent) and maybe until 10 minutes after arrival
- delete flight data from db after landing
- delete tracked flight info from db for specific user

### Search by departure/arrival airport (yields more than one):
- if flight departure/arrival boxes are filled in on submit
- send to backend (get?)
- return results
- select from results
- backend query flight api
  - flight exists
  - flight doesn't exist
- send back coords/eta/other data
- map data
- update at certain intervals 
  - if user is not logged in, maybe front end queries api vs backend end knowing when to stop
  - if user is logged in, backend update at regular intervals until sms is (or isn't sent) and maybe until 10 minutes after arrival
- delete flight data from db after landing
- delete tracked flight info from db for specific user

## Questions
How to handle unregistered requests?

Talk about specific APIs...