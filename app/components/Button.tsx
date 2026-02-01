interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => {
  const baseStyles = "bg-[#1078D7] rounded-[0.25rem] w-[7.625rem] h-[2.25rem] text-sm/[141%] font-medium cursor-pointer hover:bg-blue-800 transition-colors duration-200 active:scale-98 ease-out";
  
  const combinedClassName = `${baseStyles} ${className || ''}`.trim();
	
	return (
    <button className={combinedClassName} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;