"use client";
import React from "react";
import Input from "../input/Input";
import { useFormik } from "formik";
import BorderBox from "../templates/BorderBox";
import Text from "../text/Text";
import Button from "../button/Button";
import axios from "axios";

export default function SignUp() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: async (values) => {
      // use a post request .

      const { data } = await axios.post("/api/users", {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        password: values.password,
      });
      alert(JSON.stringify(data, null, 2));
    },
  });

  return (
    <form className="bg-white p-10" onSubmit={formik.handleSubmit}>
      <BorderBox appendClass="flex flex-col justify-center">
        <div className="text-center w-full">
          <Text variant="h3/400">Sign Up</Text>
        </div>
        <Input
          type="text"
          intent="active"
          name="firstName"
          label="First Name*"
          placeholder="Enter your first name"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          required
        />
        <Input
          type="text"
          intent="active"
          name="lastName"
          label="Last Name*"
          placeholder="Enter your last name"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          required
        />
        <Input
          type="email"
          intent="active"
          name="email"
          label="e-mail Address"
          placeholder="Enter your email address"
          value={formik.values.email}
          onChange={formik.handleChange}
          required
        />
        <Input
          type="Password"
          intent="active"
          name="password"
          label="Password"
          placeholder="Enter your password here!"
          value={formik.values.password}
          onChange={formik.handleChange}
          required
        />
        <Input
          type="Password"
          intent="active"
          name="confirmPassword"
          label="Confirm Password"
          placeholder="Re-enter your passowrd here!"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          required
        />

        <Button intent="secondary" length={"full"} justify={"center"}>
          Sign Up
        </Button>
        <div className="flex flex-col text-center my-2">
          <Text variant="p/400">Already have an account?.</Text>
          <Button
            size={"micro"}
            intent={"tertiary"}
            length={"full"}
            justify={"center"}
            // this button should toggle the model the from: Log In -> to:Sign Up
          >
            <span className="text-blue-500 underline">Log In</span>
          </Button>
        </div>
      </BorderBox>
    </form>
  );
}
