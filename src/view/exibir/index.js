import React from 'react';
import "./escrever.css";
import {app} from "./fb"

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
const nombreArquivo = e.target.nombre.value;
if (!nombreArquivo) {
  alert("coloca un nombre")
  return
}
const testeArquivo = e.target.teste.value;
if (!testeArquivo) {
  alert("coloca un teste")
  return
}

const coleccionRef =  app.firestore().collection("users");
const docu = await coleccionRef.doc(nombreArquivo).set({nombre: nombreArquivo, teste: testeArquivo, url: arquivoUrl});
console.log("archivo cargado:", nombreArquivo, "ulr:", arquivoUrl, "teste", testeArquivo);
window.location="/"

  }

  React.useEffect(async ()=>{
    const docusList = await app.firestore().collection("users").get();
    setDocus(docusList.docs.map((doc)=> doc.data()));
   
  }, [])

  return (
    <>
    <div className= "login-content d-flex align-items-center">
    <form className = "mx-auto" onSubmit={submitHandler}  >
      <input type="file" onChange={arquivoHandler} />
      <div class="form-row"> 
      <input type="text" name="nombre" placeholder="nombra tu arquivo" />
      <input type="text" name="teste" class="form-control" placeholder="teste" />
      </div>
      <button>Enviar </button>
       </form>
       <ul>
         {docus.map((doc)=> <li><h3>{doc.nombre}</h3><h3>{doc.teste}</h3><img src={doc.url} height="100px" width="100px" /></li>)}
       </ul>
    </div>
    </>
   
  );
}

export default Escrever;