const Button = ({ onClick, btnText }) => {
  return (
    <button
      className="w-full h-10 bg-indigo-600 text-white flex items-center justify-center mt-4 rounded-md border border-indigo-600 hover:bg-indigo-500"
      onClick={onclick}
    >
      {btnText}
    </button>
  );
  
};


export default Button;
