import { useState } from "react";
import { Box } from "@mui/material";

import HeroBanner from "../../components/hero-banner/hero-banner";
import SearchExercises from "../../components/search-exercises/search-exercises";
import Exercises from "../../components/exercises/exercises";

const Home = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);
  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        exercises={exercises}
        setExercises={setExercises}
        bodyPart={bodyPart}
      />
    </Box>
  );
};

export default Home;
