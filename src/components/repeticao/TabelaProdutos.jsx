import React from "react";
import Produtos from '../../data/data';

const produtos = Produtos['produtos'].map((produto) => {
    return (
        <tr key={produto.id}>
            <td>{produto.id}</td>
            <td>{produto.nome}</td>
            <td>{produto.preco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</td>
        </tr>
    )
})

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return (
        <table border='2' style={{ width: "100%" }}>
            <tr style={{backgroundColor: '#aaa'}}>
                <td>ID</td>
                <td>NOME</td>
                <td>PREÇO</td>
            </tr>
            {produtos}
            
        </table>
    )
}
