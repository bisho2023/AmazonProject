import React, {useRef, useState}from 'react';
import {Button, Card, Form, Alert, } from 'react-bootstrap';
// import styled from 'styled-componentes';
import {Link, useHistory} from 'react-router-dom';
// import firebase from 'firebase';
// import { collection, getDocs, orderBy, query, where } from "@firebase/firestore";

import { useSelector } from 'react-redux';
import { useAuth } from '../../context/GlobalProvider';
import { doc, setDoc } from '@firebase/firestore';
import { auth, db, fs } from "../../firebase";

const Userprofile = () => {
    // const editProfile  = document.querySelector('#editProfile')
    function updateUserProfile(e){
        e.preventDefault()
        // const userDocRef =  db.firestore()
        // .collection('users')
        // .doc(db.auth().currentUser.uid)
    
    
        // userDocRef.update({
        //     name:editProfile["name"].value,
        //     email:editProfile["profileEmail"].value,
        //     password:editProfile["password"].value
    
        // })
        // alert("done")
    
        // M.Modal.getInstance(myModel[2]).close()
    }


const emailRef = useRef();
const currentPasswordRef = useRef();
const newPasswordRef = useRef();
const {currentUser,updateEmail,updatePassword} = useAuth();
const [erorr,setErorr] = useState('');
const [message,setMessage] = useState('');
const [loading,setLoading] = useState('');
// const history = useHistory();

// const currentUsers = db.auth().currentUser;


function reauthenticate(currentPassword) {
    console.log('currentPassword in reauthenticate', currentPassword);
    let credential = auth.EmailAuthProvider.credential(
        currentUser.email,
        currentPassword

    );

    return currentUser.reauthenticateWithCredential(credential);
}

function handleSubmite(e){
    e.preventDefault();
    reauthenticate(currentPasswordRef.current.value).then(()=>{
        const promises = [];
        setErorr('');
        setLoading(true);
        if(emailRef.current.value !==  currentUser.email ){
            promises.push(updateEmail(emailRef.current.value))
            console.log("email done")
        }
        if(newPasswordRef.current.value){
            promises.push(updatePassword(newPasswordRef.current.value))
            console.log("password done")
        }
    });
    console.log(" done")
}

function selectText(event){
    const input = event.target;
    input.focus();
    input.select();

}
    

    return (
        <div>
           <h1>user profile</h1> 
           {/* <!--edit profile --> */}
      {/* <div >
     <div >
      <h4>Edit your details</h4>
      
      <form autocomplete="off" id="editProfile" onsubmit="updateUserProfile(event)">
        <input type="email" name="profileEmail" placeholder="email" /><br/><br/>
        <input type="text" name="name" placeholder="name" /><br/><br/>
        <input type="text" name="password" placeholder="password" /><br/><br/>
   
        <button class="btn waves-effect #fbc02d yellow darken-2" type="submit">submit</button>   <br/>
      </form>   
    </div>
  </div> */}


{message && <Alert variant='success'>{message}</Alert>}
{erorr && <Alert variant='danger'>{erorr}</Alert>}
{/* onSubmit={handleSubmite} */}
<Form >
    <Form.Group id='email'>
        <Form.Label>Email</Form.Label>
        <Form.Control
        type="email"
        ref={emailRef}
        required
        // defaultValue={currentUser.email}
        onClick={(event)=>selectText(event)}

        />
    </Form.Group>

    <Form.Group id='currentPassword'>
        <Form.Label>Current Password</Form.Label>
        <Form.Control
        type="password"
        ref={currentPasswordRef}
        required
        />
    </Form.Group>

    <Form.Group id='newPassword'>
        <Form.Label>Password</Form.Label>
        <Form.Control
        type="password"
        ref={newPasswordRef}
        required
        />
    </Form.Group>

    <Button 
    type="submit"
    className="w-auto text-center mt-2"
    >
        Update
    </Button>
</Form>





{/* testing */}

  {/* <div className="accordion-item">
  <h2 className="accordion-header">
    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Edit Your Profile
    </button>
  </h2>
  <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
    <div className="accordion-body w-50 mx-3">

        <form className='form-group' autoComplete="off" onSubmit={handleSubmite} >
            <label>Name</label>
            <input type="text" className='form-control' name="name" placeholder="name"/>
            <br></br>
            <label>Email</label>
            <input type="email" className='form-control' name="profileEmail" placeholder="email" />
            <br></br>
            <label>Password</label>
            <input type="text" className='form-control' name="password" placeholder="password"/>
            <br></br>
            <div className='btn-box'>
                <button type="submit" className='btn btn-warning btn-md'>Update Profile</button>
            </div>
        </form>
    </div>
  </div>
  </div> */}


        </div>
    );
}

export default Userprofile;
