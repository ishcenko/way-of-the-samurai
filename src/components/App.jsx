import React from 'react';
import './App.css';

const App = () => {
  const Header = () => {
    return (
      <div className="Link-header">
        <a href="#s">Home</a>
        <a href="#s">News Feed</a>
        <a href="#s">Message</a>
      </div>
    );
  };
  const Technologies = () => {
    return (
      <div>
        <ul className="Ul-li">
          <li>HTML</li>
          <li>CSS</li>
          <li>JS</li>
          <li>React</li>
          <li>NodeJS</li>
        </ul>
      </div>
    );
  };
  return (
    <div className="App">
      <Header />
      <Technologies />
    </div>
  );
};

export default App;
