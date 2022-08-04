import { Fab } from "@mui/material";
import React from "react";
import { Tooltip } from "react-bootstrap";
import { Add as AddIcon } from "@mui/icons-material";

const Add = () => {
  return (
    <>
      <Tooltip title="Delete" sx={{ position: "fixed", bottom: "30" }}>
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
    </>
  );
};

export default Add;
