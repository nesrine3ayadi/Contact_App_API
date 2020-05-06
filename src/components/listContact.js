import React, { useState, useEffect } from "react";

import axios from "axios";
import CardContact from "./contactCard";

const ListContact = () => {
  const [List, setList] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5001/display_contact").then((res) => {
      setList(res.data);
    });
  });

  return (
    <div class="container">
      <div className="row">
        {List.map((e) => (
          <CardContact contact={e}></CardContact>
        ))}
      </div>
     
    </div>
  );
};
export default ListContact;
