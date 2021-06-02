import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {SmallCircle, Australia, UnitedKingdom, Canada } from '../assets'

const Locations = () => {
  return <Wrapper>
  <div className="section-center-two">
  <div className="locations-center">
  
  <article className="location">
  <div className="location-images">
  <img src={Canada} alt='drawing of the skyline of Toronto, Canada' className="location-image"/>
  <img src={SmallCircle} alt='background circle' className="background-image canada"/>
  </div>
    <h3>Canada</h3>
   <Link to="/locations" className="btn-light">See Location</Link>
  </article>

   <article className="location">
  <div className="location-images">
  <img src={Australia} alt='drawing of the Sydney Opera House in Australia' className="location-image"/>
  <img src={SmallCircle} alt='background circle' className="background-image australia"/>
  </div>
    <h3>Australia</h3>
   <Link to="/locations" className="btn-light">See Location</Link>
  </article>

   <article className="location">
  <div className="location-images">
  <img src={UnitedKingdom} alt='drawing of the Tower Bridge in London, United Kingdom' className="location-image"/>
  <img src={SmallCircle} alt='background circle' className="background-image unitedkingdom"/>
  </div>
    <h3>United Kingdom</h3>
   <Link to="/locations" className="btn-light">See Location</Link>
  </article>
  
  </div>
  </div>
  </Wrapper>
}


const Wrapper = styled.section`
  margin: 7.5rem 0;

  h3 {
    color: var(--dark-grey);
    text-transform: uppercase;
    font-weight: 500;
    margin-bottom: 2rem;
  }

.location-images {
    position: relative;
    overflow: hidden; 
    max-width: 100%;
    width: 202px;
    height: 202px;
    margin: 0 auto 3rem;
}

.location-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 202px;
  height: 202px;
  
}
.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 202px;
  height: 202px;
  z-index: -1;
  
   
}
.canada {
  transform: rotate(90deg);
}
.unitedkingdom {
 transform: rotate(-90deg); 
}
  
  .locations-center {
    display: grid;
    gap: 5rem;
  }
  .location {
    text-align: center;
  }

  @media (min-width: 1281px) {
    margin: 7.5rem 0;
    .locations-center {
      grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
      grid-gap: 1.875rem;
    }
  }

`

export default Locations;