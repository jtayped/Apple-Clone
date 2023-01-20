import "./macbook.css";

const Macbook = () => {
  return (
    <div className="macbook">
      <h2>MacBook Pro</h2>
      <p className="subtitle-copy">Supercharged by M2 Pro and M2 Max.</p>
      <p className="availability">Available starting 1.24</p>

      <div className="ctas">
        <a
          href="https://www.apple.com/macbook-pro-14-and-16/"
          rel="noopener noreferrer"
        >
          Learn More {">"}
        </a>
        <a
          href="https://www.apple.com/us/shop/goto/buy_mac/macbook_pro_14"
          rel="noopener noreferrer"
        >
          Order Now {">"}
        </a>
      </div>
    </div>
  );
};

export default Macbook;
