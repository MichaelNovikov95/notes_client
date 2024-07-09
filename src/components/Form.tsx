import Buttons from "./Buttons";

import { iFormProps } from "../interfaces/interfaces";

const Form = ({
  selectedNote,
  handleUpdateNote,
  noteHandler,
  title,
  setTitle,
  content,
  setContent,
  handleCancel,
}: iFormProps) => {
  return (
    <>
      <form
        className="note-form"
        onSubmit={(e) => (selectedNote ? handleUpdateNote(e) : noteHandler(e))}
      >
        <input
          placeholder="Title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Content"
          rows={10}
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>
        <Buttons selectedNote={selectedNote} handleCancel={handleCancel} />
      </form>
    </>
  );
};

export default Form;
