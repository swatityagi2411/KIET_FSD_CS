import{createSlice} from '@reduxjs/toolkit'

const initialState = {
  todos: []
};
//Traditional Redux
/*export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, { id: Date.now(), text: action.payload, completed: false }]
      };

    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };

    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
        )
      };

    default:
      return state;
  }
};*/

// redux toolkit

const todoSlice=createSlice({
  name:"todo",
  initialState,
  reducers:
  {
    addtodo:(state,action)=>{
      state.todos.push({
        id:Date.now(),
        text:action.payload,
        completed:false
      })
    },
    deletetodo:(state,action)=>{
      state.todos=state.todos.filter(todo => todo.id !== action.payload)

    },
    toggletodo:(state,action)=>{
      state.todos=state.todos.map(todo =>
          todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
        )

    }
  }
})

export const {addtodo,deletetodo,toggletodo}=todoSlice.action;
export default todoSlice.reducer;