const quizData = [
    {
        question: 'How old is Florin',
        a : '10',
        b : '17',
        c : '26',
        d : '110',
        correct : 'c'
    },{
        question: 'What is the most used programming language in 2020?',
        a : 'Java',
        b : 'C',
        c : 'Python',
        d : 'JavaScript',
        correct : 'a'
    },{
        question: 'Who is the president of Nigeria?',
        a : 'Muritala',
        b : 'Jonatan',
        c : 'Awolowo',
        d : 'Muhamadu Buhari',
        correct : 'd'
    },{
        question: 'Wich year nigeria got their independence',
        a : '1999',
        b : '1960',
        c : '1964',
        d : '1980',
        correct : 'b'
    },
];

const quiz = document.getElementById ("quiz")
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById ("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById ("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz]; 

      questionEl.innerText = currentQuizData.question;
      a_text.innerText = currentQuizData.a;
      b_text.innerText = currentQuizData.b;
      c_text.innerText = currentQuizData.c;
      d_text.innerText = currentQuizData.d;

}

function getSelected() {
     let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });
    
    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // Check to see the answer 
   const answer = getSelected();

    console.log(answer);

   if (answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++;
       }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
        loadQuiz();
    } else {
        quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} question.</h2> <button onclick="location.reload()">Reload</button>`;
    }
   
    }
});