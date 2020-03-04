import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Checkbox, Form } from "semantic-ui-react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../../App.css";
import axios from "axios";

const Signin = props => {
  const { register, handleSubmit } = useForm();
  const [info, setInfo] = useState({});

  const onSubmit = values => {
    axios.post(
      "https://cspt5-bw1-teamb-master.herokuapp.com/api/login/",
      values
    )
    .then(res => {
      localStorage.setItem("token", res.data.key)
      props.history.push("/map")
    })
    .catch(err => console.log(err))
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)} className="form">
        <h1>Welcome Back! Sign-in here</h1>
        <Form.Field>
          <label>Username</label>
          <input
            name="username"
            placeholder="username"
            required
            ref={register}
          />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input name="password" placeholder="password" required ref={register} />
        </Form.Field>
        <Button type="submit">Sign In</Button>
      </Form>
      <h3>Don't have an account yet? Register/Signup here</h3>
      <Link to="/">
        <Button>Sign Up</Button>
      </Link>
    </>
  );
};

export default Signin;
