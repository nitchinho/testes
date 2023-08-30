import { useState } from 'react';
// import Conteudo from '../Conteudo';
import Logo from './assets/logo.png'
import './App.css';

const Topo = () =>  {
  const [corTema, setCorTema] = useState("tema-light");

  const trocarTema = () => {
    setCorTema(corTema === "tema-light" ? "tema-dark" : "tema-light");
  }

  return (
    <div className = {corTema}>
      <img className = {corTema} src={Logo} alt="logo"/>
      <button onClick = {() => trocarTema()}>Trocar Tema</button>
      <p>BLABLABLABLABLA;</p>
    </div>
  );
}

export default Topo;