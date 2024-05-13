import React, { useState } from "react";
import NotesContext from './NotesContext'

const NotesState = (props) =>{
    const notesInitial = [
        {
            "_id": "663a69897e9758978517b32d",
            "user": "663a29b5f91e368b7a5e2d98",
            "title": "IMPORTANTANCE OF READING WIDELY AND READING A LOT Note 1.",
            "description": "This is the best way to build background knowledge in a wide variety of subjects. It is also one of the best (and easiest) ways to build vocabulary. Reading research has shown that if students read 1,000,000 words in a year's time, they will encounter and learn at least 1,000 new words  ",
            "tag": "her",
            "date": "2024-05-07T17:48:57.280Z",
            "__v": 0
          },
          {
            "_id": "663a69a67e9758978517b32f",
            "user": "663a29b5f91e368b7a5e2d98",
            "title": "IMPORTANTANCE OF READING WIDELY AND READING A LOT Note 2.",
            "description": "This is the best way to build background knowledge in a wide variety of subjects. It is also one of the best (and easiest) ways to build vocabulary. Reading research has shown that if students read 1,000,000 words in a year's time, they will encounter and learn at least 1,000 new words  Note 2 ",
            "tag": "her Note 2",
            "date": "2024-05-07T17:49:26.737Z",
            "__v": 0
          }
    ]
    const [notes, setNotes] = useState(notesInitial)    
    
    return(
    <NotesContext.Provider  value={{notes, notesInitial}}>
       {props.children}
    </NotesContext.Provider>
    )
}

export default NotesState;