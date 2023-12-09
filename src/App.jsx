import Home from "./pages/Home";
import Navbar from "./components/navbar/index.jsx";
import { MantineProvider } from "@mantine/core";
function App() {
  return (
    <MantineProvider>
      <Navbar />
      <Home />
    </MantineProvider>
  );
}

export default App;
