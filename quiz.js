// Path to your CSV file
const csvFilePath = './formatted_bible_quiz.csv'; // Replace with the actual path

// Global array to hold quiz questions
let quizData = [];

// Load and parse the CSV file
function loadQuizData() {
  Papa.parse(csvFilePath, {
    download: true,
    header: true, // Automatically uses column names as keys
    complete: function (results) {
      quizData = results.data;
      pickRandomQuestion(); // Show the first question
    },
    error: function (error) {
      console.error('Error loading CSV:', error);
    }
  });
}

// Pick a random question and display it
function pickRandomQuestion() {
  if (quizData.length === 0) {
    document.getElementById('question').innerText = 'No questions available!';
    return;
  }

  // Get a random question
  const randomIndex = Math.floor(Math.random() * quizData.length);
  const randomQuestion = quizData[randomIndex];

  // Display the question
  document.getElementById('question').innerText = randomQuestion.Question;

  // Display options
  const optionsContainer = document.getElementById('options');
  optionsContainer.innerHTML = ''; // Clear previous options

  // Add options as list items
  ['Option1', 'Option2', 'Option3', 'Option4'].forEach((optionKey) => {
    const optionElement = document.createElement('li');
    optionElement.innerText = randomQuestion[optionKey];
    optionElement.addEventListener('click', () => {
      checkAnswer(randomQuestion['Correct Answer'], randomQuestion[optionKey]);
    });
    optionsContainer.appendChild(optionElement);
  });
}

// Check if the selected answer is correct
function checkAnswer(correctAnswer, selectedAnswer) {
  if (correctAnswer === selectedAnswer) {
    
    alert('Correct!');
  } else {
    alert(`Wrong! The correct answer is: ${correctAnswer}`);
  }
}

// Event listener for the "Next Question" button
document.getElementById('next-question').addEventListener('click', pickRandomQuestion);

// Load the quiz data when the page loads
loadQuizData();
