import React from 'react';
import './App.css';

import Card from './Components/Card/Card';

function App() {
  return (
    <div className="App">
       <header>
         <h1>Christoph Loy</h1>
       </header>
       <div>
         <header>
           <h2>Most recent books I read</h2>
         </header>
         <div className="BookList">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
         </div>

      </div>
    </div>
  );
}

export default App;
