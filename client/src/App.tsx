import React, { useState, useEffect } from 'react';
import './App.css';

// Modern functional component with hooks
const HelloWorld: React.FC<{ message?: string }> = ({ message = "Hello World!" }) => {
  const [greeting, setGreeting] = useState(message);
  const [count, setCount] = useState(0);

  // useEffect hook for side effects (replaces componentDidMount)
  useEffect(() => {
    console.log("Component has mounted!");
  }, []);

  const changeMessage = () => {
    const newMessage = greeting === "Hello World!" ? "What is up!" : "Hello World!";
    setGreeting(newMessage);
  };

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Modern React with TypeScript</h1>
        
        {/* Data-driven UI with state */}
        <div style={{ margin: '20px 0' }}>
          <h2>{greeting}</h2>
          <button onClick={changeMessage} style={{ margin: '10px' }}>
            Change Greeting
          </button>
        </div>

        {/* Counter example */}
        <div style={{ margin: '20px 0' }}>
          <h3>Counter: {count}</h3>
          <button onClick={incrementCount} style={{ margin: '10px' }}>
            Increment
          </button>
        </div>

        {/* Props demonstration */}
        <div style={{ margin: '20px 0' }}>
          <h3>Props Example:</h3>
          <p>Message from props: {message}</p>
        </div>

        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default HelloWorld;
