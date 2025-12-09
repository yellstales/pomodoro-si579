interface TimerSetupProps {
  timerName: string;
  duration: number;
  onTimerNameChange: (newName: string) => void;
  onDurationChange: (newDuration: number) => void;
  onStartTimer: () => void;
}

const TimerSetup = ({
  timerName,
  duration,
  onTimerNameChange,
  onDurationChange,
  onStartTimer,
}: TimerSetupProps) => {
  return (
    <div className="timer-setup">
      <div className="input-group">
        <label htmlFor="timer-name">Timer Name:</label>
        <input
          type="text"
          id="timer-name"
          value={timerName}
          onChange={(e) => onTimerNameChange(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="duration">Duration (minutes):</label>
        <input
          type="number"
          id="duration"
          value={duration}
          onChange={(e) => onDurationChange(Number(e.target.value))}
        />
      </div>
      <button className="start-button" onClick={onStartTimer}>
        Start Timer
      </button>
    </div>
  );
};

export default TimerSetup;
