import React from 'react'
import styled from 'styled-components'

let BlocoMensagem = styled.div `
    border: 1px solid black;
    border-radius: 20%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1vw;
    margin-bottom: 1vw;
    align-self: ${props =>{
        if(props.valor.toUpperCase() === "EU" ){
            return "flex-end"
        }
        else{
            return "flex-start"
        }
    }};
    background-color: ${props =>{
        if (props.valor.toUpperCase() === "EU") {
            return "#b9ff95"
        }
        else{
            return "white"
        }
    }};
`

let Remetente = styled.p`
    font-weight: bold;
    color: black;
`

let MensagemTela = styled.span ``

class Mensagem extends React.Component {
    render(){
        
        if (this.props.remetente.toUpperCase() === "EU" ) {
            return <BlocoMensagem valor={this.props.remetente}>
                    <MensagemTela>{this.props.mensagem}</MensagemTela>
            </BlocoMensagem>
        }
        else{
            return <BlocoMensagem valor={this.props.remetente}>
                    <Remetente>{this.props.remetente}:</Remetente><br/>
                    <MensagemTela>{this.props.mensagem}</MensagemTela>
            </BlocoMensagem>
        }
    }
}

export default Mensagem