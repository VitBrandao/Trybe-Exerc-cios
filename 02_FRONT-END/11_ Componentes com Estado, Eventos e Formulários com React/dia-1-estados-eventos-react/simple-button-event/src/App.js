import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();  

    // Faço o this e bind para garantir que as funções possam acessar o this dentro de seu escopo
    this.handleClick = this.handleClick.bind(this);
    this.clickEvent = this.clickEvent.bind(this);
    this.clickAgain = this.clickAgain.bind(this);

    // Declarando o estado inicial do número de cliques
    this.state = {
      cliquesPrimeiroBotao: 0,
      cliquesSegundoBotao: 0,
      cliquesTerceiro: 0,
    }

  }

  // Declaro as três funções passadas no onClick de cada botão renderizado
  handleClick = () => {
   this.setState((prevState) => ({
     cliquesPrimeiroBotao: prevState.cliquesPrimeiroBotao + 1,
   })) 
  }
   
  clickEvent = () => {
    this.setState((prevState) => ({
      cliquesSegundoBotao: prevState.cliquesSegundoBotao - 1,
    }))
  }
   
  clickAgain = () => {
    this.setState((prevState) => ({
      cliquesTerceiro: prevState.cliquesTerceiro + 2,
    }))
  }

  render() {
    return (
      // Passo as funções com o this dentro do evento onClick de cada botão 
      // Para visualizar as alterações do estado, coloco o próprio como sendo o conteúdo de cada botão
      <div className='buttonDiv'>
        <button onClick={this.handleClick}>{this.state.cliquesPrimeiroBotao}</button>
        <button onClick={this.clickEvent}>{this.state.cliquesSegundoBotao}</button>
        <button onClick={this.clickAgain}>{this.state.cliquesTerceiro}</button>
      </div>
    );
  }
}

export default App;
