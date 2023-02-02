import { Box, Toolbar } from "@mui/material";
import Employees from "components/Employees";
import Jobs from "components/Jobs";

const drawerWidth = 240;

function App() {

  return (
    <Box sx={{ display: 'flex' }}>
      <Jobs />
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Employees />
      </Box>
    </Box>
  );
}

export default App;
