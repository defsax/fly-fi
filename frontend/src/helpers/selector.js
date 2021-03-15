export function formatResults(resultObj) {
  let result = {};
  result["Flight#"]=resultObj.flight['iataNumber'];
  result["Departure"]=resultObj.departure['iataCode'];
  result["Arrival"]=resultObj.arrival['iataCode'];
  result["Altitude"]=resultObj.geography['altitude'];
  result["Speed"]=resultObj.speed['horizontal'];
  result["Status"]=resultObj.status;

  return result;
}