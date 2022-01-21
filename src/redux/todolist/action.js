import axios from 'axios';
export const LOAD_TODO_ACTION = 'LOAD_TODO_ACTION';
export const ADD_TODO_ACTION = 'ADD_TODO_ACTION';
export const REMOVE_TODO_ACTION = 'REMOVE_TODO_ACTION';
export const CLEAR_TODO_ACTION = 'CLEAR_TODO_ACTION';

export function loadTodosThunk() {
    return (dispatch) => {
        let token = localStorage.getItem("LoggedInToken");
        return axios.get(`${process.env.REACT_APP_API}todo`, {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then((response) => {
                let result = response.data.map((todo) => {
                    return {
                        id: todo.id,
                        todo: todo.note
                    }
                })
                dispatch({
                    type: LOAD_TODO_ACTION,
                    todos: result
                })
            })
            .catch(err => {
                console.log(err)
                dispatch({
                    type: "default"
                })
            });
    }
}

export function addNewTodoThunk(note) {
    return (dispatch) => {
        let token = localStorage.getItem("LoggedInToken");
        return axios.post(`${process.env.REACT_APP_API}todo`, {
            note: note
        },
            { headers: { Authorization: `Bearer ${token}` } }
        ).then((response) => {
            dispatch({
                type: ADD_TODO_ACTION,
                todos: {
                    id: response.data[0].id,
                    todo: note,
                }
            })
        }).catch(err => {
            console.log(err)
            dispatch({
                type: "default"
            })
        });

    }
}


export function removeTodoThunk(itemid) {
    return (dispatch) => {
        let token = localStorage.getItem("LoggedInToken");
        return axios.delete(`${process.env.REACT_APP_API}todo`
            , {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                data: {
                    id: itemid
                }
            }
        )
            .then((data) => {
                dispatch({
                    type: REMOVE_TODO_ACTION,
                    id: itemid
                })
            }).catch(err => {
                console.log(err)
                dispatch({
                    type: "default"
                })
            });
    }
}
