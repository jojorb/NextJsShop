import React, { useState } from 'react';
import ReactMapGL, { NavigationControl, Marker } from 'react-map-gl';
import styled from 'styled-components';
import { mapboxApiAccessToken } from '../../config';
import DataShops from './DataShops.json';
import MarkerSpan from './MarkerSpan';
// http://geojson.io/#map=19/48.86667/2.32843

const NavCtrl = styled.div`
  position: absolute;
  top: 36px;
  left: 0px;
  padding: 10px;
`;

const Map = () => {
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: 48.866,
    longitude: 2.329,
    zoom: 4.5,
    bearing: 0,
    pitch: 0,
    interactive: false,
  });
  const [settings, setSettings] = useState({
    dragPan: true,
    dragRotate: true,
    scrollZoom: false,
    touchZoom: true,
    touchRotate: true,
    keyboard: true,
    doubleClickZoom: true,
    minZoom: 0,
    maxZoom: 20,
    minPitch: 0,
    maxPitch: 85,
  });

  const mbpt = mapboxApiAccessToken;

  return mbpt.length === 0 ? (
    <>
      <div>
        <center>
          please visite mapbox.com to get your api token to display the map
        </center>
        <center>place your token inside the config.js file</center>
      </div>
      <style jsx>{`
        div {
          font-size: 18px;
          margin-top: 5rem;
        }
      `}</style>
    </>
  ) : (
    <ReactMapGL
      {...settings}
      {...viewport}
      onViewportChange={newViewport => setViewport(newViewport)}
      mapboxApiAccessToken={mapboxApiAccessToken}
      mapStyle="mapbox://styles/mapbox/dark-v9"
    >
      <NavCtrl>
        <NavigationControl
          onViewportChange={newViewport => setViewport(newViewport)}
        />
      </NavCtrl>

      {DataShops.map((marker, index) => (
        <Marker key={index} longitude={marker.long} latitude={marker.lat}>
          <MarkerSpan name={marker.name} />
        </Marker>
      ))}
    </ReactMapGL>
  );
};

export default Map;
