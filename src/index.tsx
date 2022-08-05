/* eslint import/no-webpack-loader-syntax: off */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { MapsApp } from './MapsApp';

// @ts-ignore
import mapboxgl from "!mapbox-gl"; // or "const mapboxgl = require('mapbox-gl');"

mapboxgl.accessToken =
	"pk.eyJ1IjoibGVhbmRyby1jcmlzdGlhbm8iLCJhIjoiY2w2ZmpsZXIzMmdocTNscDNvb3NkY25ydyJ9.v2nn2oXtOo_rXOKNYCS_FA";



if( !navigator.geolocation ){
  alert('Tu navegador no tiene opción de Geolocalizacion');
  throw new Error('Tu navegador no tiene opcion de Geolocalizacion');
}


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MapsApp/>
  </React.StrictMode>
);

