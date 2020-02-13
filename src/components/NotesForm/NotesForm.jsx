import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addNote } from '../../redux/actions/actions';

function NotesForm(props) {
  const [note, setNote] = useState({title: '', connect: ''});

  const handleChange = (e) => {
    setNote({...note, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const {title, content} = note;
    props.addNote(title, content);
    setNote({title: '', content: ''});
  }

  return (
    <div>
      <h3>Add new note</h3>
      <form onSubmit={handleSubmit}>
        Title: <br />
        <input
          type="text"
          name="title"
          value={note.title}
          onChange={handleChange}
        />
        <br />
        Content: <br />
        <textarea
          name="content"
          value={note.content}
          onChange={handleChange}
        ></textarea>
        <br />
        <button type="submit">Add Note</button>
      </form>
    </div>
  );
}

export default connect(null, {addNote})(NotesForm)
