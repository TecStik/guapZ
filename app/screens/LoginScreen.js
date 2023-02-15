import React from 'react';

import * as Yup from 'yup';

import { View, StyleSheet, Dimensions, ScrollView} from 'react-native';

import AppText from '../components/AppText';
import Screen from '../components/Screen';
import { AppForm, AppFormField, AppFormPassword, SubmitButton } from '../forms';
import Banner from '../components/Banner';
import BackContainer from '../components/BackContainer';
import GuazBackContainer from '../components/GuazBackContainer';


const {height, width}= Dimensions.get('window');

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
});


function LoginScreen(props) {


    const Login=(values)=>{
        console.log(values);
        // navigation.navigate('Option Screen');
    }   
  return (
    <Screen>
        <GuazBackContainer/>
        <ScrollView>
        <View style={{height: height*0.2}}>
            <AppText style={styles.header}>User Login</AppText>
        </View>
            <AppForm
                initialValues={{ email:'',  password: '', }}
                onSubmit={values => Login(values)}
                validationSchema={validationSchema}
            >
                <AppFormField
                    autoCapitalize='none'
                    autoCorrect={false}
                    icon='email-outline'
                    name='email'
                    placeholder='Email/User ID'
                    textContentType='password'
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
                <SubmitButton
                    title='Login'
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

export default LoginScreen;