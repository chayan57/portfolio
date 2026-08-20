
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Process from "./components/Process";
import Services from "./components/Services";
import WhyWorkWithMe from "./components/WhyWorkWithMe";
import Work from "./components/Work";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Services/>
    <Work/>
    <Process/>
    <About/>
    <WhyWorkWithMe/>
    <Contact/>
    <Footer/>
    </>
  );
}
