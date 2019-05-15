import React, { Component } from 'react';

class composant extends Component {
    constructor(props){
        super(props);
        this.state={
            title:"",
            globalTitle:""
        }
    }

    handleChange = (e) =>{
        this.setState({title:e.target.value});
    }

    click =() =>{
        this.setState({globalTitle:this.state.title});
    }

    componentDidMount(){
        console.log( "Formulaire rendu")
    }

    componentDidUpdate(){
        if (this.state.title===this.state.globalTitle){
           console.log("Titre changé")
        }  
    }

    render() {
        return (
            <div>
                <h1>Mon formulaire: {this.state.globalTitle}</h1>
                <input onChange={this.handleChange} value={this.title} type="text"/>
                <button onClick={this.click} >Valider</button>
            </div>
        );
    }
}

export default composant;