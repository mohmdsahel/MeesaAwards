import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import AwardCategories from "./components/AwardCategories";
import Faq from "./components/Faq";
import NominationForm from "./components/NominationForm";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ButtonGradient from "./assets/svg/ButtonGradient";


const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <AboutUs />
        <AwardCategories/>
        <Faq />
        <NominationForm />
        <Contact/> 
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;