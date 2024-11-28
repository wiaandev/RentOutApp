import {Button, FormControlLabel, Grid2, Typography} from "@mui/material";
import Logo from '../assets/logo.svg';
import {Form} from "../Components/Form/Form.tsx";
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import {CheckboxWithLabel, Radio, RadioGroup, TextField} from "@stackworx/react-hook-form-mui";
import {PasswordTextField} from "../Components/Form/PasswordTextField.tsx";

interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    isRenter: boolean;
}


export const Register = () => {
    const defaultValues: FormValues = {
        email: '',
        firstName: '',
        confirmPassword: '',
        password: '',
        isRenter: false,
        lastName: ''
    }
        const form = useForm<FieldValues>({defaultValues});

        const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {
            console.log(data);
        }
    return (<Grid2 container size={12} justifyContent={'center'} flexDirection={'column'} alignItems={'center'}>
        <img src={Logo} alt={'logo'} width={100}/>
        <Typography variant={'h1'}>Register</Typography>


        <Form onSubmit={onSubmit} {...form}>
            <Grid2 size={12} container direction={'column'}>

                <Grid2 container size={'grow'}>
                    <TextField control={form.control} name={'firstName'} label={'First Name'}/>
                    <TextField control={form.control} name={'lastName'} label={'Last Name'}/>
                    <TextField control={form.control} name={'email'} label={'Email'}/>

                </Grid2>
            <PasswordTextField control={form.control} name={'password'} label={'Password'}/>
            <PasswordTextField control={form.control} name={'confirmPassword'} label={'Confirm Password'}/>
            <CheckboxWithLabel label='I want to list my place' name='isRenter'/>
            </Grid2>
            <Button type={'submit'} variant={'contained'}>Submit</Button>
        </Form>

    </Grid2>)
};