import React from "react"

export default class App extends React.Component{
    state = {
       pessoas: [
        {
            nome: "Leonardo",
            idade: 20,
            cidade: "Presidente Figueiredo"
        },
        {
            nome: "Henrique",
            idade: 29,
            cidade: "Uberlândia"
        },
        {
            nome: "Luan Vitor",
            idade: 22,
            cidade: "Paulo Afonso"
        },
        {
            nome: "Gabriel",
            idade: 24,
            cidade: "Rio de Janeiro"
        },
        {
            nome: "Sophia",
            idade: 22,
            cidade: "Porto Velho"
        }
    ] 
    }
    // msg = () => {
    //     return <h1>Olá!</h1>
    // }
    // add = (x, y) => {
    //     return x + y
    // }   
    // double = (x) => {
    //     return <h1>O dobro de {x} é: {2 * x}</h1>
    // }
    // mostrarNome = () => {
    //     return <h2>Olá, eu sou {this.state.nome}!</h2>
    // }

    render(){
        return(
            <div>
                {/* {this.msg()}
                <h1>{this.add(7, 8)}</h1>
                {this.double(10)}
                {this.mostrarNome()} */}
                {this.state.pessoas.map((item) => (
                <div key={item.nome}>
                    <h2>Olá, me chamo {item.nome}, tenho {item.idade} anos e moro em {item.cidade}</h2>
                </div>
                ))}
            </div>
        )
    }
}