import React, { Dispatch, SetStateAction } from "react";

export interface iNote {
  _id: string;
  title: string;
  content: string;
}

type NullableNote = iNote | null;

export interface iButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  text: string;
}

export interface iButtonsProps {
  selectedNote: NullableNote;
  handleCancel: React.MouseEventHandler<HTMLButtonElement>;
}

export interface iFormProps {
  selectedNote: NullableNote;
  handleUpdateNote: (e: React.FormEvent) => Promise<void>;
  noteHandler: (e: React.FormEvent) => Promise<void>;
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
  content: string;
  setContent: Dispatch<SetStateAction<string>>;
  handleCancel: () => void;
}

export interface iNotesFunction {
  handleNoteClick:
    | ((note: iNote | null) => Promise<void>)
    | ((note: iNote | null) => void);
  deleteNote: (e: React.MouseEvent, noteId: string) => void;
}

export interface iNoteProps extends iNotesFunction {
  note: iNote | null;
}

export interface iNotesProps extends iNotesFunction {
  notes: iNote[];
}
