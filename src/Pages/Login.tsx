import {Button, Grid2} from "@mui/material";
import React from 'react';
import {Form} from "../Components/Form/Form.tsx";
import { TextField } from "@stackworx/react-hook-form-mui";
import {SubmitHandler, useForm} from "react-hook-form";
import {PasswordTextField} from "../Components/Form/PasswordTextField.tsx";
import {graphql, useMutation} from "react-relay";
import {LoginMutation} from "./__generated__/LoginMutation.graphql.ts";
import {useAuthContext} from "../Context/AuthContext.tsx";
import {Navigate} from "react-router-dom";

type FormValues = {
    email: string;
    password: string;
}

export const Login: React.FC = () => {
    const {authenticated, setAuthenticated, setInitialized} = useAuthContext();
    const [mutate] = useMutation<LoginMutation>(graphql`
        mutation LoginMutation($input: LoginInput!){
            login(input: $input){
                user {
                    id
                }
            }
        }
    `)

    const form = useForm<FormValues>();

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        mutate({variables: {
            input: {
                email: data.email,
                password: data.password,
            },
            }, onCompleted: () => {
            setAuthenticated(true);
                setInitialized(false);
            }, onError: (err) => {
            console.log(err);
            }})
    }
    if (authenticated) {
        return <Navigate to='/listings' />;
    }

    return (
        <Grid2>
            <Form {...form} onSubmit={onSubmit}>
                <TextField name={'email'} label={'Email'}/>
                <PasswordTextField name={'password'} label={'Password'}/>
                <Button type={'submit'} variant={'contained'}>Login</Button>
            </Form>
        </Grid2>
    );
};
