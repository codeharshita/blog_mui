import React from "react";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import Leftbar from "./components/Leftbar";
import Feed from "./components/Feed";
import { Box, Stack } from "@mui/material";

function App() {
  return (
    <Box>
      <Navbar/> 
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Leftbar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  );
}

export default App;
