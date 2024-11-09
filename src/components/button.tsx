const Button = ({ text, border }: { text: string; border?: boolean }) => {
  return (
    <button
      className={
        "py-1 px-3 font-bold text-center  rounded-md text-xs " +
        (border ? "border border-gray-200" : "text-gray-500 border-white")
      }
    >
      {text}
    </button>
  );
};

export default Button;
