import React from 'react';

import * as Yup from 'yup';

import { View, StyleSheet, ScrollView } from 'react-native';

import AppText from '../components/AppText';
import Screen from '../components/Screen';
import { AppForm, AppFormField, AppFormPassword, SubmitButton } from '../forms';
import Banner from '../components/Banner';
import BackContainer from '../components/BackContainer';
import GuazBackContainer from '../components/GuazBackContainer';

const validationSchema = Yup.object().shape({
    passportNumber: Yup.string().required().label("Passport Number"),
    nationality: Yup.string().required().email().label("Nationality"),
    address: Yup.string().required().label("Address"),
    country: Yup.string().required().label("Country"),
    password: Yup.string().required().min(4).label("Password"),
    retypePassword: Yup.string().required().min(4).label("Retype Password"),
});


function AboutYourSelfScreen(props) {


    const Next=(values)=>{
        console.log(values);
    }   
  return (
    <Screen>
        <GuazBackContainer/>
        <ScrollView>
        <AppText style={styles.header}>Tell us more about yourself</AppText>
            <AppForm
                initialValues={{ passportNumber: '', nationality:'',  address: '',  country: '', password: '', retypePassword: '' }}
                onSubmit={values => Next(values)}
                validationSchema={validationSchema}
            >
                <AppFormField
                    autoCapitalize='none'
                    autoCorrect={false}
                    icon='passport'
                    keyboardType='email-address'
                    name='passportNumber'
                    placeholder='Passport Number'
                    textContentType='emailAddress'
                />
                <AppFormField
                    autoCapitalize='none'
                    autoCorrect={false}
                    icon='globe-model'
                    name='nationality'
                    placeholder='Nationality'
                    textContentType='password'
                />
                <AppFormField
                    autoCapitalize='none'
                    autoCorrect={false}
                    icon='home-variant-outline'
                    keyboardType='numeric'
                    name='address'
                    placeholder='Address'
                    textContentType='emailAddress'
                />
                <AppFormField
                    autoCapitalize='none'
                    autoCorrect={false}
                    icon='flag-outline'
                    keyboardType='email-address'
                    name='country'
                    placeholder='Country'
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
                    title='Next'
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

export default AboutYourSelfScreen;