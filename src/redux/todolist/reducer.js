import { LOAD_TODO_ACTION, CLEAR_TODO_ACTION, REMOVE_TODO_ACTION, ADD_TODO_ACTION } from "./action";

const initialState = {
    todos: []
}

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_TODO_ACTION:
            return {
                todos: state.todos.concat(action.todos)
            }
        case ADD_TODO_ACTION:
            return {
                todos: state.todos.concat(action.todos)
            }
        case CLEAR_TODO_ACTION:
            return {
                todos: []
            }
        case REMOVE_TODO_ACTION:
            let newState = state.todos.slice();
            return {
                todos: newState.filter((todo) => todo.id !== action.id)
            }
        default:
            return state;
    }
};