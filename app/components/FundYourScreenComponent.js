import React from 'react';

import * as Yup from 'yup';

import { StyleSheet, ScrollView } from 'react-native';

import AppText from '../components/AppText';
import { AppForm, AppFormField, SubmitButton } from '../forms';


const validationSchema = Yup.object().shape({
    creditCardNumber: Yup.string().required().label("Credit Card Number"),
    nationality: Yup.string().required().email().label("Nationality"),
    address: Yup.string().required().label("Address"),
    country: Yup.string().required().label("Country"),
});

function FundYourScreenComponent(props) {

    const Next=(values)=>{
        console.log(values);
    }

    return (
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
    );
}

const styles = StyleSheet.create({
    container:{},
    header: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: '900',
        marginBottom: 50,
    },
});

export default FundYourScreenComponent;