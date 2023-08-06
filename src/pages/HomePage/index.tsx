import { Link } from "react-router-dom";
import { Card } from "antd";
import "./index.less";
const HomePage = () => {
  return (
    <div className="HomePage">
      <nav>
        <Link to="/demo/three" style={{ textDecoration: "none" }}>
          <Card title="Three Demo"></Card>
        </Link>
      </nav>
    </div>
  );
};
export default HomePage;
