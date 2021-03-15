export function formatResults(resultObj) {
  let result = {};
  result["Flight#"]=resultObj.flight && resultObj.flight['iataNumber'] ;
  result["Departure"]=resultObj.departure && resultObj.departure['iataCode'];
  result["Arrival"]=resultObj.arrival && resultObj.arrival['iataCode'];
  result["Altitude"]=resultObj.geography && resultObj.geography['altitude'];
  result["Speed"]=resultObj.speed && resultObj.speed['horizontal'];
  result["Status"]=resultObj.status && resultObj.status;

  return result;
}

export function multipleFlights(resultArr) {
  let result = [];
  for (let obj of resultArr) {
    result.push(obj.flight['iataNumber'])
  }
  return result;
}