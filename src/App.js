import React from 'react'
import { BrowserRouter as Router} from 'react-router-dom'
import { Content, Navbar, Footer, ScrollToTop } from './components'



function App() {

  return (
     <Router >
   <Navbar/> 
   <ScrollToTop/>
   <Content/>

  <Footer/>
  </Router>
  );
}

export default App;

