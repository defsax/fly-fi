export function formatResults(resultObj) {
  let result = {};
  result['Flight#'] = resultObj.flight && resultObj.flight['iataNumber'];
  result['Departure'] = resultObj.departure && resultObj.departure['iataCode'];
  result['Arrival'] = resultObj.arrival && resultObj.arrival['iataCode'];
  result['Altitude'] = resultObj.geography && resultObj.geography['altitude'];
  result['Speed'] = resultObj.speed && resultObj.speed['horizontal'];
  result['Status'] = resultObj.status && resultObj.status;

  return result;
}

export function multipleFlights(resultArr) {
  let result = [];
  for (let obj of resultArr) {
    result.push(obj.flight['iataNumber']);
  }
  return result;
}

export function markerLoc(resultArr) {
  let result = [];
  if (resultArr.length > 0) {
    for (let obj of resultArr) {
      let coord = {};
      if (obj.geography) {
        coord['lat'] = obj.geography.latitude;
        coord['lng'] = obj.geography.longitude;
        coord['direction'] = obj.geography.direction;
        coord['arr'] = obj.arrival.iataCode;
        coord['dep'] = obj.departure.iataCode;
        coord['flightNo'] = obj.flight.iataNumber;
      }
      result.push(coord);
    }
    return result;
  } else {
    return null;
  }
}

export function boundCoord(resultArr) {
  let result = {};
  if (resultArr.length > 0) {
    resultArr = markerLoc(resultArr);
    let tempLat = [];
    let tempLng = [];
    let tempNWObj = {};
    let tempSEObj = {};
    for (let point of resultArr) {
      tempLat.push(point.lat);
      tempLng.push(point.lng);
    }
    tempNWObj['lat'] = tempLat.reduce(function (a, b) {
      return Math.max(a, b);
    });
    tempNWObj['lng'] = tempLng.reduce(function (a, b) {
      return Math.min(a, b);
    });
    result['nw'] = tempNWObj;
    tempSEObj['lat'] = tempLat.reduce(function (a, b) {
      return Math.min(a, b);
    });
    tempSEObj['lng'] = tempLng.reduce(function (a, b) {
      return Math.max(a, b);
    });
    result['se'] = tempSEObj;
    return result;
  } else {
    return null;
  }
}
