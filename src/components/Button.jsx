export const Button = ({
  selected = false,
  type = "button",
  children,
  ...props
}) => {
  return (
    <button type={type} {...props}>
      {children}
    </button>
  );
};
