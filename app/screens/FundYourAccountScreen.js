import React from 'react';

import * as Yup from 'yup';

import { View, StyleSheet, ScrollView } from 'react-native';

import AppText from '../components/AppText';
import Screen from '../components/Screen';
import { AppForm, AppFormField, AppFormPassword, SubmitButton } from '../forms';
import GuazBackContainer from '../components/GuazBackContainer';

const validationSchema = Yup.object().shape({
    creditCardNumber: Yup.string().required().label("Credit Card Number"),
    nationality: Yup.string().required().email().label("Nationality"),
    address: Yup.string().required().label("Address"),
    country: Yup.string().required().label("Country"),
});


function FundYourAccountScreen(props) {


    const Next=(values)=>{
        console.log(values);
    }   
  return (
    <Screen>
        <GuazBackContainer/>
        <ScrollView>
        <AppText style={styles.header}>Fund your Account</AppText>
            <AppForm
                initialValues={{ creditCardNumber: '', nationality:'',  address: '',  country: '' }}
                onSubmit={values => Next(values)}
                validationSchema={validationSchema}
            >
                <AppFormField
                    autoCapitalize='none'
                    autoCorrect={false}
                    icon='credit-card-outline'
                    keyboardType='Numeric'
                    name='creditCardNumber'
                    placeholder='Credit Card Number'
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

export default FundYourAccountScreen;