import { useState } from 'react';
import { useEffect } from 'react';

function Timer({ onTimerExpired }) {
  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    // Define a function to decrement the timer
    const decrementTimer = () => {
      if (seconds > 0) {
        setSeconds((prevSeconds) => prevSeconds - 1);
      } else {
        // Call the onTimerExpired callback when the timer reaches 0
        onTimerExpired();
      }
    };

    // Set up an interval to decrement the timer every second
    const intervalId = setInterval(decrementTimer, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [seconds, onTimerExpired]); // Include seconds and onTimerExpired in the dependency array

  return (
    <div>
      <p>{seconds}seconds</p>
      {/* Add additional UI components or logic based on the timer state */}
    </div>
  );
}

export default Timer;