interface TimerControlsProps {
  isRunning: boolean;
  timeLeft: number;
  onPause: () => void;
  onResume: () => void;
  onReset: () => void;
}

const TimerControls = ({
  isRunning,
  timeLeft,
  onPause,
  onResume,
  onReset,
}: TimerControlsProps) => {
  return (
    <div className="timer-controls">
      {isRunning && (
        <button className="pause-button" onClick={onPause}>
          Pause
        </button>
      )}
      {!isRunning && timeLeft > 0 && (
        <button className="resume-button" onClick={onResume}>
          Resume
        </button>
      )}
      <button className="reset-button" onClick={onReset}>
        Reset
      </button>
    </div>
  );
};

export default TimerControls;
