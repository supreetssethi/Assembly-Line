import React from 'react';
import './App.css';
import AssemblyLine from './AssemblyLine';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Assembly Line</h1>
      </header>
      <main>
        <AssemblyLine stages={['Idea','Development','Testing','Deployment']}/>
      </main>
    </div>
  );
}

export default App;
