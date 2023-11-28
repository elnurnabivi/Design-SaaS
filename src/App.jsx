import { useState } from "react";
import {
  NavBar,
  Hero,
  Customers,
  Needs,
  Cases,
  Prices,
  Whyus,
} from "./components";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Customers />
      <Needs />
      <Cases />
      <Prices />
      <Whyus />
    </>
  );
}

export default App;
