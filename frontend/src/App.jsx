import * as React from "react";
import Button from "@mui/material/Button";
import OutlinedInput from '@mui/material/OutlinedInput';


function App() {
  return (
    <div className="App">
      <h1>Link Resume</h1>
      <div>
        <OutlinedInput variant="outlined" placeholder="Linkedin profile url" />
      </div>
      <div>
        <Button variant="contained">Generate Resume</Button>
      </div>
    </div>
  );
}

export default App;
