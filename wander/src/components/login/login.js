import React from "react";
import { useForm } from "react-hook-form";
import { Button, Checkbox, Form } from "semantic-ui-react";

const Login = () => {
  const { register, handleSubmit } = useForm();

  return (
    <Form className="form">
      <h1>Sign-up</h1>
      <Form.Field>
        <label>First Name</label>
        <input placeholder="Email" required ref={register} />
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
        <input placeholder="Password" required ref={register} />
      </Form.Field>
      <Form.Field>
        <Checkbox label="I agree to the Terms and Conditions" />
      </Form.Field>
      <Button type="submit">Signup</Button>
      <h3>Already have an account?</h3>
      <Button type="submit">Signin</Button>
    </Form>
  );
};
export default Login;
