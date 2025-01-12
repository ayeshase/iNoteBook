import  { React, useContext } from 'react';
import NoteContext from '../context/notes/NotesContext';
import UserNote from './UserNote';


const Notes = () => {
    const context = useContext(NoteContext);
    const {notes, setNotes} = context;
  return (
    <div className='row my-3'>
        <h1 className='my-3'>Your Notes</h1>
    {notes.map((notes)=>{
      return <UserNote notes={notes} />

    })}
    </div>
  )
}

export default Notes