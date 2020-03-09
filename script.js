$(document).ready(function(){
   
    $("#startButton").on('click', quiz.start);
    


var quiz = {
    
    correct: 0,
    incorrect: 0,
    currentQue: 0,
    timer: 30,
    timerStart: false,
    timerEl: '',

    questions:{
    question1: 'What color are the stars?',
    question2: 'What is the biggest star in the universe?',
    question3: 'What is the closest planet to Earth?',
    question4: 'What is the biggest planet in the milky way?'

    },
    answers: {
    answer1: ['(A) red', '(B) yellow', '(C) blue', '(D) all of the above'],
    answer2: ['(A) Sun', '(B) Uy Scuti','(C) Betelgeuse','(D) Moon'],
    answer3: ['(A) Mercury', '(B) Venus', '(C) Mars','(D) Jupiter'],
    answer4: ['(A) Earth', '(B) Neptune', '(C) Saturn', '(D) Jupiter']
    
    },

    correctAns: {
    correctAns1: 'D',
    correctAns2: 'B',
    correctAns3: 'A',
    correctAns4: 'D'

},
 
