import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {BackgroundHome,Phone, WebDesignMobile, WebDesignTablet, WebDesignLarge, GraphicDesignDesktop,     GraphicDesignTablet, GraphicDesignMobile, AppDesignDesktop, AppDesignTablet, AppDesignMobile, Leaf} from '../assets'
import {LinkButton, ContactButton, Services } from "../components"



const HomePage = () => {
    return (
        
        <Wrapper >
        <div className="intro section-center-one">
         <div className="intro-text" >
         <h1>Award-winning custom<br></br> designs and digital<br></br> branding solutions</h1>
         <p>With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, 
            and engaging brand experiences. Find out more about our services.</p>
         <Link to="/about" className="btn-dark" >Learn more</Link>
         </div>
         </div>
         
          <div className="leaf-container section-center-one">
          <div className="leaf-one"><img src={Leaf} alt="background grey leaf" /></div>
          <div className="leaf-two"><img src={Leaf} alt="background grey leaf" /></div> 
          </div>


         <div className="links-container section-center-two">
         <LinkButton link="/webdesign" header="Web Design" className="web"/>
         <LinkButton link="/appdesign" header="App Design" className="app"/>
         <LinkButton link="/graphicdesign" header="Graphic Design" className="graphic"/> 
         </div>
         
         <Services/>
         <ContactButton/>
        </Wrapper>
        
    );
};

const Wrapper = styled.main`

.leaf-one, .leaf-two {
  display: none;
}

.leaf-container {
  position: relative
}

  .intro {
      background: url(${BackgroundHome}), var(--peach);
      text-align: center;
      background-repeat: no-repeat;
      background-size: fill; 
      background-position: calc(50% + 260px/2) calc(50% - 5px/2);
      overflow: hidden;   
       h1, p {
    color: var(--white);
    }  
    p {
      margin: 0 1.25rem 1.5rem; 
      font-size: 0.975rem;
      line-height: 1.66;  
  } 
  .intro-text {
    height: 48rem;
    background-image: url(${Phone});
    background-position: 50% -156%;
    background-repeat: no-repeat;
      h1 {
      margin: 5rem 0 1.5rem; 
       }
   } 
  } 
  .links-container {
    margin: 7.5rem auto;
    height: 49.875rem; 
    display: grid;
    grid-row-gap: 1.5rem;
    grid-template-areas:
    'web web '
    'app app '
    'graphic graphic';
  }
  .web {
    background-image: url(${WebDesignMobile});
    background-size: cover;
    grid-area: web;
  }

   .app {
    background-image: url(${AppDesignMobile});
    background-size: cover;
    grid-area: app;
  }

   .graphic {
    background-image: url(${GraphicDesignMobile});
    background-size: cover;
    grid-area: graphic;
  }

@media (min-width: 768px) {
   .intro {
      background-position: calc(50% + 295px/2) calc(50% + 39px/2);
    }
    .intro-text {
     p {
       max-width: 436px;
       margin: 0 auto 1.1875rem;
       }
   }
   .links-container {
    height: 40.5rem;  
     margin: 10rem auto;
    }

   .web {
    background-image: url(${WebDesignTablet}); 
        }

     .app {
    background-image: url(${AppDesignTablet}); 
          }

     .graphic {
    background-image: url(${GraphicDesignTablet}); 
          }
  }

@media (min-width: 1281px) {
  .leaf-one {
    display: block;
    position: absolute;
    top: -320px ;
    left: -165px;
    z-index: -1;
    
  }

  .leaf-two {
    display: block;
    position: absolute;
    top: 1085px ;
    right: -165px;
    z-index: -1;
    transform: rotate(180deg);
    /* opacity: 0.5;  */
  }
  
   .intro {
   text-align: left;
   height: 40rem;
   width: 77.153vw;
   background-size: 40rem;
   background-position: 100% 100%;
   display: flex;

   
    .intro-text {
      background-position: 530px -75px;
      background-size: 600px;
      margin: 4rem 0 auto 5.938rem;
      width: 100%;
      h1 {
        margin: 9 0 1.5rem;
      }
      p {
        margin: 0 0 2.5rem;
       
    }
    }
    
    .btn-dark {
        text-align: center;
    }
    
   }

  .links-container {
     grid-column-gap: 1.875rem;
     grid-template-areas:
      'web app '
      'web app '
      'web graphic'
      'web graphic'; 
   }

     .web {
    background-image: url(${WebDesignLarge});
  }

  .app {
    background-image: url(${AppDesignDesktop}); 
  }

  .graphic {
    background-image: url(${GraphicDesignDesktop}); 
  }
  
  }
`

export default HomePage;