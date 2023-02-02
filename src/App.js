import { Box } from "@mui/material";
import Employees from "components/Employees";
import Jobs from "components/Jobs";



function App() {

  return (
    <Box sx={{ display: 'flex' }}>
      <Jobs />
      <main>
        <div>
          <Employees />
        </div>
      </main>
    </Box>
  );
}

export default App;
