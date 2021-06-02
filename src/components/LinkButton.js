import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {Arrow } from '../assets'

const LinkButton = (props) => {
  return (
        <Wrapper className={props.className}>
        <Link to={props.link} className="link-container ">
        <h2>{props.header}</h2>
        <p>View Projects <img src={Arrow} alt="arrow" /></p>
        <div className="layer"></div> 
        </Link>
        </Wrapper>
    );
};

const Wrapper = styled.main`
position: relative;
text-align: center;
display: flex;
justify-content: center;
align-items: center;
border-radius: var(--radius);

h2 {
      margin-bottom: 0.75rem;
  }

h2, p {
    position: relative;
    color: var(--white);
    z-index: 10;
    font-weight: 500;
    text-transform: uppercase;
      :hover ~ .layer {
    background: var(--peach);
    opacity: 0.8 ;
    
}

}

p {
    letter-spacing: 5px;
    font-size: 15px;
    img {
      margin-left: 0.5rem;
    }
}
.layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    border-radius: var(--radius);
    opacity: 0.5;
    transition: var(--transition);
    :hover, :focus {
    background-color: var(--peach);
    opacity: 0.8;

    }
}
@media (min-width: 768px) {
  h2 {
      margin-bottom: 1.5rem;
  }
  }
  
`

export default LinkButton;
