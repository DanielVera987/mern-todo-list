import React, { useState, useContext } from "react";
import { Card, Button, Form, Alert } from "react-bootstrap";
import AuthContext from "../context/AuthContext";

const initialForm = {
  email: "",
  password: "",
};

const Login = () => {
  const { signUp } = useContext(AuthContext);
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resp = await signUp(form);
    if (!resp) {
      setError("Las credenciales son incorrectas");
    } else {
      setError(false);
    }
  };

  return (
    <>
      <div className="vh-100 d-flex justify-content-center align-items-center">
        <Card>
          <Card.Header>Iniciar Sesión</Card.Header>
          <Card.Body>
            <Card.Title style={{ textAlign: "center" }}>DAVADEV</Card.Title>
            <Card.Text>
              {error ? <div className="alert alert-danger">{error}</div> : ""}
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={form.email}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={form.password}
                  />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100">
                  Iniciar
                </Button>
              </Form>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Login;
