import { useState } from "react";
import {
  NavBar,
  Hero,
  Customers,
  Needs,
  Cases,
  Prices,
  Whyus,
  FAQ,
  TryUs,
  Footer,
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
      <FAQ />
      <TryUs />
      <Footer />
    </>
  );
}

export default App;
