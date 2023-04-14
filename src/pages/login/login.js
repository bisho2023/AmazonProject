import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";
import Logo from "../images/Logo.png";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
export const Login = () => {
  const navigate = useNavigate();

  // const [email, setEmail]=useState('');
  // const [password, setPassword]=useState('');

  // const [errorMsg, setErrorMsg]=useState('');
  // const [successMsg, setSuccessMsg]=useState('');

  // const handleLogin=(e)=>{
  //     e.preventDefault();
  //      console.log(email, password);
  //    signInWithEmailAndPassword(auth,email,password).then(()=>{
  //         setSuccessMsg('Login Successfull. You will now automatically get redirected to Home page');
  //         setEmail('');
  //         setPassword('');
  //         setErrorMsg('');
  //         setTimeout(()=>{
  //             setSuccessMsg('');
  //             navigate('/');
  //         },3000)
  //     }).catch(error=>setErrorMsg(error.message));
  // }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password).then((auth) => {
      if (auth) {
        navigate("/");
      }
    });
  };

  const signUp = () => {
    navigate("/signup");
  };
  return (
    // <div className='container'>
    //     <br></br>
    //     <br></br>
    //     <h1>Login</h1>
    //     <hr></hr>
    //     {successMsg&&<>
    //         <div className='success-msg'>{successMsg}</div>
    //         <br></br>
    //     </>}
    //     <form className='form-group' autoComplete="off"
    //     onSubmit={handleLogin}>
    //         <label>Email</label>
    //         <input type="email" className='form-control' required
    //         onChange={(e)=>setEmail(e.target.value)} value={email}></input>
    //         <br></br>
    //         <label>Password</label>
    //         <input type="password" className='form-control' required
    //         onChange={(e)=>setPassword(e.target.value)} value={password}></input>
    //         <br></br>
    //         <div className='btn-box'>
    //             <span>Don't have an account SignUp
    //             <Link to="signup" className='link'> Here</Link></span>
    //             <button type="submit" className='btn btn-success btn-md'>LOGIN</button>
    //         </div>
    //     </form>
    //     {errorMsg&&<>
    //         <br></br>
    //         <div className='error-msg'>{errorMsg}</div>
    //     </>}
    // </div>
    <div className="login">
      <Link to="/">
        <img className="login-logo" src={Logo} alt="logo-img" />
      </Link>
      <div className="login-container">
        <h1>Sign in</h1>
        <form>
          <h5>Email</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login-signInBtn" type="submit" onClick={signIn}>
            Sign in
          </button>
          <p>
            By continuing, you agree to Amazon's Fake Clone Conditions of Use
            and Privacy Notice.
          </p>
          <button className="login-registerBtn" onClick={signUp}>
            Create your Amazon Account
          </button>
        </form>
      </div>
    </div>
  );
};
