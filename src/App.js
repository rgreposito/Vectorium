import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Vision from "./components/Vision";
import Tokenomics from "./components/Tokenomics";
import Documents from "./components/Documents";
import BuyWidget from "./components/BuyWidget";
import Roadmap from "./components/Roadmap";
import Team from "./components/Team";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-vectBlack text-white antialiased">
      <Header />
      <main className="container pt-24">
        <Hero />
        <About />
        <Vision />
        <Tokenomics />
        <Documents />
        <BuyWidget />
        <Roadmap />
        <Team />
      </main>
      <Footer />
    </div>
  );
}
