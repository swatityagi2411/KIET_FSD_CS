export const ADD_TODO="ADD_TODO";
export const DELETE_TODO="DELETE_TODO";
export const TOGGLE_TODO="TOGGLE_TODO";

export const addtodo=(text)=>({
    type:ADD_TODO,
    payload:text

})
export const deletetodo=(id)=>({
    type:DELETE_TODO,
    payload:id

})

export const toggletodo=(id)=>({
    type:TOGGLE_TODO,
    payload:id

})



