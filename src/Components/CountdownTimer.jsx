import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  // Initial time in seconds (1 hour)
  const initialTime = 60 * 70;
  const [timeRemaining, setTimeRemaining] = useState(initialTime);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime === 0) {
          clearInterval(timerInterval);
          // Perform actions when the timer reaches zero
          console.log('Countdown complete!');
          return 0;
        } else {
          return prevTime - 1;
        }
      });
    }, 1000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(timerInterval);
  }, []); // The empty dependency array ensures the effect runs only once on mount

  // Convert seconds to hours, minutes, and seconds
  const hours = Math.floor(timeRemaining / 3600);
  const minutes = Math.floor((timeRemaining % 3600) / 60);
  const seconds = timeRemaining % 60;

  return (
    <div className='d-flex flex-column gap-2 align-items-center justify-content-center p-3 align-content-center flex-grow-1'>
      <h3 style={{color:"white"}}>Time is running out!</h3>
      <div className='d-flex text-center'>
        <table>
          <tr>
            <td><h1 className='p-2 wx-1 rounded-3' style={{backgroundColor:"white"}}>{`${hours} `}</h1></td>
            <td><h1 className='p-2 wx-1 rounded-3' style={{backgroundColor:"white"}}>{` ${minutes} `}</h1></td>
            <td><h1 className='p-2 wx-1 rounded-3' style={{backgroundColor:"white"}}>{` ${seconds}`}</h1></td>
          </tr>
          <tr>
            <td><p className='px-2' style={{color:"white"}}>hours</p></td>
            <td><p className='px-2' style={{color:"white"}}>minutes</p></td>
            <td><p className='px-2' style={{color:"white"}}>seconds</p></td>
          </tr>

        </table>
        
        
        
      </div>
      
    </div>
  );
};

export default CountdownTimer;