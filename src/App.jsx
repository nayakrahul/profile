import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Loader from './components/Loader/Loader.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import Hello from './components/Sections/HelloSection/HelloSection.jsx';
import Work from './components/Sections/WorkSection/WorkSection.jsx';
import Contact from './components/Sections/ContactSection/ContactSection.jsx';
import NotFound from './components/NotFound/NotFound.jsx'


class Found extends React.Component {
  render() {
    return (
      <div>
        <Loader/>
        <NavBar/>
        <Hello/>
        <Work/>
        <Contact/>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Found}/>
          <Route path='*' component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
