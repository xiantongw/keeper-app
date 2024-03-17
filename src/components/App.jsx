import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note.jsx";
// import notes from "../notes.js";
import CreateArea from "./CreatArea.jsx";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    console.log(notes);
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
