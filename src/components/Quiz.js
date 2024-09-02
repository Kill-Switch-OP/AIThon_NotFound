import React, { useState, useEffect } from 'react';
import { Card, Button, Form, Alert } from 'react-bootstrap';

const Quiz = () => {
  const questions = [
    {
      question: 'What is Ethereum?',
      options: [
        'A digital currency like Bitcoin',
        'A platform for decentralized applications',
        'A type of cloud storage',
        'A programming language',
      ],
      answer: 'A platform for decentralized applications',
    },
    {
      question: 'What technology underlies Ethereum?',
      options: [
        'Blockchain',
        'Artificial Intelligence',
        'Cloud Computing',
        'Quantum Computing',
      ],
      answer: 'Blockchain',
    },
    {
      question: 'What is the native cryptocurrency of the Ethereum network?',
      options: [
        'Ether',
        'Bitcoin',
        'Litecoin',
        'Ripple',
      ],
      answer: 'Ether',
    },
    {
      question: 'What is a smart contract in Ethereum?',
      options: [
        'A physical document signed with Ether',
        'A digital contract executed on the blockchain',
        'A legal agreement between parties',
        'A method for securing transactions',
      ],
      answer: 'A digital contract executed on the blockchain',
    },
    {
      question: 'What is Ethereum 2.0?',
      options: [
        'An upgrade to the Ethereum network to improve scalability and security',
        'A new cryptocurrency created by Ethereum',
        'A decentralized application on the Ethereum network',
        'A programming language for developing smart contracts',
      ],
      answer: 'An upgrade to the Ethereum network to improve scalability and security',
    },
    {
      question: 'What is the purpose of Ethereum’s gas?',
      options: [
        'To pay for transaction fees and computational work',
        'To create new Ether',
        'To store Ether securely',
        'To trade Ether on exchanges',
      ],
      answer: 'To pay for transaction fees and computational work',
    },
    {
      question: 'What is a Decentralized Autonomous Organization (DAO) in the context of Ethereum?',
      options: [
        'A central entity controlling the Ethereum network',
        'A type of cryptocurrency used for trading',
        'An organization run by smart contracts without central control',
        'A cloud storage service for Ethereum applications',
      ],
      answer: 'An organization run by smart contracts without central control',
    },
    {
      question: 'What is the Ethereum Virtual Machine (EVM)?',
      options: [
        'A machine that mines Ethereum',
        'A system that executes smart contracts and decentralized applications',
        'A virtual currency used in Ethereum transactions',
        'A platform for trading Ether',
      ],
      answer: 'A system that executes smart contracts and decentralized applications',
    },
    {
      question: 'What is a nonce in Ethereum transactions?',
      options: [
        'A type of encryption used in transactions',
        'A unique number to prevent double-spending',
        'A method for creating new Ether',
        'A tool for analyzing Ethereum blocks',
      ],
      answer: 'A unique number to prevent double-spending',
    },
    {
      question: 'What is the role of miners in Ethereum?',
      options: [
        'To validate transactions and add them to the blockchain',
        'To create new cryptocurrencies',
        'To store Ether securely',
        'To trade Ether on exchanges',
      ],
      answer: 'To validate transactions and add them to the blockchain',
    },
  ];

  const [quizStarted, setQuizStarted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState('');
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [feedback, setFeedback] = useState('');

  const startQuiz = () => {
    setQuizStarted(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selected === '') {
      setShowAlert(true);
      return;
    }
    setShowAlert(false);
    const correct = selected === questions[current].answer;
    setFeedback(correct ? 'Correct!' : `Incorrect! The correct answer is: ${questions[current].answer}`);
    if (correct) {
      setScore(score + 1);
    }
    setTimeout(() => {
      if (current + 1 < questions.length) {
        setSelected(''); // Reset the selected option before moving to the next question
        setFeedback('');
        setCurrent(current + 1);
      } else {
        setShowResult(true);
      }
    }, 1000); // 1-second delay before moving to the next question or showing the result
  };

  const restartQuiz = () => {
    setCurrent(0);
    setSelected('');
    setScore(0);
    setShowResult(false);
    setQuizStarted(false);
  };

  if (!quizStarted) {
    return (
      <Card className="text-center">
        <Card.Body>
          <Card.Title>Ethereum Quiz</Card.Title>
          <Card.Text>Test your knowledge about Ethereum. Click the button below to start the quiz!</Card.Text>
          <Button onClick={startQuiz} variant="primary">Start Quiz</Button>
        </Card.Body>
      </Card>
    );
  }

  if (showResult) {
    return (
      <Card>
        <Card.Body>
          <Card.Title>Quiz Result</Card.Title>
          <Alert variant="info">
            You scored {score} out of {questions.length}
          </Alert>
          <Button onClick={restartQuiz} variant="primary">Restart Quiz</Button>
        </Card.Body>
      </Card>
    );
  }

  return (
    <Card>
      <Card.Body>
        <Card.Title className='card-title-custom'>Etherium Quiz</Card.Title>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>{questions[current].question}</Form.Label>
            {questions[current].options.map((option, index) => (
              <Form.Check
                type="radio"
                name="quiz"
                label={option}
                value={option}
                key={index}
                checked={selected === option} // Ensure the radio button reflects the selected value
                onChange={(e) => setSelected(e.target.value)}
              />
            ))}
          </Form.Group>
          {showAlert && <Alert variant="warning">Please select an option.</Alert>}
          {feedback && <Alert variant={feedback.includes('Correct') ? 'success' : 'danger'}>{feedback}</Alert>}
          <Button variant="primary" type="submit" className="mt-3">
            {current + 1 === questions.length ? 'Finish Quiz' : 'Next Question'}
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default Quiz;