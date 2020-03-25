import React from 'react'
import ColdplayPhoto from '../images/coldplay.jpg'

const Coldplay = () => {
  return (
    <body>
      <h1>Coldplay</h1>
      <div className="band-album-summary">
        <img className="highlight-photo" src={ColdplayPhoto} />
        <h3>Latest Album: "Everyday Life"</h3>
        <h5>Release Date: November 22nd, 2019</h5>
        <p>Track List:</p>
        <p>"Sunrise"</p>
        <p className="song">Sunrise</p>
        <p className="song">Church</p>
        <p className="song">Trouble in Town</p>
        <p className="song">Broken</p>
        <p className="song">Daddy</p>
        <p className="song">WOTW/POTP</p>
        <p className="song">Arabesque</p>
        <p className="song">When I Need a Friend</p>
        <p>"Sunset"</p>
        <p className="song">Guns</p>
        <p className="song">Orphans</p>
        <p className="song">Eko</p>
        <p className="song">Cry Cry Cry</p>
        <p className="song">Old Friends</p>
        <p className="song">Bani Adam</p>
        <p className="song">Champion of the World</p>
        <p className="song">Everyday Life</p>
      </div>
    </body>
  )
}

export default Coldplay
