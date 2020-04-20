import React from 'react';
import  styled from 'styled-components';
import Mensagem from './components/Mensagem';


let Container = styled.div `
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

let Aplicativo = styled.div `
  width: 600px;
  background-color: #e5ddd5;
  min-height: 99.5vh;
  border: 1px solid black;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 20fr 1fr;
  justify-items: start;
  align-items: end;
`
let Formulario = styled.section`
  display: flex;
  flex-wrap: nowrap; 
  width:100%;
  justify-content: space-between;
  height:5vh;
`
let Msg = styled.input `
  width:75%;
`
let Rmt = styled.input `
  width:13%;
`
let Botao = styled.button `
 width:8%;
`
let Secao = styled.section `
  grid-area:1/1/2/2;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  margin: 2vw;
  width:94%;
`

class App extends React.Component {
  
  state = {
    mensagensIniciais: []
  };

  adicionaMsg = () => {
    const novaMsg = {
      remetente: this.state.valorInputRemetente,
      mensagem: this.state.valorInputMensagem,
    };
    
    const mensagens = [...this.state.mensagensIniciais, novaMsg]

    this.setState({ mensagensIniciais: mensagens });
    this.setState({ valorInputRemetente: "" });
    this.setState({ valorInputMensagem: "" });
  }

  onKeyDownEnter = (event) =>{
    if(event.key === 'Enter'){

      this.adicionaMsg()
    }
  }

  apagaMsg = (event) =>{
    console.log('funfou')
  }

  onChangeInputRemet = (event) => {
    this.setState({ valorInputRemetente: event.target.value });
  };

  onChangeInputMsg = (event) => {
    this.setState({ valorInputMensagem: event.target.value });
  };
  


  render(){
    const listaMsg = this.state.mensagensIniciais.map((msg) => {
      return(
        <Mensagem
          remetente={msg.remetente}
          mensagem={msg.mensagem}
        />
      );
    });

    return (
      <Container>
        <Aplicativo>
          <Secao ondblclick={this.apagaMsg} >
            {listaMsg}
          </Secao><br/>

          <Formulario>
            <Rmt
              value={this.state.valorInputRemetente}
              onChange={this.onChangeInputRemet}
              placeholder="Remetente"
            />
            
            <Msg 
              value={this.state.valorInputMensagem}
              onChange={this.onChangeInputMsg}
              onKeyDown = {this.onKeyDownEnter}
              placeholder="Escreva sua mensagem"
              
            />
            
            <Botao onClick={this.adicionaMsg}>Enviar</Botao>
          </Formulario>
        
        </Aplicativo>
      </Container>
    );
  }
}

export default App;
