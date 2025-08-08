const Button = ({ children, onClick, className }) => {

  return (
    <>
      <button
        onClick={onClick}
        className={`bg-red-500 w-full sm:w-auto hover:bg-red-600 text-white py-2 px-4 rounded-lg transition duration-300 ${className}`}
      >
        {children}
      </button>
      
    </>
  );
};

export default Button;
