import { useState,useEffect } from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Banner from './app/components/Banner';
import { StoreProvider } from './app/screens/GlobalState';

import ImageAppButton from './app/components/ImageAppButton';
import BiScreen from './app/screens/BiScreen';
import MultipleChoiceScreen from './app/screens/MultipleChoiceScreen';
import MultipleOptionScreen from './app/screens/MultipleOptionScreen';
import OptionScreen from './app/screens/OptionScreen';
import RegisterScreen from './app/screens/RegisterScreen';

export default function App() {
  const [goals,setGoals]= useState(["testing"]);
  const [step,setStep]= useState(0);

  return (
    // <Banner/>
    // <ImageAppButton/>

    // <RegisterScreen/>
    // <OptionScreen/>
    // <MultipleOptionScreen/>
    // <MultipleChoiceScreen/>
  
    <StoreProvider value={{  goals,setGoals,step,setStep }}>

      <BiScreen/>
    </StoreProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
