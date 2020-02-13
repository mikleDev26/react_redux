import React from 'react';
import { connect } from 'react-redux';
import { removeNote } from '../../redux/actions/actions';

function NotesList(props) {

  const removeNote = (id) => props.removeNote(id);

  return (
    <div>
      <h3>Notes List</h3>
      <ul>
        {
          props.notes.map((note, idx) => (
            <li key={idx}>
              <b>{note.title}</b>
              <button onClick={() => removeNote(idx)}>X</button>
              <br />
               <span>{note.content}</span>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes
  };
};

const mapDispatchToprops = {
  removeNote: removeNote
} 

export default connect(mapStateToProps, mapDispatchToprops)(NotesList);
