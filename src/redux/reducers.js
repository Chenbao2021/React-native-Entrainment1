import {SET_USER_NAME ,SET_USER_AGE, SET_USER ,ADD_AGE,CHANGE_COLOR} from "./actions"; 

const initialState={
    name:'test',
    age:24,
    color:'grey',
}
function userReducer(state=initialState,action){
    switch(action.type){
        case CHANGE_COLOR:
            return {...state,color:action.payload}; 
        case SET_USER_NAME:
            return {...state,name:action.payload};
        case SET_USER_AGE:
            return {...state,age:action.payload};
        case SET_USER:
            return {...state, ...action.payload.user};
        case ADD_AGE:
            return {...state,age:state.age + 1}
        default:
            return state;
    }

}

export default userReducer;
