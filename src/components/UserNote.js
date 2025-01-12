import React from 'react'

const UserNote = (props) => {
    const { notes } = props;
    return (
        <div className='col-md-3'>
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">{notes.title ? notes.title.slice(0, 54) : ""}</h5>
                    <p class="card-text"> {notes.description ? notes.description.slice(0, 54) : ""}</p>
                </div>
            </div>
           
        </div>
    )
}

export default UserNote