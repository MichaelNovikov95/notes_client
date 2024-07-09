import Button from "./Button";

import { iButtonsProps } from "../interfaces/interfaces";

const Buttons = ({ selectedNote, handleCancel }: iButtonsProps) => {
  return (
    <>
      {selectedNote ? (
        <div className="edit-buttons">
          <Button onClick={() => {}} text={"Save"} />
          <Button onClick={handleCancel} text={"Cancel"} />
        </div>
      ) : (
        <Button onClick={() => {}} text={"Add Note"} />
      )}
    </>
  );
};

export default Buttons;
