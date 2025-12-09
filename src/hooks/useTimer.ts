import { useState, useEffect } from "react";

const UseTimer = () => {
  const [timerName, setTimerName] = useState("");
  const [timeLeft, setTimeLeft] = useState(0);
  const [duration, setDuration] = useState(25);
  const [isRunning, setIsRunning] = useState(false);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      const timerId = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timerId);
    }
  }, [isRunning, timeLeft]);

  const startTimer = () => {
    setTimeLeft(duration * 60);
    setIsRunning(true);
    setIsStarted(true);
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const resumeTimer = () => {
    setIsRunning(true);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setIsStarted(false);
    setTimeLeft(0);
  };

  return {
    timerName,
    timeLeft,
    duration,
    isRunning,
    isStarted,
    setTimerName,
    setDuration,
    startTimer,
    pauseTimer,
    resumeTimer,
    resetTimer,
  };
};

export default UseTimer;
