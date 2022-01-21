import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import SignUp from './Signup';
import { loginUserThunk } from '../redux/auth/actions';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form'

export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [modalShow, setModalShow] = useState(false);
    const [username, updateUsername] = useState("");
    const [password, updatePassword] = useState("");
    const authenticated = useSelector((state) => state.authStore.auth);

    const login = (e) => {
        e.preventDefault()
        console.log(username, password)
        dispatch(loginUserThunk(username, password))
    };

    useEffect(() => {
        if (authenticated) {
            navigate("/todo");
        }
    }, [authenticated]);

    return (
        <>
            <div className='col-md-4'>
                <Form className='row'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control placeholder="Enter username" value={username} onChange={(e) => { updateUsername(e.target.value) }} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control placeholder="Password" value={password} onChange={(e) => { updatePassword(e.target.value) }} />
                    </Form.Group>
                    <div>
                        <Button className="mx-1" variant="primary" type="submit" onClick={(e) => { login(e) }}>
                            Login
                        </Button>
                        <Button className="mx-1" variant="primary" onClick={() => setModalShow(true)}>
                            Sign Up
                        </Button>
                    </div>
                    <SignUp
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                </Form>
            </div>
        </>
    )
}