let users = []; //temporary storage for users

//storage for questions
let questions = [
    {
        id: 1, 
        question: "your question goes here", 
        options: [
            {id: 1, text: "strongly agree", value: 1},
            {id: 2, text: "agree", value: 2},
            {id: 3, text: "neutral", value: 3},
            {id: 4, text: "disagree", value: 4},
            {id: 5, text: "strongly disagree", value: 5},
        ],
    },
    //other questions and scenarios will go here 
];

module.exports = {users, questions};