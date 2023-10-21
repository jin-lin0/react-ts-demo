import { Link } from "react-router-dom";
import "./index.less";
const HomePage = () => {
  const CardArr = [
    {
      name: "Three Demo",
      linkTo: "/demo/three",
    },
    {
      name: "Chat Demo",
      linkTo: "/demo/chat",
    },
  ];
  const generateCards = (cards: any) => (
    <>
      {cards.map((card: any) => (
        <Link to={card.linkTo}>
          <div className="HomePage-Card">{card.name}</div>
        </Link>
      ))}
    </>
  );
  return (
    <div className="HomePage">
      <nav>{generateCards(CardArr)}</nav>
    </div>
  );
};
export default HomePage;
