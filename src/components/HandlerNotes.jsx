import React, { useState,  } from 'react';

const HandlerNotes = ({ children }) => {
  //const navigate =  useNavigate();
  const [notes, setNotes] = useState(() => {
    const storedNotes = sessionStorage.getItem('notes');
    return storedNotes ? JSON.parse(storedNotes) : [];
  });
  const addNote = (newNote) => {
    newNote.id = new Date().getTime(),
    // Actualizar sessionStorage
    sessionStorage.setItem('notes', JSON.stringify([...notes, newNote]));
    setNotes((prevNotes) => [...prevNotes, newNote]);
    window.location.href = "/";
  };
  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    // Actualizar sessionStorage
    sessionStorage.setItem('notes', JSON.stringify(updatedNotes));
    setNotes(updatedNotes);
    window.location.href = "/";
  };
  const getNoteById = (id) => {
    return notes.find((note) => note.id === id);
  };
  const modifyNote = (oldNoteId, newNote) => {
    const updatedNotes = notes.map((note) =>
      note.id === oldNoteId ? { ...note, ...newNote } : note
    );
    setNotes(() => {
      sessionStorage.setItem('notes', JSON.stringify(updatedNotes));
      return updatedNotes;
    });
    window.location.href = "/";
  };
  // Extender las funcionalidades a los hijos
  const extendedChildren = React.Children.map(children, (child) =>
    React.cloneElement(child, {
      notes,
      addNote,
      deleteNote,
      getNoteById,
      modifyNote,
      //navigate
    })
  );

  return <>{extendedChildren}</>;
};
export default HandlerNotes