import React from 'react';
import './App.css';

import Card from './Components/Card/Card';

const recentReadBooks = [
  { title: 'The Launch Pad', src: ''},
  { title: 'E-Boys' , src:''},
  { title: '7 Powers' , src:''},
  { title: 'The black Swan' , src:''},
  { title: 'The Masters of Private Equity' , src:''},
  { title: 'Crossing the Chasm' , src:''},
  { title: 'Range' , src:''},
  { title: 'What You Do Is Who You Are' , src:''},
  { title: 'That Will Never Work' , src:''},
]

const currentReading = [
  { title: 'Lifespan', src: ''},
  { title: 'Superintelligence', src: ''},
  { title: 'Liar\'s Poker', src: ''},
  { title: 'Meet You in Hell', src: ''}
]

const favAuthors = [
  { title:'Randall E. Stross', src:''},
  { title:'Michael Lewis', src:''},
  { title:'Walter Isaacson', src:''},
  { title:'Ben Horowitz', src:''},
  { title:'Adam Grant', src:''}
]

const favPodcasts = [
  { title: 'This Week In Startups', src:''},
  { title: 'All in', src:''},
  { title: 'Acquired', src:''},
  { title: 'Acquired LP show', src:''},
  { title: 'Dry Powder', src:''},
  { title: 'Artificial Intelligence Podcast', subTitle:"Lex Fridman", src:''},
]

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
           {recentReadBooks.map(b => <Card {...b}/>)}
         </div>
      </div>
      <div>
         <header>
           <h2>Currently reading</h2>
         </header>
         <div className="BookList">
           {currentReading.map(b => <Card {...b}/>)}
         </div>
      </div>
      <div>
         <header>
           <h2>Fav Authors</h2>
         </header>
         <div className="BookList">
           {favAuthors.map(b => <Card {...b}/>)}
         </div>
      </div>
      <div>
         <header>
           <h2>Fav Podcasts</h2>
         </header>
         <div className="BookList">
           {favPodcasts.map(b => <Card {...b}/>)}
         </div>
      </div>

    </div>
  );
}

export default App;
