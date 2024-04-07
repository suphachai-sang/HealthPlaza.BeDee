import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';

interface Question {
  question: string;
  answers: string[];
  correctAnswerIndex: number;
}

const questions: Question[] = [
  {
    question: 'What is the capital of France?',
    answers: ['Berlin', 'Paris', 'Madrid', 'Rome'],
    correctAnswerIndex: 1,
  },
  // Add more questions here...
];

const generateRandomQuestion = (): Question => {
  const randomIndex = Math.floor(Math.random() * questions.length);
  return questions[randomIndex];
};

const App: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);

  useEffect(() => {
    setCurrentQuestion(generateRandomQuestion());
  }, []);

  const handleReload = () => {
    setCurrentQuestion(generateRandomQuestion());
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {currentQuestion && (
        <>
          <Text style={{ fontSize: 20, marginBottom: 20 }}>{currentQuestion.question}</Text>
          {currentQuestion.answers.map((answer, index) => (
            <Button
              key={index}
              title={answer}
              onPress={() => {
                if (index === currentQuestion.correctAnswerIndex) {
                  alert('Correct!');
                } else {
                  alert('Incorrect!');
                }
                handleReload();
              }}
            />
          ))}
        </>
      )}
      <Button title="Reload" onPress={handleReload} />
      <Leaderboard />
    </View>
  );
};

const Leaderboard: React.FC = () => {
  // Implement leaderboard functionality here
  return (
    <View style={{ marginTop: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Leaderboard</Text>
      {/* Display leaderboard content */}
    </View>
  );
};

export default App;
