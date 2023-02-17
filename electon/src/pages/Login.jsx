import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import SignInIcon from "../Icons/SignInIcon";

export default function () {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function submitHandler(e) {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.password.value);
  }

  return (
    <div className="signIn">
      <Button onClick={handleShow}>
        <div className="">
          <span>Sign in</span>
          <SignInIcon />
        </div>
      </Button>
      <Modal show={show} onHide={handleClose} animation={false} centered>
        <Form onSubmit={submitHandler}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                name="name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="text"
                name="password"
                placeholder="Enter password"
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" type="submit" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
}
