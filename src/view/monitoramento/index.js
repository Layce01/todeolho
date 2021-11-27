import "./monitoramento.css";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import NavBar from "../../components/navbar";
import MonitoramentoCard from "../../components/monitoramento-card";

function Monitoramento (){

  return(
    <>
     <NavBar/>

     <div className="row">
      <MonitoramentoCard />
      <MonitoramentoCard />
      <MonitoramentoCard />
      <MonitoramentoCard />
     </div>
     
      </>

  )
  }

export default Monitoramento;