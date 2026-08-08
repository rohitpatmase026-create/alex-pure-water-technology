import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TrustBar from "../components/TrustBar";
import About from "../components/About";
import Services from "../components/Services";
import Products from "../components/Products";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import FloatingButtons from "../components/FloatingButtons";
import Footer from "../components/Footer";
function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustBar />
      <About />
      <Services />
      <Products />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
      <FloatingButtons />
      <Footer />
    </>
  );
}

export default Home;