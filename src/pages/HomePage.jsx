import React from 'react'
import ColdplayPhoto from '../images/coldplay.jpg'
import MusePhoto from '../images/muse.jpg'
import DeathCabPhoto from '../images/death_cab.jpg'

const HomePage = () => {
  return (
    <body>
      <h1>My Favorite Bands</h1>
      <div className="summary-section">
        <img className="summary-photo" src={ColdplayPhoto} />
        <article className="summary-article">
          <h3>Coldplay</h3>
          <p>
            Coldplay is an alternative rock band that was formed in London,
            England in 1996. The band consists of 4 main members: Chris Martin,
            Jonny Buckland, Guy Berryman and Will Champion. Their first hit
            single came in the year 2000 and was called "Yellow". They have
            released eight albums over the bands lifetime and have done a tour
            for all but their most recent album. They are still active to this
            day with their most recent album releasing in 2019 called "Everyday
            Life".
          </p>
        </article>
      </div>
      <div className="summary-section">
        <img className="summary-photo" src={MusePhoto} />
        <article className="summary-article">
          <h3>Muse</h3>
          <p>
            Muse is a progressive/hard rock band that was formed in Teignmouth,
            Devon, England in 1994. The band consists on 3 members: Matt
            Bellamy, Chris Wolstenholme and Dominic Howard. Their first album
            "Showbiz was popular, but thy did not really come into mainstream
            until their second album "Origin of Symmetry". Their first big
            single heard around the world was "Supermassive Black Hole" from the
            album "Black Holes and Revelations". They have released eight albums
            to date with the latest being in 2018 called "Simulation Theory".
          </p>
        </article>
      </div>
      <div className="summary-section">
        <img className="summary-photo" src={DeathCabPhoto} />
        <article className="summary-article">
          <h3>Death Cab For Cutie</h3>
          <p>
            Death Cab For Cutie is an indie rock band that was formed in
            Bellingham, Washington in 1997. The band consists of five members
            including: Ben Gibbard, Nick Harmer, Jason McGerr, Dave Depper and
            Zac Rae. They have been growing in popularity with each album
            release and have grown as a group over the years. Their first album
            that went mainstream was "Plans" in 2006. Their latest album "Thank
            You For Today", released in 2018 was largely inspired by Seattle,
            Washington and the surrounding areas and how it has changed since
            they were younger.
          </p>
        </article>
      </div>
    </body>
  )
}

export default HomePage
