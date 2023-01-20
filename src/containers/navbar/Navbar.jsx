import "./navbar.css";
import Logo from "../../assets/logo.svg";
import Search from "../../assets/icons/search.png";
import Bag from "../../assets/icons/bag.svg";

const Navbar = () => {
  const navbarItems = [
    {
      id: 1,
      name: "Store",
      link: "https://www.apple.com/store",
    },
    {
      id: 2,
      name: "Mac",
      link: "https://www.apple.com/mac/",
    },
    {
      id: 3,
      name: "iPad",
      link: "https://www.apple.com/ipad/",
    },
    {
      id: 4,
      name: "iPhone",
      link: "https://www.apple.com/iphone/",
    },
    {
      id: 5,
      name: "Watch",
      link: "https://www.apple.com/watch/",
    },
    {
      id: 6,
      name: "AirPods",
      link: "https://www.apple.com/airpods/",
    },
    {
      id: 7,
      name: "TV & Home",
      link: "https://www.apple.com/tv-home/",
    },
    {
      id: 8,
      name: "Only on Apple",
      link: "https://www.apple.com/services/",
    },
    {
      id: 9,
      name: "Accessories",
      link: "https://www.apple.com/us/shop/goto/buy_accessories",
    },
    {
      id: 10,
      name: "Support",
      link: "https://support.apple.com/",
    },
  ];
  return (
    <nav className="navbar">
      <img src={Logo} alt="apple logo" />
      <ul className="pages">
        {navbarItems.map((item) => (
          <li key={item.id}>
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
      </ul>
      <img src={Search} alt="search" className="search" />
      <img src={Bag} alt="shop" />
    </nav>
  );
};

export default Navbar;
