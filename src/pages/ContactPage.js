import React from 'react';
import styled from 'styled-components';
import {Form,Locations} from "../components"
import {Leaf} from "../assets"

const ContactPage = () => {
    return (
      <Wrapper>
        <div className="leaf-container section-center-two">
           <div className="leaf"><img src={Leaf} alt="background grey leaf" /></div>
        </div>
       <Form/>
       <Locations/>
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

@media (min-width: 1281px) {
.leaf {
  display: block;
  position: absolute;
  top: 730px ;
  right: -165px;
  z-index: -1;
  }
}
`

export default ContactPage;