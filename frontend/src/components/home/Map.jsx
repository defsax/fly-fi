import React, { useState } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
//import mapStyles from './mapStyle';
const config = {
  zoomLevel: 16,
  lat: 45.424721,
  lng: -75.695000,
  markerLongitude: 45.424721,
  markerLatitude: -75.695000,
  apiKey: 'AIzaSyDoWxB0xAutGLB-zcJl807U_qajIbMKaFwY',
  useDefaultUI: true,
  googleMapsMarkerIcon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
}
const mapStyles = {
  width: '100%',
  height: '100%',
};

function MapComponent(props) {
  const [zoomLevel, setZoomLevel] = useState(config.zoomLevel)
  const [lat, setLat] = useState(config.lat || 51.4934);
  const [lng, setLng] = useState(config.lng || 0.0098);
  
  return (
    <div className='map'>
      <Map
        google={props.google}
        zoom={zoomLevel}
        styles={[mapStyles]}
        disableDefaultUI={config.useDefaultUI}
        initialCenter={{
          lat,
          lng
        }}
      >
        <Marker
          position={{ lat: config.latitudeForMarker, lng: config.longitudeForMarker }}
          icon={config.googleMapsMarkerIcon}
        />
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({ apiKey: config.apiKey })(MapComponent);