import "./hero-item.css";

const HeroItem = (props) => {
  return (
    <div
      className="macbook"
      style={{
        backgroundImage: `url(${props.image})`,
        backgroundPosition: "bottom",
        backgroundSize: "cover",
      }}
    >
      <h2>{props.title}</h2>
      <p className="subtitle-copy">{props.subtitle}</p>
      <p className="availability">Available starting {props.version}</p>

      <div className="ctas">
        <a href={props.learnMoreLink} rel="noopener noreferrer">
          Learn More {">"}
        </a>
        <a href={props.orderNowLink} rel="noopener noreferrer">
          Order Now {">"}
        </a>
      </div>
    </div>
  );
};

export default HeroItem;
