import {SELECTBOOK,DESELECTBOOK} from '../actions';


export default(state = {} , action) =>{
    switch(action.type){
        case SELECTBOOK:
            return action.payload
        case DESELECTBOOK:
            return {}
        default:
            return state;
    }
    
}