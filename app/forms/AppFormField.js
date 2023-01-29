import React, { useState } from 'react';
import { useFormikContext } from 'formik';

import AppTextInput from '../components/AppTextInput';

import ErrorMessage from './ErrorMessage';
import AppText from '../components/AppText';
import { Text } from 'react-native';

function AppFormField({name, width, ...otherProps}) {

    const { setFieldTouched, handleChange, errors, touched } = useFormikContext();
    const {text, setText}= useState('');

    return (
        <>  
            <AppTextInput
                onBlur={()=> setFieldTouched(name)}
                onChangeText= { handleChange(name)}
                width={width}
                value={text}
                {...otherProps} 
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
            
        </>
    );
}

export default AppFormField; 