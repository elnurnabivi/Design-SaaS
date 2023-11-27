import { useState } from "react";
import { NavBar, Hero, Customers, Needs } from "./components";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Customers />
      <Needs />
    </>
  );
}

export default App;
