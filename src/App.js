import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import Leftbar from "./components/Leftbar";
import Feed from "./components/Feed";
import { Box, Stack, createTheme, ThemeProvider } from "@mui/material";
import Add from './components/Add';

function App() {
  const[mode, setMode] = useState("light")

  const darktheme = createTheme ({
    palette:{
      mode:mode
    }

  })


  return (
    <ThemeProvider theme={darktheme}>
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Navbar/> 
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Leftbar setMode={setMode} mode={mode} />
        <Feed />
        <Rightbar />
      </Stack>
      <Add/>
    </Box>
    </ThemeProvider>
  );
}

export default App;
