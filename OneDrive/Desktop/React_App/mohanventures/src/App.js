import React from 'react';
import Header from './component/Header/Header';
// import Section0 from './component/Section0/Section0';
import Section1 from './component/Section1/Section1';
import Section2 from './component/Section2/Section2';
import Section3 from './component/Section3/Section3';
import Section5 from './component/Section5/Section5';
import {Home} from './component/Home';
import Footer from './component/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {Business} from './component/Business/Business';
import {Consulting} from './component/Consulting/Consulting';
import {Edutech} from './component/Edutech/Edutech';

function App() {
  return (
    <Router>
      {/* <Section0/> */}
      <Header/>
      {/* <Section0/> */}
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={Section2}/>
      <Route exact path="/contact" component={Section3}/>
      <Route exact path="/business" component={Business}/>
      <Route exact path="/consulting" component={Consulting}/>
      <Route exact path="/education" component={Edutech}/>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section5 />
      </Switch>
      <Footer />
    </Router>
  );
}
export default App;
