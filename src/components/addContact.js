import React, { useState, useEffect, Fragment } from "react";
import { useHistory } from "react-router-dom";

import axios from "axios";
import { Route } from "react-router-dom";

export const AddContact = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
const [userID, setUserID] = useState(props.match.params.id)
  
  
  useEffect(() => {
  async function getUser(){
    const response = await axios.get(
   `http://localhost:5001/display_onecontact/${userID}`);
      setName(response.data.name)
      setEmail(response.data.email);
      setTelephone(response.data.telephone)
      
    }
    getUser();
    },[userID]
  );

  const submitForm = () => {
    axios.post("http://localhost:5001/add_contact", { name, email, telephone });
    setName("");
    setEmail("");
    setTelephone();
    history.push("/contactlist");
  };

  const history = useHistory();

  const handleUpdate = (e) => {
    
    axios.put(`http://localhost:5001/update_contact/${userID}`, {name, email, telephone});
    history.push("/contactlist");
  };

  return (
    <div className="wrap-contact2">
      <span class="contact2-form-title">Contact Application</span>
     
        <Fragment>
          <div className="wrap-input2">
            <input
              className="input2"
              type="text"
              placeholder="NAME"
             value={name}
              onChange={(e) => setName(e.target.value)}
             
            />
          </div>
          <div className="wrap-input2">
            <input
              className="input2"
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
             
            />
          </div>
          <div className="wrap-input2">
            <input
              className="input2"
              type="text"
              value={telephone}
              placeholder="telephone"
              onChange={(e) => setTelephone(e.target.value)}
             
            />
          </div>
          <button
            className="contact2-form-btn"
            onClick={() => {
              userID ? handleUpdate() : submitForm();
            }}
          >
            {userID ? "Update" : "Add"}
          </button>
        </Fragment>
     
    </div>
  );
};
export default AddContact;
