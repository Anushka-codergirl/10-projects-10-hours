const quizData = [
    {
        question: "Which best describes how I was as a child?",
        a: "Competitive",
        b: "Often getting into trouble",
        c: "On time with homework and a good student",
        d: "Easy-going",
        correct: "c"
    },
    {
        question: "What is my favorite musical genres?",
        a: "Jazz",
        b: "Pop music",
        c: "Heavy metal",
        d: "Hip hop music",
        correct: "a"
    },
    {
        question: "Which best describes my style?",
        a: "Free spirit",
        b: "Bold",
        c: "Minimal ",
        d: "Casual",
        correct: "b"
    },
    {
        question: "Which statement best describes my personality?",
        a: "I’m a renaissance gal",
        b: "I’m a born performer",
        c: "I speak my mind",
        d: "none of the above",
        correct: "b"
    },
    {
        question: "What is my kryptonite?",
        a: "Procrastination",
        b: "Perfectionism",
        c: "Self-doubt",
        d: "Lack of follow-through",
        correct: "d"
    },
    {
        question: "What font style do you like most?",
        a: "Modern and clean",
        b: "Classic editorial",
        c: "Handwriting",
        d: "Curly cursive",
        correct: "c"
    },
    {
        question: "What I most likely to eat after a stressful day?",
        a: "Whatever I would usually eat",
        b: "My favorite treat food",
        c: "Something delicious that will make me feel good",
        d: "Everything in sight",
        correct: "c"
    },
    {
        question: "How do I feel about spending time alone?",
        a: "I don’t like spending time alone",
        b: "I enjoy spending time alone sometimes",
        c: "I love spending time by myself",
        d: "none of the above",
        correct: "a"
    },
    {
        question: "If I could live anywhere, where would I live?",
        a: "New York – fast-paced, place for me to shine, and competitive",
        b: "Los Angeles – creative, enlightening, inspirational",
        c: "India – architectural haven, precision, and history galore",
        d: "none of the above",
        correct: "b"
    },
    {
        question: "When do I have the best energy?",
        a: "7am-12pm",
        b: "4am-10pm",
        c: "6pm-Midnight",
        d: "Midnight-6am",
        correct: "a"
    },
    {
        question: "What is my favorite social media network?",
        a: "Instagram",
        b: "Twitter",
        c: "Facebook",
        d: "LinkedIn",
        correct: "a"
    },
    {
        question: "Which best describes your current pricing strategy? ",
        a: "I’m expensive but worth it",
        b: "Middle-of-the-road pricing",
        c: "I don’t feel confident charging a lot",
        d: "I want to charge more",
        correct: "c"
    },
    {
        question: "What I like to do in free Time?",
        a: "Sleeping",
        b: "Movie",
        c: "Reading Books",
        d: "Shopping",
        correct: "a"
    },
    {
        question: "What is my Birthday Month?",
        a: "January",
        b: "June",
        c: "July",
        d: "none of the above",
        correct: "c"
    },
    {
        question: "What color palette do you like most?",
        a: "Earthy neutrals",
        b: "Retro vibes",
        c: "Blissful skies",
        d: "Arise and shine",
        correct: "c"
    }
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

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
        if (answerEl.checked) {
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
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});
