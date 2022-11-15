import React, { useState } from 'react'
import ReactMapGL, {Marker, Popup} from 'react-map-gl'
import getCenter from 'geolib/es/getCenter'


function Map({data}) {

    //Transform the search result object into the Lat and the log. 

    const coordinates = data.map((result) => ({
        longitude: result.long,
        latitude: result.lat
    }))

    const center = getCenter(coordinates);

    const [viewPort, setViewPort] = useState({
      with: '100%',
      height: '100%',
      longitude: center.longitude,   
      latitude: center.latitude,   
      zoom: 11,
  });

  return <ReactMapGL 
  mapStyle='mapbox://styles/amaury54/claejys3i000f14s25lobk320' 
  mapboxAccessToken={process.env.mapbox_key}
  {...viewPort}
    onMove={(nextViewport) => setViewPort(nextViewport.viewPort)}
  >

      {
      data.map((result) => (

        <div key={result.long}>
        <Marker  longitude={result.long}
                 latitude={result.lat}
                 offsetLeft={-20}
                 offsetTop={-10}
                 >
        
           
        </Marker>
        </div>

      ))
      
      }


  </ReactMapGL>
}

export default Map;