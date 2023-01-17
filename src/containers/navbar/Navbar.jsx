import "./navbar.css";
import Logo from '../../assets/logo.svg'

const Navbar = () => {
  const navbarItems = [
    {
      id: 1,
      name: "Store",
      link: "/store/",
    },
    {
      id: 2,
      name: "Mac",
      link: "/mac/",
    },
    {
      id: 3,
      name: "iPad",
      link: "/ipad/",
    },
    {
      id: 4,
      name: "TV & Home",
      link: "/tv-Home/",
    },
    {
      id: 5,
      name: "Only on Apple",
      link: "/only-on-apple/",
    },
    {
      id: 6,
      name: "Accessories",
      link: "/accessories/",
    },
    {
      id: 7,
      name: "Support",
      link: "/support/",
    },
  ];
  return (
    <nav className="navbar">
        <img src={Logo} alt="" />
      <ul className="pages">
        {navbarItems.map((item) => (
          <li key={item.id}>
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
