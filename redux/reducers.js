import { ADD_TODO, REMOVE_TODO } from "./actions";

const initialState = [];

function TodoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { title: action.title, id: action.id }];
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
}

export default TodoReducer;
