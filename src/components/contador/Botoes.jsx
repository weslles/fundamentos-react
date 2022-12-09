import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return (
        <div>
            <button onClick={props.setInc} >+</button>
            <button onClick={props.setDec} >-</button>
        </div>
    )
}