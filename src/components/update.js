import React,{useState} from "react"
import axios from "axios"
import {Button , Modal} from "react-bootstrap" 

function UpdateContact(props) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [user,setUser]  =useState({name:"",email:"",telephone:""})

    const handleUpdate = (e) =>{
        e.preventDefault()
        axios.put(`http://localhost:5001/update_contact/${props.contact._id.valueOf()}`,user)
        handleClose()
    }
  
    return (

      <>
        <Button variant="primary" onClick={handleShow} >
          Update
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
           <p> </p> 
          </Modal.Header>
          <Modal.Body>
          <form onSubmit={handleUpdate}>
        <input
          type="text"
        
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          Value ={props.contactname}
        ></input>
        <input
          type="email"
        
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          Value ={props.contactmail}
        ></input>
        <input
          type="number"
         
          onChange={(e) => setUser({ ...user, telephone: e.target.value })}
          Value ={props.contacttelephone}
        ></input>
        <button type="sumbit" className="contact2-form-btn">update</button>
      </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
           
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  export default UpdateContact