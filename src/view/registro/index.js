import "./registro.css";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import NavBar from "../../components/navbar";
import { useSelector } from "react-redux";

import { db } from "../../config/firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

function Registro (){
    const [newRua, setNewRua] = useState("");
    const [newBairro, setNewBairro] = useState("");
    const [newNumero, setNewNumero] = useState("");
    const [newReferencia, setNewReferencia] = useState("");
    const [newHora, setNewHora] = useState("");
    const [newData, setNewData] = useState("");
    const [newDetalhe, setNewDetalhe] = useState("");
    const [newFoto, setNewFoto] = useState("");
    const [usuarioLogado, setUsuarioEmail] = useState("");

    

    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, "users");

    const criarRegistro = async () => {
        await addDoc(usersCollectionRef, { rua: newRua, bairro: newBairro, numero: newNumero, referencia: newReferencia,hora: newHora, data: newData, detalhe: newDetalhe });
    };


    useEffect(() => {
        const getUsers = async () => {
        const data = await getDocs(usersCollectionRef);
        setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };

    getUsers();
  }, []);
  return(
      <>
      <NavBar/>
      <h1>{useSelector(state => state.usuarioEmail)}</h1>
      <h1>Logado: {useSelector(state => state.usuarioLogado)}</h1>
      <div className= "login-content d-flex align-items-center">
          <form className = "mx-auto">
          <h1 className="h3 mb-5 font-weight-normal font-weight-bold">Registro de denúncia</h1>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="inputAddress">Rua</label>
                    <input onChange={(Event) => {setNewRua(Event.target.value);}}type="text" class="form-control" id="inputAddress" />
                </div>
                <div class="form-group col-md-6">
                    <label for="inputAddress">Bairro</label>
                    <input onChange={(Event) => {setNewBairro(Event.target.value);}}type="text" class="form-control" id="inputAddress" />
                </div>
            </div>

            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="inputAddress">Número</label>
                    <input onChange={(Event) => {setNewNumero(Event.target.value);}}type="text" class="form-control" id="inputAddress" />
                </div>
                <div class="form-group col-md-6">
                    <label for="inputAddress">Referência</label>
                    <input onChange={(Event) => {setNewReferencia(Event.target.value);}}type="text" class="form-control" id="inputAddress" />
                </div>
            </div>
           
            
            <div class="form-row">
                <div class="form-group col-md-6">
                <label for="inputCity">Horario do ocorrido</label>
                <input onChange={(Event) => {setNewHora(Event.target.value);}} type="text" class="form-control" id="inputCity"/>
                </div>
                <div class="form-group col-md-6">
                <label for="inputCity">Data do ocorrido</label>
                <input onChange={(Event) => {setNewData(Event.target.value);}} type="text" class="form-control" id="inputCity"/>
                </div>
            </div>
            
            <div class="form-group">
                <label for="exampleFormControlTextarea1">Detalhes da denúncia</label>
                <textarea onChange={(Event) => {setNewDetalhe(Event.target.value);}} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>

            

                <button onClick={criarRegistro} type="submit" class="btn btn-dark mt-5">Enviar</button>
        </form>
        </div>
        </>
  )
  }

export default Registro;