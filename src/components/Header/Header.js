import Button from "./Button";

const Header = ({ title, formVisible, onAddButtonClick }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={formVisible ? "red" : "green"}
        action={formVisible ? "Close" : "Add"}
        onClick={onAddButtonClick}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

export default Header;
