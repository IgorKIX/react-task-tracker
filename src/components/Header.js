import Button from "./Button";
import { useLocation } from "react-router-dom";

const Header = ({ onBtnClick, showAddTask }) => {
  const location = useLocation();

  return (
    <header className="header">
      <h1>Task Tracker</h1>
      {location.pathname === "/" && (
        <Button
          color={showAddTask ? "black" : "green"}
          text={showAddTask ? "Close" : "Add"}
          onClick={onBtnClick}
        />
      )}
    </header>
  );
};

export default Header;
