import React, {} from 'react'
import { useContext } from 'react'
import NoteContext from '../context/notes/NotesContext'

const About = () => {
const a = useContext(NoteContext)
  
  return (
    <div>this is About he {a.name} is in class {a.class}</div>
  )
}

export default About;