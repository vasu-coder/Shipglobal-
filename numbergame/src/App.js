
import './App.css';
import {useState} from'react';

function App() {
  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [attempts, setAttempts] = useState(0);
  const [guess, setGuess] = useState('');
  const [feedback, setFeedback] = useState('');
  const [isGameWon, setIsGameWon] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);

  const handleGuessChange = (event) => {
    setGuess(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const parsedGuess = parseInt(guess, 10);
    if (isNaN(parsedGuess) || parsedGuess < 1 || parsedGuess > 100) {
      setFeedback('Invalid input. Please enter a number between 1 and 100.');
      return;
    }
    setAttempts(attempts + 1);
    if (parsedGuess === randomNumber) {
      setFeedback(`Congratulations! You guessed the number in ${attempts + 1} attempts.`);
      setIsGameWon(true);
    } else if (parsedGuess < randomNumber) {
      setFeedback('Too low! Try again.');
    } else {
      setFeedback('Too high! Try again.');
    }
    if (attempts >= 4) {
      setIsGameOver(true);
      setFeedback(`Game over! The number was ${randomNumber}.`);
    }
  };

  const handleRestart = () => {
    setRandomNumber(Math.floor(Math.random() * 100) + 1);
    setAttempts(0);
    setGuess('');
    setFeedback('');
    setIsGameWon(false);
    setIsGameOver(false);
  };
  return (
    <div className="game-container">
      <h1>Number Guessing Game</h1>
      <p>Guess a number between 1 and 100</p>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={guess}
          onChange={handleGuessChange}
          placeholder="Enter your guess"
        />
        <button type="submit">Submit</button>
      </form>
      <div className="feedback">{feedback}</div>
      <p className="attempts">Attempts: {attempts}</p>
      {isGameWon ? (
        <button className="restart-btn" onClick={handleRestart}>
          Restart
        </button>
      ) : isGameOver ? (
        <p>The game is over. The number was {randomNumber}.</p>
      ) : null}
    </div>
  
  );
  
}

export default App;

