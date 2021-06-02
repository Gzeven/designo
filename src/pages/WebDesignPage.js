import React from 'react';
import styled from 'styled-components';
import {BackgroundWebDesign, GraphicDesignDesktop, GraphicDesignTablet, GraphicDesignMobile, AppDesignDesktop, AppDesignTablet, AppDesignMobile, Leaf} from '../assets'
import {LinkButton, ContactButton, Project } from "../components"
import { webdesign } from '../utils/constants'

const WebDesignPage = () => {
    return (
        
        <Wrapper >
         <div className="intro section-center-one"> 
         <h1>Web Design</h1>
         <p>We build websites that serve as powerful marketing tools and bring memorable brand experiences.</p>
         </div>

          <div className="leaf-container section-center-one">
          <div className="leaf section-center"><img src={Leaf} alt="background grey leaf" /></div>
          </div>
         
         <div className="projects-container section-center-two">
            {webdesign.map((design)=> {
         return <Project key={design.id} {...design} />
          })}
         </div>
      
         <div className="links-container section-center-two">
         <LinkButton link="/appdesign" header="App Design" className="app"/>
         <LinkButton link="/graphicdesign" header="Graphic Design" className="graphic"/> 
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
      max-width: 350px;
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

   .graphic {
    background-image: url(${GraphicDesignMobile});
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
    height: 26.5rem;
    margin: 7.5rem auto;  
  }
     .app {
    background-image: url(${AppDesignTablet}); 
  }
     .graphic {
    background-image: url(${GraphicDesignTablet}); 
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
   height: 15.75rem;
   background-position: calc(50% + 235px/2) calc(50% - 0px/2);
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

  .graphic {
    background-image: url(${GraphicDesignDesktop});
  }
  
  }
`

export default WebDesignPage;