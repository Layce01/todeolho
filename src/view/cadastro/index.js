import React from 'react';
import NavBar from "../../components/navbar";
import { useState } from "react";
import './cadastro.css';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
  } from "firebase/auth";
  import { auth } from "../../config/firebase";


function NovoUsuario (){
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [msgTipo, setMsgTipo]  = useState("");
    const [msg, setMsg]  = useState("");

    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    });

    const register = async () => { 
      setMsgTipo(null);

        if(!registerEmail || !registerPassword){
          setMsgTipo('erro')
          setMsg('Você precisa informar email e senha para fazer o cadastro!');
          return
        }
        
        try {
          const user = await createUserWithEmailAndPassword(
            auth,
            registerEmail,
            registerPassword
          );
          console.log(user);
        } catch (error){
          setMsgTipo('error')
          console.log(error.message);
        }
      };

     
       
      

    return(
        <>
      <NavBar/>
        <div className= "cadastro-content d-flex align-items-center">
            <form className="form-signin col-md-3 mx-auto">
                <div className="text-center mb-4">
                    <h1 className="h3 mb-3 font-weight-normal font-weight-bold">Cadastro</h1>
                </div>
                     
                    <input onChange={(Event) =>{setRegisterEmail(Event.target.value);}} type="email" id="inputEmail" class="form-control my-2" placeholder="Email" />    
                    <input onChange={(Event) =>{setRegisterPassword(Event.target.value);}} type="password" id="inputPassword" class="form-control my-2" placeholder="Senha" />
                    
        
                <button onClick={register} type="button" className="btn btn-lg btn-block btn-login" type="submit">Cadastrar</button>
                
                <div className='msg-login text-black text center my-5'>
                    {msgTipo == 'sucesso' && <span>Usuário cadastrado com sucesso </span>}
                    {msgTipo == 'erro' && <span> {msg} </span>}
                </div>
              

            </form>
        </div>
        </>
    )
}

export default NovoUsuario;