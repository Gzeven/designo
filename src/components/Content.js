import React from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'
import { Home, About, WebDesign, GraphicDesign, AppDesign, LocationsMap, Contact, Error  } from '../pages';
import { TransitionGroup, CSSTransition  } from 'react-transition-group';
import styled from 'styled-components';

function Content () {
  const location = useLocation()
  
  return (
    <Wrapper>
    <TransitionGroup>
   <CSSTransition
          key={location.key}
          timeout={{ enter: 300, exit: 300 }}
          classNames={'fade'}    
   >
  <div>
  <Switch location={location} >
  <Route exact path="/" component={Home} />
  <Route exact path="/about" component={About} />
  <Route exact path="/webdesign" component={WebDesign} />
  <Route exact path="/appdesign" component={AppDesign} />
  <Route exact path="/graphicdesign" component={GraphicDesign} />
  <Route exact path="/about" component={About}/> 
  <Route exact path="/locations" component={LocationsMap}/> 
  <Route exact path="/contact" component={Contact} />
  <Route path="*" component={Error}/>
  </Switch>
  </div>
  </CSSTransition>
  </TransitionGroup>
    </Wrapper>
  )
}



const Wrapper = styled.main`
.fade-enter {
    opacity: 0.01;
    &.fade-enter-active {
        opacity: 1;
        transition: opacity 300ms ease-in;
    }
}

.fade-exit {
    opacity: 1;
    &-active {
        opacity: 0.01;
        transition: opacity 300ms ease-in;
    }
}
`


export default Content;