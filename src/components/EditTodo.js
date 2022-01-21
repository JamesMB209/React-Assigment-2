import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form'

export default function EditTodo(props) {
  const dispatch = useDispatch();
  const [todoVal, updateTodoVal] = useState(props.todo);

/** Not currently working, some issue with the timing of updating the props I think */

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className='row'>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Todo</Form.Label>
            <Form.Control placeholder="Enter username" value={todoVal} onChange={(e) => { updateTodoVal(e.target.value) }} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button className="mx-1" variant="primary" onClick={() => { props.onHide() }}>
          Sign Up
        </Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}