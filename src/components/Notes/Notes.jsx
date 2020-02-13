import React from 'react'
import NotesForm from '../NotesForm/NotesForm'
import NotesList from '../NotesList/NotesList'

export default function Notes() {
  return (
    <div className="notes">
      <h1>React Redux Notes</h1>
      <NotesForm />
      <hr />
      <NotesList />
    </div>
  )
}
