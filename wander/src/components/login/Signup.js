import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Checkbox, Form } from "semantic-ui-react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../../App.css";
import axios from "axios"

const Signup = props => {
  const { register, handleSubmit } = useForm();
  const [info, setInfo] = useState({});

  const onSubmit = values => {
    axios.post(
      "https://cspt5-bw1-teamb-master.herokuapp.com/api/registration/",
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
        <h1>Sign Up For An Account:</h1>
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
          <input
            name="password1"
            placeholder="confirm password"
            required
            ref={register}
          />
        </Form.Field>
        <Form.Field>
          <label>Confirm Password</label>
          <input
            name="password2"
            placeholder="password"
            required
            ref={register}
          />
        </Form.Field>
        <Button type="submit">Sign Up</Button>
      </Form>
      <h3>Already have an account?</h3>
      <Link to="/signin">
        <Button>Sign In</Button>
      </Link>
    </>
  );
};
export default Signup;
