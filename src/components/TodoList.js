import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { loadTodosThunk, addNewTodoThunk, removeTodoThunk } from '../redux/todolist/action';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import EditTodo from './EditTodo';

export default function TodoList() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const authenticated = useSelector((state) => state.authStore.auth);
    const todoStore = useSelector(state => state.todoStore);
    const { todos } = todoStore;

    const onPageLoad = () => dispatch(loadTodosThunk());
    const addNewTodo = (todo) => dispatch(addNewTodoThunk(todo));
    const deleteItem = (id) => dispatch(removeTodoThunk(id))

    const [modalShow, setModalShow] = useState(false);
    const [val, updateVal] = useState("");
    const [indexOfTodo, updateIndexOfTodo] = useState(0);

    useEffect(() => {
        if (authenticated) {
            onPageLoad();
        } else {
            navigate("/login");
        }
    }, [])

    return (
        <div className="row">
            {todos.map((item, index) => (
                <div className="row" key={index}>
                    <span key={"span:"+item.id}>
                        <Button
                            key={"RemoveButton:" + item.id}
                            className="m-1"
                            variant="secondary"
                            onClick={() => deleteItem(item.id)}
                        >Remove
                        </Button>
                        <Button
                            key={"editButton:" + item.id}
                            className="mx-1"
                            variant="primary"
                            onClick={() => {
                                updateIndexOfTodo(index);
                                setModalShow(true)
                            }}>
                            Modify
                        </Button>
                        {item.todo}
                    </span>
                </div>
            ))}

            <div>
                <Button varient="primary" onClick={() => {addNewTodo(val);updateVal("")}}>Add ToDo.</Button>
                <input value={val} onChange={(e) => { updateVal(e.target.value) }}></input>
            </div>

            <EditTodo
                show={modalShow}
                onHide={() => {setModalShow(false)}}
                todo={indexOfTodo}
            />
        </div>
    )
}