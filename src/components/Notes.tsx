import Note from "./Note";

import { iNotesProps } from "../interfaces/interfaces";

const Notes = ({ notes, handleNoteClick, deleteNote }: iNotesProps) => {
  return (
    <>
      {notes.map((note) => (
        <Note
          key={note._id}
          note={note}
          handleNoteClick={handleNoteClick}
          deleteNote={deleteNote}
        />
      ))}
    </>
  );
};

export default Notes;
