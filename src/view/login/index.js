import React, {useState} from 'react';
import './login.css';
import NavBar from "../../components/navbar";
import {getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
  } from "firebase/auth";
  import { auth } from "../../config/firebase";

  import { useSelector, useDispatch } from 'react-redux';
  import { Link, Navigate } from 'react-router-dom';



function Login (){

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const dispactch = useDispatch();

    const [user, setUser] = useState({});
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
      });

      const login = async () => {
        try {
          const user = await signInWithEmailAndPassword(
            auth,
            loginEmail,
            loginPassword
          );
          setTimeout(() => {
            dispactch({type: 'LOG_IN', usuarioEmail: loginEmail})
          },2000);
          
          console.log(user);
        } catch (error) {
          console.log(error.message);
        }
        
      };
   
    return(
        <div className= "login-content d-flex align-items-center">

          {useSelector(state => state.usuarioLogado) > 0 ?<Navigate to='/escrever' /> : null}


            <form className="form-signin col-md-3 mx-auto">
                <div className="text-center mb-4">
                    {/*<img className="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"/>*/}
                    <h1 className="h3 mb-3 font-weight-normal font-weight-bold">Login</h1>
                </div>

                    <input onChange={(Event) => {setLoginEmail(Event.target.value);}} type="email" id="inputEmail" class="form-control my-2" placeholder="Email" />    
                    <input onChange={(Event) => {setLoginPassword(Event.target.value);}}type="password" id="inputPassword" class="form-control my-2" placeholder="Senha" />
                    
        
                <button onClick={login} class="btn btn-lg btn-block btn-login" type="button">Entrar</button>
                 
                <div className="msg-login text-center my-5">
                    
                </div>


                <div className= "opcoes-login mt-5 text-center">
                    <a className="mx-2"><Link to="/cadastro">Cadastrar</Link></a>
                </div>

            </form>
        </div>
    )
    }

export default Login;