import React, { useState, usEffect, useEffect } from 'react';
import './Goldenbook.css';
import axios from 'axios';
import url from '../../conf';

function Goldenbook() {

  const [messages, setMessages] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  useEffect(() => {
    axios.get(`${url}/messages`)
      .then((result) => {
        setMessages(result.data);
      })
  }, []);

  return (
    <div className="positionGolden">
      <h2 className="titleCenter">Golden Book</h2>
      <form>
        <div class="form-row w-100">
          <div class="form-group col-md-6">
            <label for="inputName4">Name</label>
            <input type="name" class="form-control" id="inputName4" placeholder="Name" />
          </div>
          <div class="form-group col-md-6">
            <label for="inputEmail4">Email</label>
            <input type="mail" class="form-control" id="inputEmail4" placeholder="Email" />
          </div>
        </div>
        <div class="form-group">
          <label for="inputMessage">Message</label>
          <textarea type="text" class="form-control" id="inputMessage" placeholder="Write your message here" />
        </div>
        <button type="submit" class="btn btn-primary float-right">Valider</button>
      </form>
      <div className="goldenBack">
        {messages.map((message, index) => {
          return (
            <div className="row">
              <div class="col-sm-6">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">{message.name}</h5>
                    <p class="card-text">{message.message}</p>
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

export default Goldenbook;
