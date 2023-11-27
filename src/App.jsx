import { useState } from "react";
import { NavBar, Hero, Customers, Needs, Cases } from "./components";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Customers />
      <Needs />
      <Cases />
    </>
  );
}

export default App;
