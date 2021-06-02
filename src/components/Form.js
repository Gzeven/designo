import React from 'react';
import useForm from './customHooks';
import validate from './validate';
import styled from 'styled-components'
import {Error, BackgroundContactMobile, BackgroundContact, ThreeCircles} from '../assets'

const Form = () => {
    const {inputs, handleInputChange, handleSubmit ,errors} = useForm({name:'',email:'', phone: '', message: ''}, validate);
    return (
        <Wrapper className="section-center-one" >
        <div className="contact-container">
           <div className="contact-text">
           <h1>Contact Us</h1>
           <p>Ready to take it to the next level? Let’s talk about your project or idea and find out how 
              we can help your business grow. If you are looking for unique digital experiences that’s 
              relatable to your users, drop us a line.</p>
          </div>
        <form onSubmit={handleSubmit}  noValidate >
         
        <div className="input-item">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" onChange={handleInputChange} value={inputs.name} placeholder="Name" required=""/>
           {errors.name && <p className="error">{errors.name} <img src={Error} alt="wrong" /></p>}
          </div>
        
        <div className="input-item">
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" onChange={handleInputChange} value={inputs.email} placeholder="Email Adress" required=""/>
          {errors.email && <p className="error">{errors.email} <img src={Error} alt="wrong" /></p>}
          </div>
         
        <div className="input-item">
          <label htmlFor="phone">Phone</label>
          <input type="tel" name="phone" onChange={handleInputChange} value={inputs.phone} placeholder="Phone" required=""/>
            {errors.phone && <p className="error">{errors.phone} <img src={Error} alt="wrong" /></p>}
          </div>
       
        <div className="input-item">
          <label htmlFor="message">Message</label>
          <textarea name="message" onChange={handleInputChange} value={inputs.message} placeholder="Your Message" required=""/>
           {errors.message && <p className="error">{errors.message} <img src={Error} alt="wrong" /></p>} 
          </div>

        <button type="submit" className="btn-dark">Submit</button> 
      </form>
      </div>
      
      </Wrapper>
    )
}

const Wrapper = styled.main`
color: var(--white);
padding: 4.5rem 1.5rem;
background: url(${BackgroundContactMobile}), url(${ThreeCircles}) var(--peach);
background-repeat: no-repeat;
background-position: calc(50% + 320px/2) calc(50% + 190px/2), calc(50% + 600px/2) calc(50% + 1250px/2);

.contact-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}
.contact-text {
  margin-bottom: 3rem;
  h1 {
    margin-bottom: 1.5rem;
  }
  p {
    height: 7.813rem;
    width: 327px;
    margin: 0 auto;
  }
}
label {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }

input, textarea {
    background-color: transparent;
    color: var(--white);
    width: 100%;
    padding: 1rem;
    border:none;
    border-bottom: 1px solid var(--white);  
    ::placeholder {
      color: var(--white);
      opacity: 0.5;
    }
    :focus {
        outline: none !important;
        border-bottom: 3px solid var(--white);
      }
  }

  input {
    margin-bottom: 1rem;
  }

.input-item {
  position: relative;
}


.error {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 14px;
    right: 8px;
    font-style: italic;
    font-size: 0.75rem;
    
    img {
      margin-left: 0.5rem;
      width: 1.25rem;
      height: 1.25rem;
    }
}
textarea {
    resize: none;
    height: 126px;
    margin-bottom: 2.5rem;
  }

   @media (min-width: 768px) {

   padding: 4.5rem 3.625rem;
    background: url(${BackgroundContact}), var(--peach);
    background-repeat: no-repeat;
    background-position: calc(50% - 280px/2) calc(50% - 215px/2);

 form { 
   button {
     float: right;
     
   }
    textarea {
    margin-bottom: 1.5rem;
  }
  
  }


.contact-text {
 
  text-align: left;
  p {
    margin-left: 0;
    height: 4.875rem;
    width: 573px; 
  }
}

 }
 
@media (min-width: 1281px) {
     padding: 3.5rem 5.938rem;
     background-position: calc(50% - 470px/2) calc(50% - 120px/2);
     
     form { 
       width: 23.75rem;
     }
  .contact-container {
   flex-direction: row;
   flex: 1;
   align-items: center;
   
   .contact-text {
    flex: 1;
    p {
      width: 445px;
    }
   }
  }
   
  }
`

export default Form;