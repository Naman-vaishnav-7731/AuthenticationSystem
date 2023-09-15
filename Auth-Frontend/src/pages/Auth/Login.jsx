import React from 'react';
import { Form, Button, Col, Container } from 'react-bootstrap';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required'),
});

const initialValues = {
  username: '',
  password: '',
};

const Login = () => {
  const handleSubmit = (values, { setSubmitting }) => {
    // You can handle the login logic here, e.g., sending a request to your server.
    console.log('Submitted values:', values);
    setSubmitting(false);
  };
  
  return (
    <Container>
      <h2>Login</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit, isSubmitting }) => (
          <Form noValidate onSubmit={handleSubmit}>
              <Form.Group as={Col} controlId="username">
                <Form.Label>Username</Form.Label>
                <Field
                  type="text"
                  name="username"
                  as={Form.Control}
                  placeholder="Enter your username"
                />
                <ErrorMessage name="username" component="div" className="text-danger" />
              </Form.Group>


              <Form.Group as={Col} controlId="password">
                <Form.Label>Password</Form.Label>
                <Field
                  type="password"
                  name="password"
                  as={Form.Control}
                  placeholder="Enter your password"
                />
                <ErrorMessage name="password" component="div" className="text-danger" />
              </Form.Group>

            <Button type="submit" disabled={isSubmitting}>
              Login
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default Login;
