
import React from 'react';
import styled from 'styled-components';
import {BackgroundAbout,
        TwoCircles,
        ThreeCircles, 
        BackgroundAboutMobile, 
        About, 
        RealDeal, 
        WorldClassTalent, 
        AboutTablet, 
        RealDealTablet,
        WorldClassTalentTablet,
        AboutMobile,
        RealDealMobile, 
        WorldClassTalentMobile} from '../assets'
import {ContactButton, Locations } from "../components"


const AboutPage = () => {
    return (
        
        <Wrapper >
        <div className="intro section-center-one"> 
        <div className="image-container intro-image">
        <img src={About} alt="" className="desktop-image" />
        <img src={AboutTablet} alt="" className="tablet-image"/>
        <img src={AboutMobile} alt="" className="mobile-image"/>
        </div>
        <div className="intro-text">
         <h1>About Us</h1>
         <p>Founded in 2010, we are a creative agency that produces lasting results for our clients. 
            We’ve partnered with many startups, corporations, and nonprofits alike to craft designs 
            that make real impact. We’re always looking forward to creating brands, products, and 
            digital experiences that connect with our clients' audiences.</p>
        </div>
         </div>

          <div className="talent section-center-one"> 
          <div className="image-container">
        <img src={WorldClassTalent} alt="" className="desktop-image" />
        <img src={WorldClassTalentTablet} alt="" className="tablet-image"/>
        <img src={WorldClassTalentMobile} alt="" className="mobile-image"/>
        </div>
        <div className="talent-text">
        <h1>World-class talent</h1>
         <p className="text-one">We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully 
           crafted from concept to launch, ensuring success in its given market. We are constantly updating 
           our skills in a myriad of platforms.</p>
          <p>Our team is multi-disciplinary and we are not merely interested in form — content and meaning 
          are just as important. We give great importance to craftsmanship, service, and prompt delivery. 
          Clients have always been impressed with our high-quality outcomes that encapsulates their 
          brand’s story and mission.</p>
        
        </div>
  
         </div>
       <Locations/>
         
         <div className="real-deal section-center-one">
          <div className="image-container real-deal-image">
        <img src={RealDeal} alt="" className="desktop-image" />
        <img src={RealDealTablet} alt="" className="tablet-image"/>
        <img src={RealDealMobile} alt="" className="mobile-image"/> 
        </div>
        <div className="real-deal-text">
         <h1>The real deal</h1>
         <p className="text-one" >As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own.
  Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every
  opportunity. We make design and technology more accessible and give you tools to measure success.</p>
         <p>We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, 
            we inspire audiences to take action and drive real results.</p>
          </div>
         </div>

         <ContactButton/>
        </Wrapper>
        
    );
};

const Wrapper = styled.main`
 .desktop-image, .tablet-image {
   display: none;
 }

 .mobile-image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
 }
 
 .image-container {
     width: 100%;
     height: 20rem;    
   }  
 .intro {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      color: var(--white);
      background: url(${BackgroundAboutMobile}), var(--peach);
      background-repeat: no-repeat;
      background-position: calc(50% - 500px/2) calc(50% + 595px/2);
  
   .intro-text {
     padding: 5rem 1.5rem;
     width: 100%;
    h1 {
      margin-bottom: 1.5rem;
      }
      p {
       
        max-width: 327px;
        margin: 0 auto;
      }
    }
 }

  .talent {
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   text-align: center;
   background: url(${ThreeCircles}), #FDF3F0;
   background-repeat: no-repeat;
   background-position: calc(50% + 210px/2) calc(50% + 375px/2);
   .talent-text {
    padding: 5rem 1rem;  
    width: 100%;
     h1 {
     color: var(--peach);
     margin-bottom: 1.5rem;
        }
      p {
        max-width: 327px; 
        margin: 0 auto;
      }   
      .text-one {
       margin-bottom: 1.5rem;
     }   
   }
 }

 .real-deal {
   display: flex;
   flex-direction: column;
   justify-content: center;
   text-align: center;
   margin-bottom: 7.5rem;
   background: url(${ThreeCircles}), #FDF3F0;
   background-repeat: no-repeat;
   background-position: calc(50% + 210px/2) calc(50% + 395px/2);

   .real-deal-text {
    padding: 5rem 1rem;
    width: 100%;
     h1 {
     color: var(--peach);
     margin-bottom: 1.5rem;
   } 
    p {
        max-width: 319px;
        margin: 0 auto;
      }   
      .text-one {
     margin-bottom: 1.5rem;
   } 
    
   }
 
 }


 
@media (min-width: 768px) {
 .mobile-image, .desktop-image {
   display: none
 }
 
 .tablet-image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: var(--radius) var(--radius) 0 0;
  }
 
 .intro {
    background: url(${BackgroundAbout}), var(--peach);
    background-repeat: no-repeat;
    background-position: calc(50% - 290px/2) calc(50% - 215px/2);
   .intro-text {
    padding: 4rem 1.5rem;
    h1 {
      margin-bottom: 2rem;
      }
      p {
        max-width: 535px;   
      }
    }
 }

  .talent {
   margin: 7.5rem auto;
   background-position: calc(50% + 65px/2) calc(50% + 65px/2);
    img {
      border-radius: var(--radius) var(--radius) 0 0 ;
    }

   .talent-text {
   padding: 4.25rem 1rem;  
   .text-one {
     margin-bottom: 1.5rem;
     } 
     p {
        max-width: 572px;   
    }  
   }
 }

 .real-deal {
     margin: 7.5rem auto;
     background-position: calc(50% + 65px/2) calc(50% + 65px/2);
   .real-deal-text {
    padding: 4.25rem 1rem; 
    p {
        max-width: 572px;     
    }  
  } 
 }
}

@media (min-width: 1281px) {
    .mobile-image, .tablet-image {
   display: none
 }
 .desktop-image {
 display: block;
 height: 100%;
 object-fit: cover;
 border-radius: 0 var(--radius) var(--radius) 0; 
 float: right; 
 }

 .image-container {
  height: 40rem;
  
 }

  .intro {
    flex-direction: row-reverse;
    height: 30rem;
    background-position: calc(50% - 470px/2) calc(50% - 165px/2);
    .intro-image {
      height: 100%;
    }
    .intro-text {
      text-align: left;
      padding: 8.438rem 1.5rem 8.438rem 5.938rem; 
    }
  }

  .talent {
  flex-direction: row;
  margin: 10rem auto;
  text-align:left;
  background-position: calc(50% + 170px/2) calc(50% + 55px/2);
  
  .image-container {
     width: 476px;
      img {
     float: left;
     border-radius: var(--radius) 0 0 var(--radius) ; 
     
   }
   }
   .talent-text {
     margin-left: 5.875rem;
     p {
       margin-left: 0;
       max-width: 445px;
     } 
   }
  }

 .real-deal {
    flex-direction: row-reverse;
    background: url(${TwoCircles}), #FDF3F0;
    background-repeat: no-repeat;
    background-position: calc(50% - 500px/2) calc(50% + 345px/2);
    .real-deal-image {  
      width: 100%;
      
     
    }
    .real-deal-text {
      text-align: left;
      margin: 5.375rem 0 0 5.938rem ;
      p {
        max-width: 445px;
        margin-left: 0;
      }
      
    }
 
 }
 


 
  }
`

export default AboutPage;



