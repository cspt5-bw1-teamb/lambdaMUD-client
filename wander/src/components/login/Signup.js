import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Checkbox, Form } from "semantic-ui-react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../../App.css";

const Signup = ({ loggedIn }) => {
  const { register, handleSubmit } = useForm();
  const [info, setInfo] = useState({});

  const onSubmit = values => {
    setInfo(values);
  };

  console.log(info, "values here");
  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)} className="form">
        <h1>Welcome Back! Sign-in here</h1>
        <Form.Field>
          <label>First Name</label>
          <input
            name="first_name"
            placeholder="first_name"
            required
            ref={register}
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input
            name="last_name"
            placeholder="last_name"
            required
            ref={register}
          />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input name="email" placeholder="email" required ref={register} />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input
            name="password"
            placeholder="password"
            required
            ref={register}
          />
        </Form.Field>
        <Button type="submit">Signup</Button>
      </Form>
      <h3>Already have an account?</h3>
      <Link to="/signin">
        <Button>Signin</Button>
      </Link>
    </>
  );
};
export default Signup;
