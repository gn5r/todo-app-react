import { AppBar, Toolbar, Typography } from "@mui/material";

function Bar() {
  return (
    <AppBar position="fixed">
      <Toolbar variant="dense">
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          ToDo App
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Bar;
