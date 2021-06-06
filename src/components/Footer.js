import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { links } from '../utils/constants';
import {LogoLight, Facebook, Youtube, Twitter, Pinterest, Instagram} from '../assets'

const Footer = () => {
    return (
      <Wrapper>
        <div className="section-center-one footer">
           <div className="footer-company">
              <Link to="/"><img src={LogoLight} alt="Designo" className="logo" /></Link>
              <hr className="horizontal-line-1" />
              <div className='links-container'>
                <ul className="links">      
                {links.map((link)=> {
                const {id, url, text} = link;   
                return  <li key={id}><Link to={url}>{text}</Link></li>    
                })}  
                </ul> 
              </div> 
           </div>  
        <hr className="horizontal-line-2" />
          <div className="footer-social">
             <div className="company">
               <p> <b>Designo Central Office </b></p>
               <p> 3886 Wellington Street</p>
               <p>Toronto, Ontario M9C 3J5</p>
             </div>
             <div className="company">
               <p> <b>Contact Us (Central Office)</b></p>
               <p>P : +1 253-863-8967</p>
               <p>M : contact@designo.co</p>
             </div>
             <div className="social-links">
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><img src={Facebook} alt="Facebook"/></a>
                <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><img src={Youtube} alt="Youtube"/></a>
                <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer"><img src={Twitter} alt="Twitter"/></a>
                <a href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer"><img src={Pinterest} alt="Pinterest"/></a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><img src={Instagram} alt="Instagram"/></a>
             </div>
            </div>
         </div>
     </Wrapper>
    );
};

const Wrapper = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--black);
  text-align: center;

hr {
  width: 100%;
  border: none;
  border-top: 1px solid var(--white);
  opacity: 0.1;
  }
 
.horizontal-line-1 {
  margin-bottom: 1rem;
  width: 87.2vw;
}

.horizontal-line-2 {
  display: none;
}
 
.footer {
    margin: 4rem 0;
          }
  .footer-company {
    display: flex;
    flex-direction: column;
    text-align: center;
    color: var(--white);
      .logo {
       height: 27px;
       margin-bottom: 2rem;
          }
  }
 
.links {
    margin-bottom: 2.5rem;
       a {
       color: var(--white);
       font-size: 14px;
       letter-spacing: 2px;
       position: relative;
       line-height: 3.4;
       text-transform: uppercase;
          :before {
          content: "";
          position: absolute;
          opacity: 0.5;
          width: 100%;
          height: 1px;
          bottom: 2px;
          left: 0;
          background-color: var(--white);
          visibility: hidden;
          transform: scaleX(0);
          transition: var(--transition);
          }
          :hover:before  {
           visibility: visible;
           transform: scaleX(1);   
                        }    
         }
}

.footer-social {
  color: var(--white);
  display: flex;
  flex-direction: column;   
      .company {
       line-height: 26px;
       opacity: 0.5 ;
       margin-bottom: 2.5rem;    
             }
  }

.social-links img {
  padding: 0 0.5rem;
  transition: var(--transition);   
  :hover {
      transform: scale(1.1)    
         } 
  }

@media (min-width: 750px) {
    .horizontal-line-1 {
  display: none
  }

  .horizontal-line-2 {
  display: flex;
  }

  .footer {
    margin: 5rem 0;
  }

  .footer-company {
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  }

  .links {
    display: flex; 
       a {
    margin-left: 2.5rem;
        }
  }

.footer-social {
  flex-direction: row;
  justify-content: space-between;
  text-align: left;
  margin-top: 2.5rem;
   .social-links {
    align-self: center;
    margin-top: 1rem;
         } 
   }
 }

 @media (min-width: 1400px) {
   .footer {
    margin: 4.5rem 0;
      }

  .footer-social {
    margin-top: 2rem;
      }
  }
`

export default Footer;