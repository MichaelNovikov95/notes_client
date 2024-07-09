import { iNoteProps } from "../interfaces/interfaces";

const Note = ({ note, handleNoteClick, deleteNote }: iNoteProps) => {
  if (note) {
    return (
      <div className="note-item" onClick={() => handleNoteClick(note)}>
        <div className="notes-header">
          <button onClick={(e) => deleteNote(e, note._id)}>x</button>
        </div>
        <h2>{note.title}</h2>
        <p>{note.content}</p>
      </div>
    );
  }
};

export default Note;
