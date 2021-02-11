import './App.css';
import BoxList from './components/Boxes/BoxList'
import NavBar from './components/navBar/NavBar'
import RegisterSide from './components/RegisterAndLogin/RegisterSide'
import TraiteurSteps from './components/Traiteur/TraiteurSteps'
import Home from './components/Home/Home'

import {BrowserRouter, Link , Route} from "react-router-dom"
import TataList from './components/tatas/TataList'

import { BrowserRouter, Link, Route } from "react-router-dom";
import TataList from "./components/tatas/TataList";
import ContactUs from "./components/ContactUs/ContactUs";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Route exact path ="/" render= {()=>  <Home /> }/>
      <Route  path ="/register" render= {()=>  <RegisterSide /> }/>
      <Route  path ="/lunch" render= {()=> <BoxList /> }/>
      <Route path ='/tata'render = {()=> <TataList />} />
      <Route path ='/traiteur'render = {()=> <TraiteurSteps />} />
      <Route path="/contactus" render={() => <ContactUs />} />
      </BrowserRouter>
    </div>
  );
}

export default App;
