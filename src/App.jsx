import Asteroid from "./components/Asteroid";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";


function App() {


  return (
    <div >
      <Navbar />
      <Form/>
      <Asteroid></Asteroid>
      </div>
  );
}

export default App;
