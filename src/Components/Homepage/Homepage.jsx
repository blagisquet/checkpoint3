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
    <div className="positionHome">
      <div className="homePres">
        <img src="https://pbs.twimg.com/media/D9RAmoHWsAYzZpU?format=jpg&name=small" className="w-100 imgW" alt="wild" />
        <h1 className="welcome">Welcome to the Wild Circus, there is no animal but it's a zoo, you'll see!</h1>
      </div>
      <div className="presentation">
        <h2>What you'll see!</h2>
        <p>The Wild Circus is a circus without animals but every artist is an animal so we don't know how to call it... Let's have a look at all the artnimal we got.</p>
      </div>
      <div>
        {artists.map((artist, index) => {
          return (
            <div className="card mb-3 centerCard">
              <div className="row no-gutters">
                <div className="col-md-4">
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
    
      )
    }
    
    export default Homepage;
