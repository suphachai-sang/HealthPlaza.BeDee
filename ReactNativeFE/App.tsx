import React, { useState, useEffect } from 'react';
import { Text, View, Button } from 'react-native';

const questions = [
  {
    question: 'What is the capital of France?',
    options: ['London', 'Paris', 'Berlin', 'Madrid'],
    correctAnswer: 'Paris',
  },
  {
    question: 'Who wrote Hamlet?',
    options: ['Shakespeare', 'Hemingway', 'Tolstoy', 'Dostoevsky'],
    correctAnswer: 'Shakespeare',
  },
  {
    question: 'What is the largest planet in our solar system?',
    options: ['Earth', 'Jupiter', 'Mars', 'Saturn'],
    correctAnswer: 'Jupiter',
  },
  {
    question: 'What is the chemical symbol for water?',
    options: ['H2O', 'CO2', 'NaCl', 'O2'],
    correctAnswer: 'H2O',
  },
  {
    question: 'Who painted the Mona Lisa?',
    options: ['Leonardo da Vinci', 'Pablo Picasso', 'Vincent van Gogh', 'Michelangelo'],
    correctAnswer: 'Leonardo da Vinci',
  },
  {
    question: 'What is the largest ocean on Earth?',
    options: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
    correctAnswer: 'Pacific Ocean',
  },
  {
    question: 'What is the powerhouse of the cell?',
    options: ['Nucleus', 'Ribosome', 'Mitochondria', 'Endoplasmic Reticulum'],
    correctAnswer: 'Mitochondria',
  },
  {
    question: 'Who developed the theory of relativity?',
    options: ['Isaac Newton', 'Albert Einstein', 'Galileo Galilei', 'Stephen Hawking'],
    correctAnswer: 'Albert Einstein',
  },
  {
    question: 'Which planet is known as the Red Planet?',
    options: ['Mars', 'Venus', 'Mercury', 'Neptune'],
    correctAnswer: 'Mars',
  },
  {
    question: 'What is the chemical symbol for gold?',
    options: ['Ag', 'Au', 'Fe', 'Pb'],
    correctAnswer: 'Au',
  },
  {
    question: 'Who was the first person to step on the moon?',
    options: ['Buzz Aldrin', 'Neil Armstrong', 'Yuri Gagarin', 'Michael Collins'],
    correctAnswer: 'Neil Armstrong',
  },
  {
    question: 'What is the smallest prime number?',
    options: ['1', '2', '3', '5'],
    correctAnswer: '2',
  },
  {
    question: 'Who is known as the "Father of Computer Science"?',
    options: ['Alan Turing', 'Bill Gates', 'Steve Jobs', 'Charles Babbage'],
    correctAnswer: 'Alan Turing',
  },
  {
    question: 'What is the chemical symbol for oxygen?',
    options: ['O', 'O2', 'H2O', 'CO2'],
    correctAnswer: 'O',
  },
  {
    question: 'Who painted the ceiling of the Sistine Chapel?',
    options: ['Leonardo da Vinci', 'Raphael', 'Vincent van Gogh', 'Michelangelo'],
    correctAnswer: 'Michelangelo',
  },
  {
    question: 'Which country is known as the Land of the Rising Sun?',
    options: ['China', 'South Korea', 'Japan', 'Thailand'],
    correctAnswer: 'Japan',
  },
  {
    question: 'What is the chemical symbol for carbon?',
    options: ['C', 'Ca', 'Co', 'Cu'],
    correctAnswer: 'C',
  },
  {
    question: 'Who wrote the novel "1984"?',
    options: ['George Orwell', 'J.K. Rowling', 'Ernest Hemingway', 'F. Scott Fitzgerald'],
    correctAnswer: 'George Orwell',
  },
  {
    question: 'What is the tallest mountain in the world?',
    options: ['Mount Everest', 'K2', 'Kangchenjunga', 'Lhotse'],
    correctAnswer: 'Mount Everest',
  },
  {
    question: 'Who is the Greek god of thunder?',
    options: ['Apollo', 'Zeus', 'Poseidon', 'Hades'],
    correctAnswer: 'Zeus',
  },
];


const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1);
  const [score, setScore] = useState(0);

  useEffect(() => {
    // Initialize with a random question when the component mounts
    generateRandomQuestion();
  }, []);

  const generateRandomQuestion = () => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    setCurrentQuestionIndex(randomIndex);
  };

  const handleAnswer = (selectedAnswer: string) => {
    const currentQuestion = questions[currentQuestionIndex];
    if (currentQuestion.correctAnswer === selectedAnswer) {
      setScore(score + 1);
    }
    // Generate a new random question
    generateRandomQuestion();
  };

  const renderOptions = () => {
    const currentQuestion = questions[currentQuestionIndex];
    return currentQuestion.options.map((option, index) => (
      <Button
        key={index}
        title={option}
        onPress={() => handleAnswer(option)}
      />
    ));
  };

  const renderQuestion = () => {
    if (currentQuestionIndex === -1) {
      return null; // No question to display yet
    }
    const currentQuestion = questions[currentQuestionIndex];
    return (
      <View>
        <Text>{currentQuestion.question}</Text>
        {renderOptions()}
      </View>
    );
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {currentQuestionIndex !== -1 ? (
        renderQuestion()
      ) : (
        <Text>Loading...</Text>
      )}
      <Text>Score: {score}</Text>
    </View>
  );
};

export default App;
