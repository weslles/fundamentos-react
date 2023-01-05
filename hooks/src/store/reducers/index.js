import { M } from '../../store'
export function reducer(state, action) {

    switch (action.type) {
        case 'number_add1':
            return { ...state, number: state.number + 1 }
        case 'number_sub1':
            return { ...state, number: state.number - 1 }
        case 'number_mult7':
            return { ...state, number: state.number * 7 }
        case 'number_div25':
            return { ...state, number: state.number / 25 }
        case 'number_parseInt':
            return { ...state, number: parseInt(state.number) }
        case 'number_addM':
            return { ...state, number: state.number + M }
        case 'login':
            return { ...state, user: { name: action.payload } }
        default:
            return state
    }
}