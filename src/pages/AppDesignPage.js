import React from 'react';
import styled from 'styled-components';
import {Leaf, BackgroundAppDesign, BackgroundWebDesign ,GraphicDesignDesktop, GraphicDesignTablet, GraphicDesignMobile, WebDesignMobile, WebDesignTablet, WebDesignSmall} from '../assets'
import {LinkButton, ContactButton, Project } from "../components"
import { appdesign } from '../utils/constants'

const AppDesignPage = () => {
    return (
       <Wrapper >
         <div className="intro section-center-one"> 
             <h1>App Design</h1>
             <p>Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.</p>
         </div>

         <div className="leaf-container section-center-two">
             <div className="leaf"><img src={Leaf} alt="background grey leaf" /></div>
         </div>
         
         <div className="section-center-two projects-container">
            {appdesign.map((design)=> {
            return <Project key={design.id} {...design} />
            })}
         </div>
      
         <div className="section-center-two links-container">
             <LinkButton link="/webdesign" header="Web Design" className="web"/>
             <LinkButton link="/graphicdesign" header="Graphic Design" className="graphic"/> 
         </div>
         <ContactButton/>
      </Wrapper>
        
    );
};

const Wrapper = styled.main`
.leaf-container {
  position: relative
}
.leaf {
  display: none;
}

.intro {
  background: url(${BackgroundWebDesign}), var(--peach);
  background-repeat: no-repeat;
  background-size: fill;
  background-position: calc(50% - 500px/2) calc(50% + 265px/2);
  text-align: center;
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
      p  {
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
     .web {
      background-image: url(${WebDesignMobile});
      background-size: cover; 
          }
     .graphic {
      background-image: url(${GraphicDesignMobile});
      background-size: cover; 
         }
}
    
@media (min-width: 768px) {
.intro {
  background-position: calc(50% + 145px/2) calc(50% - 10px/2);
    p {
       max-width: 350px;    
     }
}

.projects-container {
  margin: 7.5rem auto;
  }
    
.links-container {
  height: 26.5rem;  
     .web {
     background-image: url(${WebDesignTablet}); 
          }
     .graphic {
     background-image: url(${GraphicDesignTablet}); 
          }
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
   background: url(${BackgroundAppDesign}), var(--peach); 
   background-repeat: no-repeat;
   background-size: fill;
   background-position: calc(50% - 330px/2) calc(50% - 10px/2);
   height: 15.75rem;  
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
    .web {
    background-image: url(${WebDesignSmall});  
         }
    .graphic {
    background-image: url(${GraphicDesignDesktop});
         }
   }
  }
`

export default AppDesignPage;