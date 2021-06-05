
import React from 'react';
import {useState} from 'react';
import styled from 'styled-components';
import ReactMapGl, {Marker}  from 'react-map-gl';
import {ContactButton} from '../components'
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';
import {MapMarker, ThreeCircles} from '../assets'
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;


const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN; 

const LocationsMapPage = () => {
   const [viewport, setViewport] = useState({
    latitude: 43.645154,
    longitude: -79.389738, 
    zoom: 13,
    bearing: 0,
    pitch: 0
  });

     const [viewport2, setViewport2] = useState({
    latitude: -30.329287,
    longitude: 149.788492, 
    zoom: 13,
    bearing: 0,
    pitch: 0
  });

       const [viewport3, setViewport3] = useState({
    latitude: 51.730640,
    longitude: -3.860277, 
    zoom: 13,
    bearing: 0,
    pitch: 0
  });


    return (
    <Wrapper >
     <div className="section-center-one maps-container">
     
     <div className="location" id="canada">
       <div className="location-map">
           <ReactMapGl
           {...viewport}
            width="100%"
            height="100%"
            mapStyle="mapbox://styles/mapbox/streets-v11?optimize=true"
            onViewportChange={setViewport}
            mapboxApiAccessToken={MAPBOX_TOKEN}
         >
<Marker
          offsetTop={-70}
          offsetLeft={-54}
          latitude={43.645154}
          longitude={-79.389738}
       >
         <img src={MapMarker} alt="Designo Central Office location"  />
        </Marker>
            </ReactMapGl>
        </div>

      <div className="location-data">
        <h1> Canada</h1>
         <div className="adress">
            <div className="adress-info location-adress">
             <p><b>Designo Central Office</b></p>
             <p>3886 Wellington Street</p>
             <p>Toronto, Ontario M9C 3J5</p>
            </div>
            <div className="adress-info">
              <p><b>Contact</b></p>
              <p>P : +1 253-863-8967</p>
              <p>M : contact@designo.co</p>
            </div>
        </div>
      </div> 
     </div>

       <div className="location" id="australia">
          <div className="location-map">
            <ReactMapGl
            {...viewport2}
             width="100%"
             height="100%"
             mapStyle="mapbox://styles/mapbox/streets-v11?optimize=true"
             onViewportChange={setViewport2}
              mapboxApiAccessToken={MAPBOX_TOKEN}
             >
             <Marker
          offsetTop={-70}
          offsetLeft={-54}
          latitude={-30.329287}
          longitude={149.788492}
       >
         <img src={MapMarker} alt="Designo AU Office location" />
        </Marker>
           </ReactMapGl>
        </div>
              <div className="location-data">
        <h1>Australia</h1>
         <div className="adress">
            <div className="adress-info location-adress">
             <p><b>Designo AU Office</b></p>
             <p>19 Balonne Street</p>
             <p>New South Wales 2443</p>
            </div>
            <div className="adress-info">
              <p><b>Contact</b></p>
              <p>P : (02) 6720 9092</p>
              <p>M : contact@designo.au</p>
            </div>
        </div>
      </div> 
     
     </div>
      
     <div className="location" id="unitedkingdom">
         <div className="location-map">
               <ReactMapGl
               {...viewport3}
                width="100%"
                height="100%"
                mapStyle="mapbox://styles/mapbox/streets-v11?optimize=true"
                onViewportChange={setViewport3}
                mapboxApiAccessToken={MAPBOX_TOKEN} 
                >
                 <Marker
          offsetTop={-70}
          offsetLeft={-54}
          latitude={51.730640}
          longitude={-3.860277}
       >
         <img src={MapMarker} alt="Designo UK Office location" />
                </Marker>
               </ReactMapGl>
         </div>
           <div className="location-data">
              <h1> United Kingdom</h1>
              <div className="adress">
              <div className="adress-info location-adress">
              <p><b>Designo UK Office</b></p>
              <p> 13 Colorado Way</p>
              <p>Rhyd-y-fro SA8 9GA</p>
           </div>
              <div className="adress-info">
              <p><b>Contact</b></p>
              <p>P : 078 3115 1400</p>
              <p>M : contact@designo.uk</p>
           </div>
        </div>
        
        </div>
     </div>
     
     
     </div>
    
    <ContactButton/>
    </Wrapper>

    );
};

const Wrapper = styled.main` 

.location {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 7.5rem;
  .location-map {
    width: 100%;
    height: 20rem;
    overflow: hidden;
  }
  .location-data {
    background: url(${ThreeCircles}), #FDF3F0;
    background-repeat: no-repeat;
    background-size: fill;
    background-position: calc(50% + 210px/2) calc(50% + 195px/2);
    text-align: center;
    width: 100%;
    padding: 5rem 0;
    
    h1 {
      color: var(--peach);
      margin-bottom: 1.5rem;
      
    }
    p {
      color: var(--dark-grey);
      width: 327px;
      margin: 0 auto;
      
    }
    .location-adress {
      margin-bottom: 1.5rem;
    }
  }
}

@media (min-width: 768px) {
  .location {
    margin-bottom: 7.5rem;
    .location-map {
      height: 20.375rem;
      border-radius: var(--radius);
      margin-bottom: 2rem;
      
    }
    .location-data {
      border-radius: var(--radius); 
      padding: 5.5rem 4.5rem;
      background-position: calc(50% - 100px/2) calc(50% - 260px/2);
      height: 20.375rem;
       h1 {
    text-align: left;
    
  }
  .adress {
    display: flex;
    text-align: left;
    
  }
    }
  }
}
@media (min-width: 1281px) {
  .maps-container {
    margin-bottom: 7.5rem;
  }

  .location {
    flex-direction: row-reverse;
    justify-content: space-between;
    margin-bottom: 2rem;
    .location-map {
    width: 30%;
    margin-bottom: 0;
    }
    .location-data {
    width: 67%;
      
    }
  }
  .location:nth-child(2) {
    flex-direction: row;
  }
}

`


export default LocationsMapPage;