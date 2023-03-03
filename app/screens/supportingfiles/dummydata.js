
export const returnObjective=[
    {objective:"Create your own plan",
    tenor:"How long do you expect this saving plan to continue",   
    futureValue:"How much do you expect to receice after successfully  completing your saving plan",
freqency:"would like to contribute monthly, quarterly, semi anuaaly or annually",
contribution:"what will be your periodic contribution"

},
    {objective:"Retirement Plan",
    tenor:"after how long you intend to retire?",   
    futureValue:"How much you would like to have upon retirement",
freqency:"would like to contribute monthly, quarterly, semi anuaaly or annually",
contribution:"what will be your periodic contribution"

},
{objective:"House Purchase Plan",
tenor:"What is your time frame",   
futureValue:"What is the  expected price of the house",
freqency:"would like to contribute monthly, quarterly, semi anuaaly or annually",
contribution:"what will be your periodic contribution"

}
];


   
   export const riskQuestions=[
    {
    "_id": "6323219da59ad5a271ebce38",
    "QId": "Q1",
    "Indicator": "age",
    "Description": "Please select your age bracket",
    "Options": [
    {
    "QuizValue": "1",
    "Quizlable": "<25",
    "QuizOptionKey": 3188
    },
    {
    "QuizValue": "2",
    "Quizlable": "<30",
    "QuizOptionKey": 2021
    }
    ],
    "Weightage": "50",
    "createdOn": "2022-09-15T12:59:09.873Z",
    "__v": 0
    },
    {
    "_id": "6349712b22fb16c7b85f049b",
    "QId": "Q2",
    "Indicator": "Health",
    "Description": "Which explains your Health Scenario the best",
    "Options": [
    {
    "QuizValue": "1",
    "Quizlable": "Healthy with Insurance",
    "QuizOptionKey": 4466
    },
    {
    "QuizValue": "2",
    "Quizlable": "healthy w/o Insurance",
    "QuizOptionKey": 7455
    },
    {
    "QuizValue": "3",
    "Quizlable": "Chronic Disease",
    "QuizOptionKey": 8081
    },
    {
    "QuizValue": "4",
    "Quizlable": "Mental Iealth Issues",
    "QuizOptionKey": 5235
    },
    {
    "QuizValue": "5",
    "Quizlable": "Disability",
    "QuizOptionKey": 6466
    },
    {
    "QuizValue": "6",
    "Quizlable": "Fatal Disease",
    "QuizOptionKey": 8242
    }
    ],
    "Weightage": "30",
    "createdOn": "2022-10-14T14:24:43.664Z",
    "__v": 0
    },
    {
    "_id": "634982abc12688495a93f81e",
    "QId": "oqeq",
    "Indicator": "dependents",
    "Description": "how many dependents do you have",
    "Options": [
    {
    "QuizValue": "1",
    "Quizlable": "0",
    "QuizOptionKey": 7197
    },
    {
    "QuizValue": "2",
    "Quizlable": "<2",
    "QuizOptionKey": 5831
    },
    {
    "QuizValue": "3",
    "Quizlable": "3",
    "QuizOptionKey": 8473
    },
    {
    "QuizValue": "4",
    "Quizlable": "4",
    "QuizOptionKey": 7860
    }
    ],
    "Weightage": "20",
    "createdOn": "2022-10-14T15:39:23.664Z",
    "__v": 0
    }
    ]
     export const funds=[
        {
            name:"GuapzLowRisk",
            description:"Islamic low risk fund",
            return:"12",
            riskScore:"4",
            icon:require('../../assets/js.png')
        }
,
{
            name:"GuapzLowRisk1",
            description:"Islamic low risk fund",
            return:"30",
            riskScore:"4",
            icon:require('../../assets/hbl.png')

        },
        {
            name:"GuapzLowRisk2",
            description:"Islamic low risk fund",
            return:"25",
            riskScore:"4",
            icon:require('../../assets/mcb.png')

        }
        ,
        {
            "name":"GuapzLowRisk2",
            "description":"Islamic low risk fund",
            "return":"15",
            "riskScore":"4",
            icon:require('../../assets/akd.png')

        }   
        

     ]
   
//    [
//     {
//         QId:1,
//         indicator:"Age",
//         description:"What Range best Describe your age bracket",
//         options:[{label:"<30", value:1},{label:"<35", value:2},{label:"<40", value:3},{label:"<45", value:4},{label:"<50", value:5}
//     ],
//     weightage:"25%"
//     }
//    ]
   