const Button = ({ onClick, btnText }) => {
  return (
    <button
      className="w-full h-10 bg-indigo-600 text-white flex items-center justify-center"
      onClick={onclick}
    >
      {btnText}
    </button>
  );
  
};


export default Button;
