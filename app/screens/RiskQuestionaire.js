import React, { useState,useContext } from "react";
import { FlatList, SafeAreaView, StatusBar,ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
//import AppText from '../components/AppText';
import Screen from '../components/Screen';
import AppButton from '../components/AppButton';
import StoreContext from './GlobalState'
import Questionaire from '../components/Questionaire';
import GuazBackContainer from '../components/GuazBackContainer';
//import Card from '../components/Card';
import {riskQuestions} from './supportingfiles/dummydata';
import RiskAssessmentResult from '../components/RiskAssessmentResult';
// import Header from "../components/Header";


const questionData =riskQuestions; 
  
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
    },
  ];
  
  const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
      <Text style={[styles.title, textColor]}>{item}</Text>
    </TouchableOpacity>
  );

function RiskQuestionaire({navigation},props) {

  const contextData = useContext(StoreContext);

  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
    const [selectedId, setSelectedId] = useState(null);
    const [questionId, setquestionId] = useState(0);
    const [riskProfile, setRiskProfile] = useState([]);
    const handlepress=async(id,item)=> {
        setSelectedId(id);
        setSelectedOption(item);
       
  //       if(questionId<questionData.length){
  // // setquestionId(questionId+1);
  //       }else{
  //         console.log("Risk Profile",)
  //         alert("no moreQuest");
    
  //       }
  
    }
    const handleNext=async()=> {
let riskresponse={
  QId:questionData[questionId].QId,
  weightage:questionData[questionId].Weightage,
  option:selectedOption

}
let tempRisk= riskProfile;
tempRisk.push(riskresponse);
setRiskProfile(tempRisk);
  
          if(questionId<questionData.length-1){
 setquestionId(questionId+1);
      }else{
        alert("no moreQuest");
        calculateRiskScore(riskProfile);
       // console.log("RisdResponse",riskProfile);
     //   navigation.navigate('CreateNewPotScreen');
      }
    
  }
  async function calculateRiskScore(profile){
    let score=0;
    profile.forEach(element => {
      score+=parseFloat(element.option.QuizValue)*parseFloat(element.weightage)/100;
      
    });
console.log("RiskScore",score);
  } 
  const renderItem = ({ item,index }) => {
    const backgroundColor = index === selectedId ?  "#104B7D":"#5E88A2";
    const color = index === selectedId ? 'white' : 'black';



    return (
      <Item
      item={item.Quizlable}
      onPress={() => handlepress(index,item)}
      backgroundColor={{ backgroundColor }}
      textColor={{ color }}
      />
    );
  };

    return (
      <Screen>
     
        
        <GuazBackContainer/>

         {(showResult)?
            <RiskAssessmentResult navigation={navigation}/> :<Questionaire setShowResult={setShowResult}/>
         }
        </Screen>
    );
}

const styles = StyleSheet.create({
  text:{
    fontSize: 22,
    top: 8,
    width: '90%',
    alignSelf: 'center'
  },
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      backgroundColor: 'red'
    },
    title: {
      fontSize: 22,
    },
    Button:{
      position: 'absolute',
      bottom: 10,
      width: '100%',
    },
  });

export default RiskQuestionaire;
