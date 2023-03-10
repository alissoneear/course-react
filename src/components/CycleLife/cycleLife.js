import React, { Component } from 'react';

export default class CycleLife extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hour: "00:00:00"
        }
    }
    //Método é executado depois que o Component foi montado no DOM
    componentDidMount(){
        setInterval(()=>{
            this.setState({hour: new Date().toLocaleTimeString()})
        }, 1000);
    }
    //Devolve um objeto apra o componentDidUpdate antes do "Component" ser renderizado
    getSnapshotBeforeUpdate(){}
    //Toda vez que alguma prop for enviada ou um state for atualizado ele será acionado
    componentDidUpdate(){
        //console.log("Hora foi atualizada!")
    }
    //Nesta fase, o componente não é mais necessário e será desmontado no DOM
    componentWillUnmount(){}
    render() { 
        return (
            <div>
                <h1>As horas são {this.state.hour}</h1>
            </div>
        );
    }
}