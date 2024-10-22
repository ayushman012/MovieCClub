// Quote of the Day
const quotes = [
    "May the Force be with you. - Star Wars",
    "I am Iron Man. - Avengers: Endgame",
    "To infinity and beyond! - Toy Story",
    "Why so serious? - The Dark Knight",
    "I'll be back. - The Terminator",
    "Life is like a box of chocolates. - Forrest Gump",
    "Just keep swimming. - Finding Nemo",
    "You can't handle the truth! - A Few Good Men",
    "Here's looking at you, kid. - Casablanca",
    "I feel the need... the need for speed! - Top Gun"
];

document.getElementById('quote-text').innerText = quotes[Math.floor(Math.random() * quotes.length)];

// Trivia Quiz
const quizQuestions = [
    {
        question: "What year was the first Harry Potter movie released?",
        choices: ["2000", "2001", "2002", "1999"],
        correctAnswer: 1
    },
    {
        question: "Who played Jack Dawson in the movie Titanic?",
        choices: ["Brad Pitt", "Leonardo DiCaprio", "Matt Damon", "Johnny Depp"],
        correctAnswer: 1
    },
    {
        question: "Which movie won the Oscar for Best Picture in 2020?",
        choices: ["1917", "Joker", "Parasite", "Once Upon a Time in Hollywood"],
        correctAnswer: 2
    },
    {
        question: "In The Matrix, what color is the pill that Neo takes?",
        choices: ["Red", "Blue", "Green", "Yellow"],
        correctAnswer: 0
    },
    {
        question: "What is the name of the kingdom where the 2013 animated movie Frozen is set?",
        choices: ["Narnia", "Arendelle", "Hogwarts", "Atlantis"],
        correctAnswer: 1
    },
    {
        question: "Who directed the movie Inception?",
        choices: ["Steven Spielberg", "James Cameron", "Christopher Nolan", "Quentin Tarantino"],
        correctAnswer: 2
    },
    {
        question: "Who directed the movie Titanic?",
        choices: ["James Cameron", "Steven Spielberg", "George Lucas", "Peter Jackson"],
        correctAnswer: 0
    }
];

let currentQuestion = 0;

function displayQuestion() {
    const questionElement = document.getElementById('question');
    const choicesElement = document.getElementById('choices');
    const question = quizQuestions[currentQuestion];
    
    questionElement.innerText = question.question;
    choicesElement.innerHTML = '';

    question.choices.forEach((choice, index) => {
        const li = document.createElement('li');
        li.innerText = choice;
        li.onclick = function() { checkAnswer(index); };
        choicesElement.appendChild(li);
    });
}

function checkAnswer(selectedIndex) {
    const correctIndex = quizQuestions[currentQuestion].correctAnswer;
    if (selectedIndex === correctIndex) {
        alert('Correct!');
    } else {
        alert('Wrong! The correct answer was: ' + quizQuestions[currentQuestion].choices[correctIndex]);
    }
}

function nextQuestion() {
    currentQuestion = (currentQuestion + 1) % quizQuestions.length;
    displayQuestion();
}

// Initialize the first question on load
displayQuestion();
