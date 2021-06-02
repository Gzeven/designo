
import React from 'react';
import styled from 'styled-components';
import {Leaf,BackgroundWebDesign,BackgroundGraphicDesign,WebDesignSmall, WebDesignTablet,WebDesignMobile, AppDesignDesktop, AppDesignTablet, AppDesignMobile} from '../assets'
import {LinkButton, ContactButton, Project } from "../components"
import { graphicdesign } from '../utils/constants'

const GraphicDesignPage  = () => {
    return (
        
        <Wrapper >
         <div className="intro section-center-one"> 
         <h1>Graphic design</h1>
         <p>We deliver eye-catching branding materials that are tailored to meet your business objectives.</p>
         </div>

         <div className="leaf-container section-center-two">
          <div className="leaf section-center"><img src={Leaf} alt="background grey leaf" /></div>
          </div>
         
         <div className="projects-container section-center-two">
            {graphicdesign.map((design)=> {
         return <Project key={design.id} {...design} />
          })}
         </div>
      
         <div className="links-container section-center-two">
         <LinkButton link="/appdesign" header="App Design" className="app"/>
         <LinkButton link="/webdesign" header="Web Design" className="web"/> 
         </div>
         <ContactButton/>
        </Wrapper>
        
    );
};

const Wrapper = styled.main`
 .leaf {
  display: none;
}

.leaf-container {
  position: relative
}

  .intro {
      background: url(${BackgroundWebDesign}), var(--peach);
      text-align: center;
      background-repeat: no-repeat;
      background-size: fill;
      background-position: calc(50% - 500px/2) calc(50% + 265px/2);
      overflow: hidden;   
      height: 20rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

       h1, p {
    color: var(--white);
       }
    h1 {
      margin-bottom: 2rem;
    }
      
    p {
        margin: 0 1.5rem;   
        } 
  } 

  .projects-container {
    display: grid;
    grid-row-gap: 2.5rem;
    margin: 6rem auto;
   
  }

  .links-container {
    margin: 6rem auto;
    height: 32.75rem; 
    display: grid;
    grid-row-gap: 1.5rem;
  }
   .app {
    background-image: url(${AppDesignMobile});
    background-size: cover; 
  }

   .web {
    background-image: url(${WebDesignMobile});
    background-size: cover; 
  }

@media (min-width: 768px) {
   .intro {
       background-position: calc(50% + 145px/2) calc(50% - 10px/2); 
        p {
       max-width: 400px;    
     }
   }

   .projects-container {
    margin: 7.5rem auto;
  }

   .links-container {
    margin: 7.5rem auto;
    height: 26.5rem;  
  }
     .app {
    background-image: url(${AppDesignTablet}); 
  }
     .web {
    background-image: url(${WebDesignTablet}); 
  }
}

@media (min-width: 1281px) {
  .leaf {
    display: block;
    position: absolute;
    top: -125px ;
    left: -165px;
    z-index: -1;
  }
  
   .intro {
   background: url(${BackgroundGraphicDesign}), var(--peach); 
   height: 15.75rem;
   background-repeat: no-repeat;
   background-size: fill;
   background-position: calc(50% - 330px/2) calc(50% - 10px/2);
   }

  .projects-container {
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr);
   grid-column-gap: 1.75rem;
   margin: 10rem auto;
  }

  .links-container {
  margin: 10rem auto;
  height: 19.25rem;   
  grid-column-gap: 1.875rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));
   }

  .app {
    background-image: url(${AppDesignDesktop});  
  }

  .web {
    background-image: url(${WebDesignSmall});
  }
}
`

export default GraphicDesignPage ;