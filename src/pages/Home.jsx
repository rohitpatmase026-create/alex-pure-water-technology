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

      <section id="home">
        <Hero />
      </section>

      <TrustBar />

      <section id="about">
        <About />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="products">
        <Products />
      </section>

      <WhyChooseUs />

      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <FloatingButtons />

      <Footer />
    </>
  );
}

export default Home;