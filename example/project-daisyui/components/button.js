const Button = ({ className, children = "Button" }) => {
  return <button className={className}>{children.toUpperCase()}</button>;
};

export default Button;
