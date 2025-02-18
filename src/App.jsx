import { useRef } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Clients from "./components/Clients";
import Products from "./components/Products";
import Footer from "./components/Footer";
import "./styles/global.css"

function App() {
  const heroRef = useRef(null);
  const aboutUsRef = useRef(null);
  const productsRef = useRef(null);
  const clientsRef = useRef(null);
  const footerRef = useRef(null);

  return (
    <>
      <Header
        heroRef={heroRef}
        aboutUsRef={aboutUsRef}
        productsRef={productsRef}
        clientsRef={clientsRef}
      />
      <div ref={heroRef}>
        <Hero />
      </div>
      <div ref={aboutUsRef}>
        <AboutUs footerRef={footerRef} />
      </div>
      <div ref={clientsRef}>
        <Clients />
      </div>
      <div ref={productsRef}>
        <Products />
      </div>
      <div ref={footerRef}>
        <Footer />
      </div>
    </>
  );
}

export default App;
