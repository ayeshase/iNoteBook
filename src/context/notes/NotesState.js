import React from "react";
import NotesContext from './NotesContext'

const NotesState = (props) =>{
    const state = {
        "name": "roomi",
        "class": "alevel"
    }
    return(
    <NotesContext.Provider  value={state}>
       {props.children}
    </NotesContext.Provider>
    )
}

export default NotesState;