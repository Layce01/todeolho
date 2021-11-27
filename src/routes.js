import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./view/login";
import Cadastro from "./view/cadastro";
import Registro from "./view/registro";
import Monitoramento from "./view/monitoramento";
import Escrever from "./view/escrever";

const Rotas = () => {
   return(
       <Router>
           <Routes>
           <Route path="/" exact element ={<Login />}/>
           <Route path="/cadastro" exact element ={<Cadastro />}/>
           <Route path="/registro" exact element ={<Registro />}/>
           <Route path="/monitoramento" exact element ={<Monitoramento />}/>
           <Route path="/escrever" exact element ={<Escrever />}/>
           </Routes>
       </Router>
   )
}

export default Rotas;