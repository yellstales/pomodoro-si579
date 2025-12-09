import TimerControls from "@/components/TimerControls";
import TimerDisplay from "@/components/TimerDisplay";
import TimerSetup from "@/components/TimerSetup";
import UseTimer from "@/hooks/useTimer";

export default function Index() {
  const {
    timerName,
    setTimerName,
    duration,
    setDuration,
    timeLeft,
    isRunning,
    isStarted,
    startTimer,
    pauseTimer,
    resumeTimer,
    resetTimer,
  } = UseTimer();

  return (
    <div className="background">
      <div className="plate">
        {!isStarted ? (
          <>
            <h1>Pomodoro Timer</h1>
            <TimerSetup
              timerName={timerName}
              duration={duration}
              onTimerNameChange={setTimerName}
              onDurationChange={setDuration}
              onStartTimer={startTimer}
            />
          </>
        ) : (
          <div>
            <TimerDisplay timeLeft={timeLeft} timerName={timerName} />
            <TimerControls
              isRunning={isRunning}
              timeLeft={timeLeft}
              onPause={pauseTimer}
              onResume={resumeTimer}
              onReset={resetTimer}
            />
          </div>
        )}
      </div>
      <div>Created by Yelnaz Rysbek (yrysbek) for SI579, Fall 2025</div>
    </div>
  );
}
