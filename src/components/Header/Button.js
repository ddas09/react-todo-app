const Button = ({ action, color, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className="btn"
    >
      {action}
    </button>
  );
};

export default Button;
