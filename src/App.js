import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import HomePage from './pages/HomePage'
import DeathCab from './pages/DeathCab'
import Muse from './pages/Muse'
import Coldplay from './pages/Coldplay'

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/death-cab-for-cutie">Death Cab For Cutie</Link>
          </li>
          <li>
            <Link to="/muse">Muse</Link>
          </li>
          <li>
            <Link to="/coldplay">Coldplay</Link>
          </li>
        </ul>
        <div className="line"></div>
      </nav>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/death-cab-for-cutie" component={DeathCab} />
        <Route exact path="/muse" component={Muse} />
        <Route exact path="/coldplay" component={Coldplay} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
