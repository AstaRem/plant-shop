import Button from "./Components/Button"
import Footer from "./Components/Footer";
import Header from "./Components/Header"
import Hero from "./Components/Hero"
import SectionBest from "./Components/SectionBest";
import SectionCategories from "./Components/SectionCategories";
import SectionDeals from "./Components/SectionDeals";
import SectionHot from "./Components/SectionHot";
import SectionTestimonials from "./Components/SectionTestimonials";
import TopBanner from "./Components/TopBanner"

function App() {

  return (
    <>
      <TopBanner />
      <Header />
      <Hero />
      <Button />
      <SectionCategories />
      <SectionBest/>
      <SectionHot />
      <SectionDeals />
      <SectionTestimonials />
      <Footer />
    </>
  );
}

export default App;