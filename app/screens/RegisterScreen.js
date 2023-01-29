import React from 'react';

import * as Yup from 'yup';

import { View, StyleSheet, ScrollView } from 'react-native';

import AppText from '../components/AppText';
import Screen from '../components/Screen';
import { AppForm, AppFormField, AppFormPassword, SubmitButton } from '../forms';
import Banner from '../components/Banner';
import BackContainer from '../components/BackContainer';

const validationSchema = Yup.object().shape({
    name: Yup.string().required().label("Name"),
    email: Yup.string().required().email().label("Email"),
    number: Yup.string().required().label("Number"),
    dob: Yup.string().required().label("Date of Birth"),
    password: Yup.string().required().min(4).label("Password"),
    retypePassword: Yup.string().required().min(4).label("Retype Password"),
});


function RegisterScreen(props) {


    const Register=(values)=>{
        console.log(values);
    }   
  return (
    <Screen>
        <BackContainer/>
        <Banner/>
        <ScrollView>
        <AppText style={styles.header}>User Registration</AppText>
            <AppForm
                initialValues={{ name: '', email:'',  number: '',  dob: '', password: '', retypePassword: '' }}
                onSubmit={values => Register(values)}
                validationSchema={validationSchema}
            >
                <AppFormField
                    autoCapitalize='none'
                    autoCorrect={false}
                    icon='account-outline'
                    keyboardType='email-address'
                    name='name'
                    placeholder='Name'
                    textContentType='emailAddress'
                />
                <AppFormField
                    autoCapitalize='none'
                    autoCorrect={false}
                    icon='email-outline'
                    name='email'
                    placeholder='Email/User ID'
                    textContentType='password'
                />
                <AppFormField
                    autoCapitalize='none'
                    autoCorrect={false}
                    icon='phone-outline'
                    keyboardType='numeric'
                    name='number'
                    placeholder='Cell Number'
                    textContentType='emailAddress'
                />
                <AppFormField
                    autoCapitalize='none'
                    autoCorrect={false}
                    icon='calendar-month-outline'
                    keyboardType='email-address'
                    name='dob'
                    placeholder='Date of Birth'
                    textContentType='emailAddress'
                />
                <AppFormPassword
                    autoCapitalize='none'
                    autoCorrect={false}
                    icon='lock-outline'
                    name='password'
                    placeholder='Password'
                    secureTextEntry={true}
                    textContentType='password'
                />
                <AppFormPassword
                    autoCapitalize='none'
                    autoCorrect={false}
                    icon='lock-outline'
                    name='retypePassword'
                    placeholder='Retype Password'
                    secureTextEntry={true}
                    textContentType='password'
                />
                <SubmitButton
                    title='Register'
                />
            </AppForm>
        </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
    container:{},
    header: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: '900',
    },
});

export default RegisterScreen;