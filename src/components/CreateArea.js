import React, { useState } from "react";
import Fab from "@mui/material/Fab";

import AddCircleIcon from "@mui/icons-material/AddCircle";
import Zoom from "@mui/material/Zoom";
function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const [size, changeSize] = useState(false);
  function handleChange(event) {
    const { value, name } = event.target;
    setNote((prevNotes) => {
      return { ...prevNotes, [name]: value };
    });
  }
  function handleSize() {
    changeSize(true);
  }

  return (
    <div>
      <form
        className="create-note"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        {size && (
          <input
            name="title"
            onChange={handleChange}
            placeholder="Title"
            value={note.title}
          />
        )}
        <textarea
          name="content"
          onChange={handleChange}
          onClick={handleSize}
          placeholder="Take a note..."
          rows={size ? "3" : "1"}
          value={note.content}
        />
        <Zoom in={size}>
          <Fab
            onClick={() => {
              props.onAdd(note);
              setNote({
                title: "",
                content: "",
              });
            }}
          >
            <AddCircleIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
