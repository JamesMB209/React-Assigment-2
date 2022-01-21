import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { signupUserThunk } from '../redux/auth/actions';
import Form from 'react-bootstrap/Form'

export default function SignUp(props) {
  const dispatch = useDispatch();

  const [username, updateUsername] = useState("");
  const [password, updatePassword] = useState("");

  const signUp = () => {
    dispatch(signupUserThunk(username, password));
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Sign Up
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className='row'>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control placeholder="Enter username" value={username} onChange={(e) => { updateUsername(e.target.value) }} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control placeholder="Password" value={password} onChange={(e) => { updatePassword(e.target.value) }} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button className="mx-1" variant="primary" onClick={() => { signUp(); props.onHide() }}>
          Sign Up
        </Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
