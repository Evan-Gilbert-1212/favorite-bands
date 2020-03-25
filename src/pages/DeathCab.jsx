import React from 'react'
import DeathCabPhoto from '../images/death_cab.jpg'

const DeathCab = () => {
  return (
    <body>
      <h1>Death Cab For Cutie</h1>
      <div className="band-album-summary">
        <img className="highlight-photo" src={DeathCabPhoto} />
        <h3>Latest Album: "Thank You For Today"</h3>
        <h5>Release Date: August 17th, 2018</h5>
        <p>Track List:</p>
        <p className="song">I Dreamt We Spoke Again</p>
        <p className="song">Summer Years</p>
        <p className="song">Gold Rush</p>
        <p className="song">Your Hurricane</p>
        <p className="song">When We Drive</p>
        <p className="song">Autumn Love</p>
        <p className="song">Northern Lights</p>
        <p className="song">You Moved Away</p>
        <p className="song">Near/Far</p>
        <p className="song">60 & Punk</p>
      </div>
    </body>
  )
}

export default DeathCab
