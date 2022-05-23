export const SET_USER_NAME = 'SET_USER_NAME';
export const SET_USER_AGE = 'SET_USER_AGE';
export const SET_USER = 'SET_USER';
export const ADD_AGE='ADD_AGE';
export const CHANGE_COLOR='CHANGE_COLOR';
// export const setName=name=>dispatch=>{
//     dispatch({
//         type:SET_USER_NAME,
//         payload:name,
//     })
// }

export const changeColor=(color)=>dispatch=>{
    dispatch ({
        type:CHANGE_COLOR,
        payload:color,
    })
}


export const addAge=age=> dispatch =>{
    dispatch ({
        type:ADD_AGE,
        payload:age ,
    }) 
}

export const setAge = age => dispatch => {
    dispatch({
        type: SET_USER_AGE,
        payload:age,
    })
}

export const setName = (name) => {
    return {
        type: SET_USER_NAME,
        payload: name,
    }
}

export const setUser = (user) => {
    return {
        type: SET_USER,
        payload: user,
    }
}