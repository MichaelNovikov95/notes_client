import { useState, useEffect } from "react";

import "./App.css";
import Notes from "./components/Notes";
import Form from "./components/Form";

import { iNote } from "./interfaces/interfaces";

function App() {
  const [notes, setNotes] = useState<iNote[]>([]);
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [selectedNote, setSelectedNote] = useState<iNote | null>(null);

  useEffect(() => {
    fetchNotes();
  }, []);

  async function fetchNotes() {
    try {
      const response = await fetch("https://notes-server-vyah.onrender.com");
      const fetchedNotes: iNote[] = await response.json();
      setNotes(fetchedNotes);
    } catch (error: any) {
      console.log(error.message);
    }
  }

  const noteHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("https://notes-server-vyah.onrender.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content }),
      });

      const newNote = await response.json();
      setNotes([newNote, ...notes]);
    } catch (error: any) {
      console.log(error.message);
    }
    setTitle("");
    setContent("");
  };

  const handleNoteClick = (note: iNote | null) => {
    if (note) {
      setSelectedNote(note);
      setTitle(note.title);
      setContent(note.content);
    }
  };

  const handleUpdateNote = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedNote) return;

    const id = selectedNote._id;

    try {
      const response = await fetch(
        `https://notes-server-vyah.onrender.com/api/notes/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title, content }),
        }
      );
      const updatedNote = await response.json();
      setNotes(
        notes.map((note) => (note._id === updatedNote._id ? updatedNote : note))
      );
    } catch (error: any) {
      console.log(error.message);
    }

    setTitle("");
    setContent("");
    setSelectedNote(null);
    fetchNotes();
  };

  const handleCancel = () => {
    setTitle("");
    setContent("");
    setSelectedNote(null);
  };

  const deleteNote = async (e: React.MouseEvent, noteId: string) => {
    e.stopPropagation();

    try {
      await fetch(
        `https://notes-server-vyah.onrender.com/api/notes/${noteId}`,
        {
          method: "DELETE",
        }
      );
    } catch (error: any) {
      console.log(error.message);
    }

    setNotes(notes.filter((note) => note._id !== noteId));
  };

  return (
    <div className="app-container">
      <Form
        selectedNote={selectedNote}
        handleUpdateNote={handleUpdateNote}
        noteHandler={noteHandler}
        title={title}
        setTitle={setTitle}
        content={content}
        setContent={setContent}
        handleCancel={handleCancel}
      />
      <div className="notes-grid">
        <Notes
          notes={notes}
          handleNoteClick={
            handleNoteClick as (note: iNote | null) => Promise<void>
          }
          deleteNote={deleteNote}
        />
      </div>
    </div>
  );
}

export default App;
