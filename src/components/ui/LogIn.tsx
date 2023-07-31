"use client";
import React from "react";
import Input from "../input/Input";
import { useFormik } from "formik";
import BorderBox from "../templates/BorderBox";
import Text from "../text/Text";
import Button from "../button/Button";

export default function LogIn() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form className="bg-white p-10" onSubmit={formik.handleSubmit}>
      <BorderBox appendClass="flex flex-col justify-center">
        <div className="text-center w-full">
          <Text variant="h3/400">Log In</Text>
        </div>
        <Input
          type="email"
          name="email"
          intent="active"
          label="email*"
          placeholder="Enter your email address"
          // value={formik.values.email}
          // onChange={formik.handleChange}
          required
        />
        <Input
          type="Password"
          name="password"
          intent="active"
          label="password*"
          value={formik.values.password}
          onChange={formik.handleChange}
          placeholder="Enter your passowrd here!"
          required
        />
        <Button intent="secondary" length={"full"} justify={"center"}>
          Submit
        </Button>
        <div className="flex flex-col text-center my-2">
          <Text variant="p/400">Don&apos;t have an account? we got you.</Text>
          <Button
            size={"micro"}
            intent={"tertiary"}
            length={"full"}
            justify={"center"}
            // this button should toggle the model the from: Log In -> to:Sign Up
          >
            <span className="text-blue-500 underline">Sign up</span>
          </Button>
        </div>
      </BorderBox>
    </form>
  );
}
