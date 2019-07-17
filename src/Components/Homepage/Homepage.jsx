import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Homepage.css';
import url from '../../conf';

function Homepage() {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    axios.get(`${url}/artists`)
      .then((result) => {
        setArtists(result.data);
      })
  }, []);

  return (
    <div className="container">
      <div className="positionHome">
        <div className="homePres">
        <h1 className="welcome text-center">Welcome to the Wild Circus,<br /> there is no animal here but it's a zoo, you'll see!</h1>
          <img src="https://pbs.twimg.com/media/D9RAmoHWsAYzZpU?format=jpg&name=small" className="imgW" alt="wild" />    
        </div>
        <div className="presentation">
          <h2>What you'll see!</h2>
          <p>The Wild Circus is a circus without animals but every artist is an animal so we don't know how to call it... Let's have a look at all the artnimals we got.</p>
        </div>
        <div className="testFloat">
          {artists.map((artist, index) => {
            return (
                <div className="card row mb-3">
                  <div className="row">
                    <div className="col-md-4 d-flex justify-content-around centerCard">
                      <img src={artist.image} className="card-img" alt={artist.name} />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{artist.name}</h5>
                        <p className="card-text">{artist.work}</p>
                        <p className="card-text">{artist.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
            )
          })}
        </div>
      </div>
    </div>

  )
}

export default Homepage;
