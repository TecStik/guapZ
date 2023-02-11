import React, { useState,useContext } from "react";
import { FlatList, SafeAreaView, StatusBar,ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
//import AppText from '../components/AppText';
import Screen from '../components/Screen';
import AppButton from '../components/AppButton';
import StoreContext from '../screens/GlobalState'
import GuazBackContainer from '../components/GuazBackContainer';
//import Card from '../components/Card';
import {riskQuestions} from '../screens/supportingfiles/dummydata';
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

function Questionaire({navigation,setShowResult},props) {
  const contextData = useContext(StoreContext);
  console.log("Total riskQuestions",questionData.length)

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
       let score= calculateRiskScore(riskProfile);
       console.log("RiskScore final",score);
       contextData.setRiskScore(score)
     setShowResult(true);
      }
    
  }
 function calculateRiskScore(profile){
    console.log("RisProfile",profile);
    let score=0;
    for(var i=0;i<profile.length;i++){
   let element=profile[i];
      score= score+(parseFloat(element.option.QuizValue)*parseFloat(element.weightage)/100);
      console.log("RiskScore",score);
    }
  

return Math.floor(score);
  } 
  const renderItem = ({ item,index }) => {
    const backgroundColor = index === selectedId ?  "#122D53":"#ffffff";
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
      
        <View style={styles.container}>
          <Text style={styles.text}>{questionData[questionId].Description}</Text>
           <ScrollView style={styles.container}>
      <FlatList
        data={questionData[questionId].Options}
        renderItem={renderItem}
        keyExtractor={(item, index) => index}
        extraData={selectedId}
      />
    </ScrollView>


  

    {/* <View style={styles.Button}> */}
        <AppButton 
          title='Continue'
          onPress={handleNext }
        
        />
        {/* </View> */}
        </View>
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
      paddingVertical: 20,
      paddingLeft: 30,
      marginVertical: 8,
      marginHorizontal: 16,
      borderRadius: 20,
      borderWidth: 1,
      borderColor: 'blue',
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

export default Questionaire;
