import React from 'react';
import notes from '../notes';
import Header from './Header'
import Footer from "./Footer";
import Note from './Note';

// function createNotes(noteItem) {
//   return <Note title={noteItem.title} content={noteItem.content} />;
// }

function App() {
  return (
    <div>
      <Header />
      {notes.map( noteItem => <Note title={noteItem.title} content={noteItem.content} />)}
      <Footer />
    </div>
  );
}

export default App;



