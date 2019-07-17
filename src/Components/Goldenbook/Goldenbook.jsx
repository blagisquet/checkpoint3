import React, { useState, useEffect } from 'react';
import './Goldenbook.css';
import axios from 'axios';
import url from '../../conf';

function Goldenbook() {

  const [messages, setMessages] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [datMessage, setDatMessage] =useState('');

  const addMessage = {
    name,
    email,
    datMessage
  }
  const sendMessage = (e) =>{
    e.preventDefault();
    axios.post(`${url}/messages`, addMessage)
    .then((res) => {
      if (res.status === 200) {
       setMessages([...messages, {
         name: name,
         email: email,
         message: datMessage
       },
      ]);
      }
    })
    .catch(() => {
      console.log("Une erreur s'est produite. Merci de réessayer (bitch)");
    });
  }

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
        <div className="form-row w-100">
          <div className="form-group col-md-6">
            <label htmlFor="inputName4">Name</label>
            <input type="name" onChange={e => setName(e.target.value)} className="form-control" id="inputName4" placeholder="Name" value={name}/>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail4">Email</label>
            <input type="mail" onChange={e => setEmail(e.target.value)} className="form-control" id="inputEmail4" placeholder="Email" value={email} />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputMessage">Message</label>
          <textarea type="text" onChange={e => setDatMessage(e.target.value)} className="form-control" id="inputMessage" placeholder="Write your message here" value={datMessage} />
        </div>
        <button type="submit" onClick={sendMessage} className="btn btn-warning float-right warning">Valider</button>
      </form>
      <div className="lessHigher">
        {messages.map((message, index) => {
          return (
            <div className="widthCard">
              <div className="col-sm-6">
                <div className="card">
                  <div className="card-body goldenBack">
                    <h5 className="card-title">{message.name}</h5>
                    <p className="card-text">{message.message}</p>
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
