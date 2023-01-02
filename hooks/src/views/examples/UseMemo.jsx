import React, { useEffect, useMemo, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'

function sum(a, b) {
    const future = Date.now() + 2000
    while (Date.now() < future) { } //Espera de 2000 ms
    return a + b
}


const UseMemo = (props) => {
    const [n1, setN1] = useState(0)
    const [n2, setN2] = useState(0)
    const [n3, setN3] = useState(0)



    // eslint-disable-next-line no-lone-blocks
    {/** 
        Problema: N3 apesar de não fazer parte da operação Soma também aguarda 2s
        para reenderizar. 
        Solução de reenderização utilizando useEfect
        
        const [result, setResult] = useState(0) 
        useEffect(function () {
            setResult(sum(n1, n2))
        }, [n1, n2])*/}

    const result = useMemo(() => sum(n1, n2), [n1, n2])


    return (
        <div className="UseMemo">
            <PageTitle
                title="Hook UseMemo"
                subtitle="Retorna um valor memoizado!"
            />
            <div className="center">
                <input type="number" className="input"
                    value={n1} onChange={e => setN1(parseInt(e.target.value))} />
                <input type="number" className="input"
                    value={n2} onChange={e => setN2(parseInt(e.target.value))} />
                <input type="number" className="input"
                    value={n3} onChange={e => setN3(parseInt(e.target.value))} />
                <span className='text'>{result}</span>
            </div>
        </div>
    )
}

export default UseMemo