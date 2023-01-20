import "./App.css";
import { Navbar, Hero } from "./containers/index";
import { HeroItem } from "./components/index";
import MacBookHeroImage from "./assets/hero-images/MacBook.jpg";
import MacMini from "./assets/hero-images/MacMini.jpg";
import HomePod from "./assets/hero-images/HomePod.jpg";

function App() {
  const heroItems = [
    {
      id: 1,
      title: "MacBook Pro",
      subtitle: "Supercharged by M2 Pro and M2 Max.",
      version: "1.24",
      image: MacBookHeroImage,
      learnMoreLink: "https://www.apple.com/macbook-pro-14-and-16/",
      orderNowLink: "https://www.apple.com/us/shop/goto/buy_mac/macbook_pro_14",
    },
    {
      id: 2,
      title: "Mac mini",
      subtitle: "Supercharged by M2 and M2 Pro.",
      version: "1.24",
      image: MacMini,
      learnMoreLink: "https://www.apple.com/macbook-pro-14-and-16/",
      orderNowLink: "https://www.apple.com/us/shop/goto/buy_mac/macbook_pro_14",
    },
    {
      id: 3,
      title: "HomePod",
      subtitle: "Profound sound.",
      version: "2.3",
      image: HomePod,
      learnMoreLink: "https://www.apple.com/homepod-2nd-generation/",
      orderNowLink: "https://www.apple.com/us/shop/goto/buy_homepod/homepod",
    },
  ];
  return (
    <div className="App">
      <Navbar />
      <Hero />
      {heroItems.map((item) => (
        <HeroItem {...item} />
      ))}
    </div>
  );
}

export default App;
