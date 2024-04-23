//Selecting required elements //
const startBtn = document.querySelector('.start-btn');
const infoBox = document.querySelector('.info-box');
const exitBtn = document.querySelector('.buttons .quit');
const continueBtn = document.querySelector('.buttons .restart');
const quizBox = document.querySelector('.quiz-box');
const resultBox = document.querySelector('.result.box');
const optionList = document.querySelector('.option-list');
const timeLine = document.querySelector('.timer .time-line');
const timeText = document.querySelector('.timer .time-left-text');
const timeCount = document.querySelector('.timer .timer-sec');

//If start button is clicked//
startBtn.onclick = () => {
 infoBox.classList.add('activeInfo'); //show info box//
}

//If exit button is clicked//
exitBtn.onclick = () => {
    infoBox.classList.remove('activeInfo'); //hide info box//
}

//If continue button is clicked//
continueBtn.onclick = () => {
    infoBox.classList.remove('activeInfo'); //hide info box//
    quizBox.classList.add('activeQuiz'); //show quiz box //
    showQuestions(0); //calling show questions function //
    queCounter(1); //passing 1 parameter to QueCounter
    startTimer(15); //calling startTimer function
    startTimerLine(0); //calling startTimerLine function 
}

let timeValue = 15; //Time to answer each question//
let queCount = 0;
let queNumb = 1;
let userScore = 0;
let counter;
let CounterLine;
let widthValue = 0;

const restartQuiz = resultBox.querySelector('.buttons .restart');
const quitQuiz = resultBox.querySelector('.buttons .quit');

//if restart button is clicked//
restartQuiz.onclick = () => {
    quizBox.classList.add('activeQuiz');
    resultBox.classList.remove('activeResult');
    timeValue = 15;
    queCount = 0;
    queNumb = 1;
    userScore = 0;
    widthValue = 0;
    showQuestions(queCount); //calling show questions function//
    queCounter(queNumb); //passing queNumb value to queCounter//
    clearInterval(counter); //clear Counter
    clearInterval(CounterLine); //clear Counter Line
    startTimer(timeValue); //calling startTime function
    startTimerLine(widthValue); //calling startTimerLine function
    timeText.textContent = 'Time left'; // Change the text of timeText to Time left
    nextBtn.classList.remove('show'); //hide the next button
}

//if quit quiz button is clicked//
quitQuiz.onclick = () => {
    window.location.reload(); //reload the current window
}

const nextBtn = document.querySelector('footer .next-btn');
const queCounter = document.querySelector('footer .totalQue');

//if next Btn is clicked//
nextBtn.onclick = () => {
    if(queCount < quuestions.length -1){ //if question count is less than total question length
        queCount++; //increment the queCount value
        queNumb++; //increment the queNumb value
        showQuestions(queCount); //calling showQuestions function
        queCounter(queNumb); //passing the queNumb value to queCounter
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        startTimer(timeValue); //calling startTimer function
        startTimerLine(widthValue); //calling startTimerLine function
        timeText.textContent = 'Time left'; //change the Timetext to Time left
        nextBtn.classList.remove('show'); //hide the next button      
    } else {
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        showResult(); //calling showResult function
    }
}

//getting questions and options from array//
