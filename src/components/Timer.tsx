import { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else if (!isRunning && seconds !== 0) {
      clearInterval(interval!);
    }

    return () => clearInterval(interval!); // Cleanup on unmount
  }, [isRunning, seconds]);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Timer: {seconds}s</h1>
      <div className="flex gap-2">
        <button
          onClick={() => setIsRunning(true)}
          disabled={isRunning}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Start
        </button>
        <button
          onClick={() => setIsRunning(false)}
          disabled={!isRunning}
          className="px-4 py-2 bg-yellow-500 text-white rounded"
        >
          Pause
        </button>
        <button
          onClick={() => {
            setSeconds(0);
            setIsRunning(false);
          }}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
