import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {BackgroundContactButton} from '../assets'

const ContactButton = () => {
    return (
    <Wrapper>
        <div className="section-center-two contact-container" >
           <div className="contact" >
              <div className="contact-text">
                 <h1>Let’s talk about<br></br> your project</h1>
                 <p>Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.</p>
              </div>
              <Link to="/contact" className="btn-dark" >Get in touch</Link>
           </div>
        </div>   
    </Wrapper>
    );
};

const Wrapper = styled.section`
  width: 100%;
  background: linear-gradient(180deg, rgba(0,0,0,0) 50%, var(--black) 50%);

.contact-container {
 background: url(${BackgroundContactButton}), var(--peach);
 background-repeat: no-repeat;
 background-size: fill; 
 background-position: calc(50% + 75px/2) calc(50% - 0px/2); 
 padding: 4rem 1.5rem;
 border-radius: var(--radius);  
 text-align: center; 
   .contact {
       h1, p {
        color: var(--white);
            } 
       h1 {
        margin-bottom: 1rem;      
         } 
       p    {
        font-size: 15px;
        max-width: 279px;
        margin: 0 auto 2rem;
           }   
      } 
} 

  
  
@media (min-width: 768px) {
background: linear-gradient(180deg, rgba(0,0,0,0) 75%, var(--black) 75%);     
 .contact-container {
   background-position: calc(50% + 150px/2) calc(50% + 30px/2); 
   .contact {
   display: flex;
   flex-direction: column;
     P {
     max-width: 400px
       }
     }
   }
 }
 
@media (min-width: 1281px) {
.contact-container {
padding: 4.5rem 5.938rem;
background-position: calc(50% + 250px/2) calc(50% + 0px/2);
  .contact {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: left;
       p {
         max-width: 435px;
      }
      .btn-dark {
         text-align: center;
         margin-left: auto; 
         margin-right: 0;
               }
           }
     }
  }
`

export default ContactButton;