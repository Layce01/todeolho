import React from 'react';
import "./escrever.css";
import {app} from "./fb"
import NavBar from "../../components/navbar";

function Escrever() {

  const [arquivoUrl, setArquivoUrl] = React.useState("");
  const [docus,setDocus] = React.useState([]);

  const arquivoHandler = async (e)=> {

    const arquivo = e.target.files[0];
    const storageRef = app.storage().ref();
    const arquivoPath = storageRef.child(arquivo.name);
    await arquivoPath.put(arquivo);
    console.log("arquivo carregado:",arquivo.name);
    const enlaceUrl = await arquivoPath.getDownloadURL();
    setArquivoUrl(enlaceUrl);

  }

  const submitHandler = async (e)=> {
    e.preventDefault()

const ruaArquivo = e.target.rua.value;
if (!ruaArquivo) {
  alert("Preencha a rua")
  return
}
const bairroArquivo = e.target.bairro.value;
if (!bairroArquivo) {
  alert("Preencha o bairro")
  return
}
const numeroArquivo = e.target.numero.value;
if (!numeroArquivo) {
  alert("Preencha o numero")
  return
}
const referenciaArquivo = e.target.referencia.value;
if (!referenciaArquivo) {
  alert("coloca un teste")
  return
}
const horaArquivo = e.target.hora.value;
if (!horaArquivo) {
  alert("coloca un teste")
  return
}
const dataArquivo = e.target.data.value;
if (!dataArquivo) {
  alert("Preencha a data")
  return
}
const detalheArquivo = e.target.detalhe.value;
if (!detalheArquivo) {
  alert("Preencha os detalhes")
  return
}

const coleccionRef =  app.firestore().collection("users");
const docu = await coleccionRef.doc(ruaArquivo).set(
  {
    rua: ruaArquivo, 
    bairro: bairroArquivo,
    numero: numeroArquivo,
    referencia: referenciaArquivo,
    hora: horaArquivo,
    data: dataArquivo,
    detalhe: detalheArquivo,
    url: arquivoUrl});

  console.log(
  
  "ulr:", arquivoUrl, 
  "rua:", ruaArquivo,
  "bairro:", bairroArquivo,
  "numero:", numeroArquivo,
  "referencia:", referenciaArquivo,
  "hora:", horaArquivo,
  "data:", dataArquivo,
  "detalhe:", detalheArquivo
  );

window.location="/escrever"

  }

  React.useEffect(async ()=>{
    const docusList = await app.firestore().collection("users").get();
    setDocus(docusList.docs.map((doc)=> doc.data()));
   
  }, [])

  return (
    <>
      <NavBar/>
    <div className= "login-content area-content d-flex align-items-center">
    <form className = "mx-auto" onSubmit={submitHandler}  >
      
    <h1 className="h3 mb-5 font-weight-normal font-weight-bold">Registro de denúncia</h1>
      <input type="file" onChange={arquivoHandler} />

      <div class="form-row mt-3">
          <label for="inputAddress">Bairro</label> 
          <input type="text" name="bairro" class="form-control" placeholder="..." /> 
       </div>

      <div class="form-row mt-3">
        <div class="form-group col-md">
          <label for="inputAddress">Rua</label>
          <input type="text" name="rua" class="form-control" placeholder="..." /> 
        </div>
        <div class="form-group col-md-3">
        <label for="inputAddress">Número</label>
        <input type="text" name="numero" class="form-control" placeholder="..." />
        </div>
      </div>

      
      <label for="inputAddress">Referência</label>
      <input type="text" name="referencia" class="form-control" placeholder="..." />
      <div class="form-row mt-3">
        <div class="form-group col-md-6">
          <label for="inputAddress">Hora do ocorrido</label>
          <input type="text" name="hora" class="form-control" placeholder="..." />
        </div>
          <div class="form-group col-md-6">
          <label for="inputAddress">Data do ocorrido</label>
          <input type="text" name="data" class="form-control" placeholder="..." />
        </div>   
      </div>
     
      
      <div class="form-group">
                <label for="exampleFormControlTextarea1">Detalhes da denúncia</label>
                <textarea class="form-control" name="detalhe" rows="3"></textarea>
            


      
    
      </div>
      
      <button type="submit" class="btn btn-dark mt-3">Enviar </button>
       </form>
    </div>
    </>
   
  );
}

export default Escrever;