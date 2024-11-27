import {Button, FormControlLabel, Grid2, Typography} from "@mui/material";
import Logo from '../assets/logo.svg';
import {Form} from "../Components/Form/Form.tsx";
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import {Radio, RadioGroup, TextField} from "@stackworx/react-hook-form-mui";
import {PasswordTextField} from "../Components/Form/PasswordTextField.tsx";

interface FormValues {
    email: string;
    password: string;
    confirmPassword: string;
    profileType: {
        renter: boolean;
        rentee: boolean;
    }
}


export const Register = () => {
    const defaultValues = {
        email: '',
    }
        const form = useForm<FieldValues>({defaultValues});

        const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {
            console.log(data.email);
        }
    return (<Grid2 container size={12} justifyContent={'center'} flexDirection={'column'} alignItems={'center'}>
        <img src={Logo} alt={'logo'} width={100}/>
        <Typography variant={'h1'}>Register</Typography>


        <Form {...form} onSubmit={onSubmit}>
            <TextField control={form.control} name={'email'} label={'Email'}/>
            <PasswordTextField control={form.control} name={'password'} label={'Password'}/>
            <RadioGroup name={'profileType'}>
                <FormControlLabel label={'I am renting'} control={<Radio control={form.control}/>}/>
                <FormControlLabel label={'I am buying'} control={<Radio control={form.control}/>}/>
            </RadioGroup>
            <Button type={'submit'} variant={'contained'}>Submit</Button>
        </Form>

    </Grid2>)
};