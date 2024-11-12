import Navbar from "./components/Navbar";
import About from "./components/About";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Pricing from "./components/Pricing";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div className="overflow-x-hidden bg-orange-50 text-emerald-950 antialiased">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Pricing />
      <Team />
      <Testimonials />
      <Faq />
      <Footer />
    </div>
  );
};

export default App;
