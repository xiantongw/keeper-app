import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);
  const [note, setNote] = useState({ title: "", content: "" });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return { ...prevNote, [name]: value };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({ title: "", content: "" });
    setExpanded(false);
    event.preventDefault();
  }

  function handleExpanded() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          onClick={handleExpanded}
          value={note.title}
        ></input>
        {isExpanded && (
          <textarea
            name="content"
            placeholder="Content"
            rows={3}
            onChange={handleChange}
            value={note.content}
          ></textarea>
        )}

        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
