import React, { useState, useContext } from 'react'

import NotesContext from '../context/notes-context'

const AddNoteForm = () => {
  const { dispatch } = useContext(NotesContext)

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const addNote = (e) => {
    e.preventDefault()

    dispatch({ type: 'ADD_NOTE', note: { title, body } })

    setTitle('')
    setBody('')
  }

  return (
    <>
      <p>Add Note</p>
      <form onSubmit={addNote}>
        <label htmlFor="title">Title</label>
        <input
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="body">Body</label>
        <textarea
          name="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button>Add Note</button>
      </form>
    </>
  )
}

export default AddNoteForm
