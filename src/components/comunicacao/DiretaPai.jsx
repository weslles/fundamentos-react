import React from "react";
import DiretaFilho from "./DiretaFilho";

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return (
        <div>
            <DiretaFilho texto="Theo" numero={5} nerd={true}></DiretaFilho>
            <DiretaFilho texto="Henrique" numero={11} nerd={false}></DiretaFilho>
        </div>
    )
}