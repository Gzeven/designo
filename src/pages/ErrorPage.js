import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return <Wrapper >
  <section >
  <h1>404</h1>
  <h3>Sorry, no designs to be found here</h3>
  <Link to="/" className="btn-light">Back to Homepage</Link>
  </section>
  </Wrapper>
};

const Wrapper = styled.main`
  height: 100vh;
  color: var(--peach);
  background-image: url('https://images.unsplash.com/photo-1617631717736-3263609d2375?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80');
  background-position: calc(50% - 0px/2) calc(50% - 0px/2);
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  h3 {
    margin-bottom: 1.5rem;
  }

  @media (min-width: 768px) {
    background-position: calc(50% - 0px/2) calc(50% - 0px/2);
  }

@media (min-width: 1281px) {
   background-position: calc(50% - 0px/2) calc(50% - 0px/2);
  }
  
`

export default ErrorPage