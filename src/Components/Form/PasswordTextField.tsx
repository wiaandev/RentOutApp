import {IconButton, InputAdornment} from '@mui/material';
import {Visibility, VisibilityOff} from '@mui/icons-material';
import {MouseEvent, useState} from 'react';
import {TextField, TextFieldProps} from '@stackworx/react-hook-form-mui';
import {FieldValues, Path} from 'react-hook-form';

export const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/;

export function PasswordTextField<
    TFieldValues extends FieldValues,
    TName extends Path<TFieldValues>,
>({label, name, rules}: TextFieldProps<TName, TFieldValues>) {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <TextField
            type={showPassword ? 'text' : 'password'}
            label={label}
            name={name}
            slotProps={{
                input: {
                    endAdornment: (
                        <InputAdornment position='end' sx={{mr: 1}}>
                            <IconButton
                                aria-label='toggle password visibility'
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge='end'
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    ),
                },
            }}
            rules={rules}
        />
    );
}
