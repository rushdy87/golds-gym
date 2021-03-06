import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material"; /*
The Box component wraps your component. It creates a new DOM element,
a <div> that by default can be changed with the component prop. */

import Navbar from "./components/navbar/navbar";
import Home from "./pages/home/home";
import ExercisesDetail from "./pages/exercises-detail/exercises-detail";
import Footer from "./components/footer/footer";

import "./app.css";

const App = () => {
  return (
    <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExercisesDetail />} />
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
