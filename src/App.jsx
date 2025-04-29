import Button from "./Components/Button"
import Header from "./Components/Header"
import Hero from "./Components/Hero"
import SectionBest from "./Components/SectionBest";
import SectionCategories from "./Components/SectionCategories";
import SectionDeals from "./Components/SectionDeals";
import SectionHot from "./Components/SectionHot";
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
    </>
  );
}

export default App;