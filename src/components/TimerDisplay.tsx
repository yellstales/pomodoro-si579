interface TimerDisplayProps {
  timeLeft: number;
  timerName: string;
}

const TimerDisplay = ({ timeLeft, timerName }: TimerDisplayProps) => {
  const timeL = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const timeR = String(timeLeft % 60).padStart(2, "0");

  return (
    <div>
      <h1 className="timer-name">{timerName}</h1>
      <div className="timer-display">
        <span className="time-left">{timeL}</span>
        <span className="separator">:</span>
        <span className="time-right">{timeR}</span>
      </div>
    </div>
  );
};

export default TimerDisplay;
