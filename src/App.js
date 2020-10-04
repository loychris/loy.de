import React from 'react';
import './App.css';

import Card from './Components/Card/Card';

const BUSINESS             = 'Business';
const BIOGRAPHY            = 'Biography';
const STARTUPS             = 'Startups';
const BUSINESS_BIOGRAPHY   = 'Business Biography';
const MANAGEMENT           = 'Management';
const ECONOMICS            = 'Economics';
const PSYCHOLOGY           = 'Psychology';
const PERSONAL_DEVELOPMENT = 'Personal Development';
const CHINA                = 'China';


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

const allBooks = [
  { title: 'Liar\'s Poker', author: 'Michael Lewis', tags:[BUSINESS_BIOGRAPHY, BUSINESS] },
  { title: 'The Launch Pad', author: 'Randall E. Stross', tags:[BUSINESS_BIOGRAPHY, BUSINESS, STARTUPS]},
  { title: 'eBoys', author: 'Randall E. Stross', tags:[BUSINESS_BIOGRAPHY, BUSINESS, STARTUPS]},
  { title: 'Range', author: 'David Epstein', tags:['']},
  { title: 'What You Do Is Who You Are', author: 'Ben Horowitz', tags:[MANAGEMENT, PERSONAL_DEVELOPMENT]},
  { title: 'Crossing the Chasm', author: 'Geoffrey A. Moore', tags:[ECONOMICS]},
  { title: 'Talking to Strangers', author: 'Malcom Gladwell', tags:[PSYCHOLOGY, PERSONAL_DEVELOPMENT]},
  { title: 'Without Their Permission', author: 'Alexis Ohanian', tags:[BUSINESS, BUSINESS_BIOGRAPHY, BIOGRAPHY]},
  { title: 'Influence', author: 'Robert B. Cialdini', tags:[PSYCHOLOGY, PERSONAL_DEVELOPMENT]},
  { title: 'Wild Ride', author: 'Adam Lashinsky', tags:[STARTUPS, BUSINESS_BIOGRAPHY]},
  { title: 'We Are the Nerds', author: 'Christine Lagorio-Chafkin', tags:[BUSINESS_BIOGRAPHY, STARTUPS]},
  { title: 'Chaos Monkeys', author: 'Antonio Garcia Martinez', tags:[BUSINESS_BIOGRAPHY, BIOGRAPHY, STARTUPS]},
  { title: 'Shoe Dog', author: 'Phil Knight', tags:[BIOGRAPHY, BUSINESS_BIOGRAPHY]},
  { title: 'The Alliance: Managing Talent in the Networked Age', author: 'Reid Hoffman, Ben Casnocha, Chris Yeh', tags:[BUSINESS, MANAGEMENT, STARTUPS]},
  { title: 'Sprint', author: 'Jake Knapp, John Zeratsky, Braden Kowitz', tags:[MANAGEMENT]},
  { title: 'Trillion Dollar Coach', author: 'Eric Schmidt, Jonathan Rosenberg ,Alan Eagle', tags:[BIOGRAPHY, BUSINESS, MANAGEMENT]},
  { title: 'The Innovators', author: 'Walter Isaacson', tags:[BIOGRAPHY]},
  { title: 'Never Split the Difference', author: 'Chris Voss', tags:[PSYCHOLOGY, MANAGEMENT, PERSONAL_DEVELOPMENT]},
  { title: 'Thinking in Bets', author: 'Annie Duke', tags:[PERSONAL_DEVELOPMENT, MANAGEMENT]},
  { title: 'Hatching Twitter', author: 'Nick Bilton', tags:[STARTUPS, BUSINESS_BIOGRAPHY, BUSINESS]},
  { title: 'High Growth Handbook', author: 'Elad Gil', tags:[STARTUPS, MANAGEMENT]},
  { title: 'Finish', author: 'Jon Acuff', tags:[PERSONAL_DEVELOPMENT]},
  { title: 'Alibaba: The House That Jack Ma Built', author: 'Duncan Clark', tags:[STARTUPS, BUSINESS_BIOGRAPHY, BUSINESS. BIOGRAPHY, CHINA]},
  { title: 'AI Superpowers', author: 'Kai-Fu Lee', tags:[ECONOMICS, CHINA, BUSINESS, STARTUPS]},
  { title: 'Sell It Like Serhant', author: 'Ryan Serhant', tags:[REAL_ESTATE, BUSINESS, PERSONAL_DEVELOPMENT, BIOGRAPHY]},
  { title: 'The Messy Middle', author: 'Scott Belsky', tags:[BUSINESS_BIOGRAPHY, BUSINESS, MANAGEMENT, STARTUPS]},
  { title: 'Measure What Matters', author: 'John Doerr , Larry Page', tags:[MANAGEMENT, BUSINESS]},
  { title: 'The Inevitable', author: 'Kevin Kelly', tags:[BUSINESS, STARTUPS]},
  { title: 'The Hard Thing About Hard Things', author: 'Ben Horowitz', tags:[STARTUPS, MANAGEMENT, BUSINESS_BIOGRAPHY]},
  { title: 'Blink', author: 'Malcolm Gladwell', tags:[PSYCHOLOGY, PERSONAL_DEVELOPMENT]},
  { title: 'The Subtle Art of Not Giving a F*ck', author: 'Mark Manson', tags:[PERSONAL_DEVELOPMENT]},
  { title: 'Deal!', author: 'Jack Nasher', tags:[PSYCHOLOGY, BUSINESS, PERSONAL_DEVELOPMENT, MANAGEMENT]},
  { title: 'How to Turn Down a Billion Dollars', author: 'Billy Gallagher', tags:[BUSINESS_BIOGRAPHY, BIOGRAPHY, BUSINESS, STARTUPS]},
  { title: 'The Four', author: 'Scott Galloway', tags:[STARTUPS, ECONOMICS, BUSINESS]},
  { title: 'When: The Scientific Secrets of Perfect Timing', author: 'Daniel H. Pink', tags:[PERSONAL_DEVELOPMENT]},
  { title: 'Zero to One', author: 'Peter Thiel, Blake Masters', tags: [BUSINESS, STARTUPS, PERSONAL_DEVELOPMENT]},
  { title: 'The Upstarts', author: 'Brad Stone', tags:[BUSINESS_BIOGRAPHY, STARTUPS]},
  { title: '#BreakInto VC', author: 'Bradley Miles', tags:[BUSINESS, STARTUPS, ECONOMICS]},
  { title: 'Elon Musk', author: 'Ashlee Vance', tags:[BIOGRAPHY, BUSINESS_BIOGRAPHY, BUSINESS, STARTUPS]},
  { title: 'Angel: How to Invest in Technology Startups', author: 'Jason Calacanis', tags:[BUSINESS, STARTUPS]},
  { title: 'Mark Cuban', author: 'Sean Huff', tags:[BIOGRAPHY, BUSINESS_BIOGRAPHY, BUSINESS]},
  { title: 'How Not to Be Wrong: The Power of Mathematical Thinking', author: 'Jordan Ellenberg', tags:[PERSONAL_DEVELOPMENT]},
  { title: 'Deep Work', author: 'Cal Newport', tags:[PERSONAL_DEVELOPMENT]},
  { title: 'Überzeugt!', author: 'Jack Nasher', tags:[PERSONAL_DEVELOPMENT, BUSINESS, MANAGEMENT]},
  { title: 'Originals', author: 'Adam Grant, Sheryl Sandberg', tags:[PERSONAL_DEVELOPMENT, PSYCHOLOGY, STARTUPS, BUSINESS]},
  { title: 'Rocket Fuel', author: 'Gino Wickman, Mark C. Winters', tags:[STARTUPS, BUSINESS, PERSONAL_DEVELOPMENT]},
  { title: 'How to Master the Art of Selling', author: 'Tom Hopkins', tags:[PERSONAL_DEVELOPMENT, BUSINESS]},
  { title: 'Managing Oneself', author: 'Peter F Drucker', tags:[PERSONAL_DEVELOPMENT, MANAGEMENT]},
  { title: 'Thinking Fast and Slow', author: 'Daniel Kahneman', tags:[PSYCHOLOGY, PERSONAL_DEVELOPMENT]},
  { title: 'Das 1x1 des Immobilien Millionärs', author: 'Florian Roski', tags:[]},
  { title: 'What every BODY is saying', author: 'Joe Navarro', tags:[PSYCHOLOGY, PERSONAL_DEVELOPMENT]},
  { title: 'The Richest Man in Babylon', author: 'George S. Clason', tags:[]},
  { title: 'Think and Grow Rich', author: 'Napoleon Hill', tags:[]},
  { title: 'The 4-Hour Work Week', author: 'Timothy Ferriss', tags:[]},
  { title: 'All Marketers Are Liars', author: 'Seth Godin', tags:[]},
  { title: 'Rich Dad Poor Dad', author: 'Robert T. Kiyosaki', tags:[]},
  { title: 'The 7 Habits of Highly Effective People', author: 'Stephen R. Covey', tags:[]},

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
  { title: 'Syntax - Tasty Web Development Treats', src:''},
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
