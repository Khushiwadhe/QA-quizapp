const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris",
         "London",
          "Rome",
        "Berlin"],
        answer: "Paris"
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    },
    // Add more questions here
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const nextButton = document.getElementById('next-btn');
const submitButton = document.getElementById('submit-btn');
const resultElement = document.getElementById('result');
const scoreElement = document.getElementById('score');

function showQuestion(questionIndex) {
    const currentQ = questions[questionIndex];
    questionElement.textContent = currentQ.question;
    optionsElement.innerHTML = "";
    currentQ.options.forEach((option) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option");
        button.onclick = () => {
            if (option === currentQ.answer) {
                score++;
            }
            nextQuestion();
        };
        optionsElement.appendChild(button);
    });
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion(currentQuestion);
    } else {
        showResult();
    }
}

function showResult() {
    questionElement.style.display = "none";
    optionsElement.style.display = "none";
    nextButton.style.display = "none";
    submitButton.style.display = "inline";
    resultElement.style.display = "block";
    scoreElement.textContent = score;
}

nextButton.addEventListener('click', () => {
    nextQuestion();
});

submitButton.addEventListener('click', () => {
    showResult();
});

showQuestion(currentQuestion);
