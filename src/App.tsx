import "./App.sass";

import Bar from "./components/app/Bar";
import { Grid } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Bar />
      <main>
        <Grid container>
          <Grid item xs={12} lg={10}></Grid>
        </Grid>
      </main>
    </div>
  );
}

export default App;
