import { Button, Grid2, Typography } from "@mui/material";
import Logo from "../assets/logo.svg";
import { Form } from "../Components/Form/Form.tsx";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { CheckboxWithLabel, TextField } from "@stackworx/react-hook-form-mui";
import { PasswordTextField } from "../Components/Form/PasswordTextField.tsx";
import { emailRegex } from "../Utils/constants.ts";
import {graphql, useMutation} from "react-relay";
import {RegisterMutation} from "./__generated__/RegisterMutation.graphql.ts";
import {MuiTelInput} from "mui-tel-input";
import React from "react";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  isRenter: boolean;
}

export const Register = () => {
  const [value, setValue] = React.useState('')

  const handleChange = (newValue: string) => {
    setValue(newValue)
  }
  const defaultValues: FormValues = {
    email: "",
    firstName: "",
    confirmPassword: "",
    password: "",
    isRenter: false,
    lastName: "",
  };
  const form = useForm<FieldValues>({ defaultValues });

  const [mutate, isPending] = useMutation<RegisterMutation>(graphql`
    mutation RegisterMutation($input: UserRegistrationInput!){
      userRegistration(input: $input){
        user{
          firstName
          lastName
          normalizedEmail
        }
      }
    }
  `)

  const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {
    console.log(data);
    mutate({variables: {
      input: {
        input: {
          email: data.email,
          confirmPassword: data.confirmPassword,
          firstName: data.firstName,
          lastName: data.lastName,
          password: data.password,
          phoneNumber: value ?? ""
        }
      }
      }, onCompleted: (newData) => {
      console.log(newData);
      }})
  };
  return (
    <Grid2
      container
      size={12}
      justifyContent={"center"}
      flexDirection={"column"}
      alignItems={"center"}
    >
      <img src={Logo} alt={"logo"} width={100} />
      <Typography variant={"h1"}>Register</Typography>

      <Form onSubmit={onSubmit} {...form}>
        <Grid2 size={12} container direction={"column"}>
          <Grid2 container size={"grow"}>
            <TextField
              control={form.control}
              name={"firstName"}
              label={"First Name"}
              rules={{
                required: "Required",
              }}
            />
            <TextField
              control={form.control}
              name={"lastName"}
              label={"Last Name"}
              rules={{ required: "Required" }}
            />
            <TextField
              control={form.control}
              name={"email"}
              label={"Email"}
              rules={{
                required: 'Required',
                pattern: {
                  value: emailRegex,
                  message: 'Enter a valid Email Address',
                },
              }}
            />
            <MuiTelInput value={value} onChange={handleChange}/>
          </Grid2>
          <PasswordTextField
            control={form.control}
            name={"password"}
            label={"Password"}
            rules={{ required: "Required",
              minLength: {
                value: 8,
                message:
                    "Password is too short - should be 8 characters minimum",
              },
              pattern: {
                value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/,
                message:
                    "Password must contain at least 8 characters, one uppercase, one lowercase, one number, and one special case character",
              },}}
          />
          <PasswordTextField
            control={form.control}
            name={"confirmPassword"}
            label={"Confirm Password"}
            rules={{required: "Required", validate: (value) => value === form.getValues().password || 'Passwords do not match'}}
          />
          <CheckboxWithLabel label='I want to list my place' name='isRenter' />
        </Grid2>
        <Button type={"submit"} variant={"contained"}>
          Submit
        </Button>
      </Form>
    </Grid2>
  );
};