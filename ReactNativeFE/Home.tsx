import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const questions = [
  {
    question: 'What is the capital of France?',
    answers: ['Paris', 'London', 'Berlin', 'Rome'],
    correctAnswer: 'Paris',
  },
  {
    question: 'What is the largest planet in our solar system?',
    answers: ['Earth', 'Jupiter', 'Mars', 'Saturn'],
    correctAnswer: 'Jupiter',
  },
  // Add more questions here
];

const shuffleArray = (array: any[]) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const Home: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questionsOrder, setQuestionsOrder] = useState<number[]>([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    setQuestionsOrder(shuffleArray([...Array(questions.length).keys()]));
  }, []);

  const handleAnswer = (answer: string) => {
    if (answer === questions[questionsOrder[currentQuestionIndex]].correctAnswer) {
      setScore(score + 1);
    }
    nextQuestion();
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setCurrentQuestionIndex(0);
      setQuestionsOrder(shuffleArray(questionsOrder));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{questions[questionsOrder[currentQuestionIndex]].question}</Text>
      {questions[questionsOrder[currentQuestionIndex]].answers.map((answer, index) => (
        <Button key={index} title={answer} onPress={() => handleAnswer(answer)} />
      ))}
      <Text style={styles.score}>Score: {score}</Text>
      {/* Add Leaderboard Component */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  question: {
    fontSize: 20,
    marginBottom: 20,
  },
  score: {
    marginTop: 20,
  },
});

export default Home;
