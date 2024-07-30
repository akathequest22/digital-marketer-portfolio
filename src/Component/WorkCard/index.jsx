import Image from "next/image";
import Badge from "../Elements/Badge";
import Button from "../Elements/Buton";

const badges = [
  {
    border: "orange",
    children: "UI/UX",
  },
  {
    border: "purpule",
    children: "Website",
  },
  {
    border: "green",
    children: "Backend",
  },
];
const WorkCard = ({
  images,
  title,
  description,
  containerClassName = "",
  containerStyle,
  size = "small",
  isAnchor = false,
  link,
  bagesPosition = "bottom",
}) => {
  return (
    <div
      className={`work-card work-card-${size} ${containerClassName}`}
      style={containerStyle}
    >
      <div className="work-image-container">
        <Image className="work-image" src={images} alt={title} />
      </div>
      {bagesPosition === "top" && (
        <div className="work-card-badges">
          {badges.map((b, i) => (
            <Badge key={i} border={b.border}>
              {b.children}
            </Badge>
          ))}
        </div>
      )}
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      {bagesPosition === "bottom" && (
        <div className="work-card-badges">
          {badges.map((b, i) => (
            <Badge key={i} border={b.border}>
              {b.children}
            </Badge>
          ))}
        </div>
      )}
      {isAnchor && (
        <a href={link} target="_blank">
          <Button width="180px" isArrow>
            Live Preview
          </Button>
        </a>
      )}
    </div>
  );
};

export default WorkCard;
