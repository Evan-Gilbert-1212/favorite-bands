import React from 'react'
import MusePhoto from '../images/muse.jpg'

const Muse = () => {
  return (
    <body>
      <h1>Muse</h1>
      <div className="band-album-summary">
        <img className="highlight-photo" src={MusePhoto} />
        <h3>Latest Album: "Simulation Theory"</h3>
        <h5>Release Date: November 9th, 2018</h5>
        <p>Track List:</p>
        <p className="song">Algorithm</p>
        <p className="song">The Dark Side</p>
        <p className="song">Pressure</p>
        <p className="song">Propaganda</p>
        <p className="song">Break It to Me</p>
        <p className="song">Something Human</p>
        <p className="song">Thought Contagion</p>
        <p className="song">Get Up and Fight</p>
        <p className="song">Blockades</p>
        <p className="song">Dig Down</p>
        <p className="song">The Void</p>
      </div>
    </body>
  )
}

export default Muse
