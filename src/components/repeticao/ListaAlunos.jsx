import React from "react";
import alunos from '../../data/data'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    const alunosLI = alunos['alunos'].map((aluno) => {
        return (
            <li>
                {aluno.id}) {aluno.nome} -> {aluno.nota}
            </li>
        )
    })
    return (
        <div>
            <ul style={{listStyle: "none"}}>{alunosLI}</ul>
        </div>
    )
}