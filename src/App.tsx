/* eslint-disable no-undef */
import { useEffect, useRef, useState } from 'react';

function App() {
  const timerIdRef = useRef<NodeJS.Timer | null | number>(null);
  const [timer, setTimer] = useState<number>(0);
  const [check, setCheck] = useState<boolean>(false);
  const startHandler = () => {
    if (!check) {
      setCheck(true);
      timerIdRef.current = setInterval(() => {
        setTimer((timer) => timer + 1);
      }, 1000);
    }
  };

  const stopHandler = () => {
    setCheck(false);
    clearInterval(timerIdRef.current as number);
  };
  const resetHandler = () => {
    setCheck(false);

    clearInterval(timerIdRef.current as number);
    setTimer(0);
  };

  useEffect(() => {
    return () => {
      clearInterval(timerIdRef.current as number);
    };
  }, []);
  return (
    <>
      <div className="App">
        <div className="container">
          <p>Giá trị của time: {timer}</p>
          <button onClick={startHandler}>Start</button>
          <button onClick={stopHandler}>Stop</button>
          <button onClick={resetHandler}>Reset</button>
        </div>
      </div>
    </>
  );
}

export default App;
