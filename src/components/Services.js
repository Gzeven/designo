import React from 'react';
import styled from 'styled-components'
import {BackgroundHome, Passionate, Resourceful, Friendly} from '../assets'


const Services = () => {
    return <Wrapper>
  <div className="section-center-two">
  <div className="services-center">
  
  <article className="service">
  <div className="image-container">
  <img src={BackgroundHome} alt='background circle' className="background-image passionate"/>
  <img src={Passionate} alt='man sitting behind a desk working on a design' className="icon"/>
  </div>
    <div className="service-content">
    <h3>Passionate</h3>
    <p>Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.</p>
    </div>
    </article>

    <article className="service"  >
   <div className="image-container">
  <img src={BackgroundHome} alt='background circle' className="background-image resourceful"/>
  <img src={Resourceful} alt='woman sitting behind a desk working on a desgin' className="icon"/>
  </div>
  
 
    <div className="service-content">
    <h3>Resourceful</h3>
    <p>Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.</p>
    </div>
    </article>
 
    <article className="service" >
      <div className="image-container">
  <img src={BackgroundHome} alt='background circle' className="background-image"/>
  <img src={Friendly} alt='woman and man showing a design' className="icon"/>
  </div>
    <div className="service-content">
    <h3>Friendly</h3>
    <p>We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.</p>
    </div>
    </article>
    
  </div>
  </div>
  </Wrapper>
}

const Wrapper = styled.section`
  margin: 7.5rem 0;
  h3,p {
    color: var(--dark-grey);
  }

  h3 {
    text-transform: uppercase;
    margin-bottom: 2rem;
  }

.image-container {
    position: relative;
    overflow: hidden; 
    max-width: 100%;
    width: 202px;
    height: 202px;
    margin: 0 auto 3rem;
}

.icon {
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
.passionate {
  transform: rotate(-90deg);
}
.resourceful {
 transform: rotate(180deg); 
}
  
  .services-center {
    display: grid;
    row-gap: 5rem;
  }
  .service {
    text-align: center;
    height: 25.75rem;
    p {
      max-width: 305px;
      margin: 0 auto;
    }
  }

@media (min-width: 768px) {
    margin: 7.5rem 0 4rem;
    h3 {
      margin-bottom: 1rem;
    }
   .services-center {
     row-gap: 2rem;
   }
    .service {
     display: flex;
     align-items: center;
     height: 12.625rem;
     p {
       margin-left: 0;
       max-width: 495px;
     }
  
    }
    .image-container {
      margin-right: 3rem;
    }
  
    .service-content {
      text-align:left;
      flex: 1;
      margin-bottom: 2rem;
    }
  }
  @media (min-width: 1281px) {
    margin: 10rem 0;
    .service {
      flex-direction: column;
      height: 25.75rem;
       
    }
    .image-container {
    margin: 0 auto 3rem;
    }
    .service-content {
     text-align: center;
     margin-bottom: 0;
    }

    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(202px, 1fr));
      grid-gap: 1.875rem;
    }
  }

`

export default Services;

  