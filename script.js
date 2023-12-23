
let currentQuestionIndex = 0;
let userScore = 0;

const categories = [
    {
        "category": "General Knowledge",
        "questions": [
            {
                "question": "Who wrote 'To Kill a Mockingbird'?",
                "options": ["Harper Lee", "George Orwell", "Jane Austen", "F. Scott Fitzgerald"],
                "answer": "Harper Lee"
            },
           
        ]
    },
    // more categories...
    {
        "category": "Mathematics",
        "questions": [
            {
                "question": "What is the value of pi (π) to two decimal places?",
                "options": ["3.14", "3.16", "3.18", "3.20"],
                "answer": "3.14"
            },
            // Add more math questions...
        ]
    },
    {
        "category": "Science",
        "questions": [
            {
                "question": "What is the chemical symbol for water?",
                "options": ["H2O", "CO2", "O2", "N2"],
                "answer": "H2O"
            },
            
        ]
    },
    {
        "category": "Electronics",
        "questions": [
            {
                "question": "What does LED stand for?",
                "options": ["Light Emitting Diode", "Long Electric Device", "Laser Emitting Detector", "Linear Electronic Driver"],
                "answer": "Light Emitting Diode"
            },
           
        ]
    }
    
];
console.log(categories.length)
function showTopicModal() {
    document.getElementById('topic-modal').style.display = 'block';
  
}

function closeTopicModal() {
    document.getElementById('topic-modal').style.display = 'none';
}
function startQuiz() {
    
    document.getElementById('home-page').style.display = 'none';
    document.getElementById('quiz-page').style.display = 'block';
    document.getElementById('vector').style.display = 'none';
    showTopicModal()
    
   
}
function showQuestion() {
    document.getElementById('topic-modal').style.display = 'none';

    const currentQuestion = categories[currentQuestionIndex].questions[currentQuestionIndex];

    document.getElementById('question').textContent = currentQuestion.question;

    document.getElementById('options-container').innerHTML = '';

    currentQuestion.options.forEach((option) => {
        const optionButton = document.createElement('button');
        optionButton.textContent = option;
        optionButton.classList.add('option-button');
        optionButton.addEventListener('click', handleOptionClick);
        document.getElementById('options-container').appendChild(optionButton);
    });

    // Always show the next button
    
   
}


function handleOptionClick(event) {
    if (event.target.tagName === 'BUTTON') {
        // Handle option click
        const selectedOption = event.target.textContent;
        
        // Check if the selected option is correct
        const correctAnswer = categories[currentQuestionIndex].questions[currentQuestionIndex].answer;
        if (selectedOption === correctAnswer) {
            userScore++;
        }

        // Show the next button
        document.getElementById('next-btn').style.display = 'block';
    }
}
function nextQuestion() {
    if (currentQuestionIndex < categories[0].questions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
        document.getElementById('next-btn').style.display = 'block';
    } else {
        showResults();
    }
}






function showResults() {
    // Hide the quiz page and show the results page
    document.getElementById('quiz-page').style.display = 'none';
    document.getElementById('results-page').style.display = 'block';

   
    document.getElementById('user-score').textContent = userScore;
}

function restartQuiz() {
    // Reset quiz variables and show the home page
    currentQuestionIndex = 0;
    userScore = 0;
    document.getElementById('results-page').style.display = 'none';
    document.getElementById('home-page').style.display = 'block';
}
