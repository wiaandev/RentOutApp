import React from 'react';
import {
    FieldValues,
    FormProvider,
    FormProviderProps,
    SubmitHandler,
} from 'react-hook-form';
import {useCancellationPrompt} from '../../Hooks/useCancellationPrompt.ts';
import Grid2 from '@mui/material/Grid2';
import {Alert} from '@mui/material';

interface Props<TFormValues extends FieldValues>
    extends FormProviderProps<TFormValues>
{
    warnUnsavedChanges?: boolean;
    children: React.ReactNode;
    onSubmit: SubmitHandler<TFormValues>;
}

export function Form<TFormValues extends FieldValues = FieldValues>({
                                                                        children,
                                                                        onSubmit,
                                                                        warnUnsavedChanges = true,
                                                                        ...props
                                                                    }: Props<TFormValues>) {
    const {formState} = props;
    const {errors, isDirty, isSubmitted, isSubmitting} = formState;

    useCancellationPrompt({
        when: isDirty && !isSubmitted && !isSubmitting && warnUnsavedChanges,
        message: 'You have unsaved changes. Are you sure you want to leave?',
    });

    return (
        <Grid2
            height={'100%'}
            display='flex'
            flexDirection='column'
            size={12}
        >
            <Grid2
                flexGrow={1}
                overflow='auto'
            >
                <FormProvider {...props}>
                    <form
                        onSubmit={props.handleSubmit(onSubmit)}
                        style={{
                            height: '100%',
                            overflow: 'auto',
                            paddingTop: '8px',
                            paddingBottom: '8px',
                        }}
                    >
                        {children}
                    </form>
                </FormProvider>
            </Grid2>
            {errors && errors.root?.['serverError']
                && (
                    <Grid2
                        minHeight='50px'
                        maxHeight='100px'
                        overflow='auto'
                    >
                        <Alert
                            variant={'outlined'}
                            severity={'error'}
                            style={{whiteSpace: 'pre-wrap'}}
                        >
                            {errors.root?.['serverError'].message}
                        </Alert>
                    </Grid2>
                )}
        </Grid2>
    );
}
