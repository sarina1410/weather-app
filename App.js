import React from 'react';
import Weather from './Weather'; // Assuming Weather component is in the same directory as App.js

function App() {
  return (
    <div className="App">
      <header>
        <h1>Weather App</h1>
      </header>
      <main>
        <Weather />
      </main>
      <footer>
        <p>Copyright © {new Date().getFullYear()} Weather App</p>
      </footer>
    </div>
  );
}

export default App;


