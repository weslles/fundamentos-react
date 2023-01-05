import { reducer } from './reducers'


const initialState = {
    cart: [],
    products: [],
    user: null,
    number: 0
}

var M =0
function addM(n){
    M = parseInt(n)
}

export {
    reducer,
    addM,
    M,
    initialState
}



