export const Button = ({
  selected = false,
  type = "button",
  children,
  ...props
}) => {
  return (
    <button
      type={type}
      {...props}
      className={`font-inherit inline-flex cursor-pointer border-none rounded bg-[#e2e5e8] px-3 py-2 text-inherit hover:bg-blue-500 active:bg-[#1565c0] hover:text-white active:text-white ${
        selected ? "bg-blue-500 text-white" : "bg-[#e2e5e8]"
      }`}
    >
      {children}
    </button>
  );
};
