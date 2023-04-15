import React,{useEffect, useState} from 'react'
import {Link, } from 'react-router-dom'

import { useNavigate } from "react-router-dom";
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';



import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import cookies from 'js-cookie';

const languages = [
  {
    code: 'en',
    name: 'English',
    country_code: 'gb',
  },
  {
    code: 'ar',
    name: 'العربية',
    dir: 'rtl',
    country_code: 'sa',
  },
]



export const Login = () => {

    
  const currentLanguageCode = cookies.get('i18next') || 'en'
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
  const { t } = useTranslation()

  useEffect(() => {
    console.log('Setting page stuff')
    document.body.dir = currentLanguage.dir || 'ltr'
    document.title = t('app_title')
  }, [currentLanguage, t])

    const navigate = useNavigate();
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');

    const [errorMsg, setErrorMsg]=useState('');
    const [successMsg, setSuccessMsg]=useState('');

    const handleLogin=(e)=>{
        e.preventDefault();
         console.log(email, password);
       signInWithEmailAndPassword(auth,email,password).then(()=>{
            setSuccessMsg('Login Successfull. You will now automatically get redirected to Home page');
            setEmail('');
            setPassword('');
            setErrorMsg('');
            setTimeout(()=>{
                setSuccessMsg('');
                navigate('/');
            },3000)
        }).catch(error=>setErrorMsg(error.message));
    }

    return (
        <div className='container'>
            <br></br>
            <br></br>
            <h1>{t("login")}</h1>
            <hr></hr>
            {successMsg&&<>
                <div className='success-msg'>{successMsg}</div>
                <br></br>
            </>}
            <form className='form-group' autoComplete="off"
            onSubmit={handleLogin}>               
                <label>{t("email")}</label>
                <input type="email" className='form-control' required
                onChange={(e)=>setEmail(e.target.value)} value={email}></input>
                <br></br>
                <label>{t("password")}</label>
                <input type="password" className='form-control' required
                onChange={(e)=>setPassword(e.target.value)} value={password}></input>
                <br></br>
                <div className='btn-box'>
                    <span>{t("account")}
                    <Link to="signup" className='link'> {t("here")}</Link></span>
                    <button type="submit" className='btn btn-success btn-md'>{t("login2")}</button>
                </div>
            </form>
            {errorMsg&&<>
                <br></br>
                <div className='error-msg'>{errorMsg}</div>                
            </>}
        </div>
    )
}