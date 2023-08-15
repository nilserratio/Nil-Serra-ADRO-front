interface ButtonProps {
  className?: string;
  ariaLabel?: string;
  type?: "button" | "submit" | "reset";
  text?: string;
  isDisable?: boolean;
  actionOnClick?: () => void;
  children?: React.ReactElement;
}

const Button = ({
  className,
  text,
  type,
  ariaLabel,
  children,
  isDisable,
  actionOnClick,
}: ButtonProps): React.ReactElement => {
  return (
    <button
      className={className}
      aria-label={ariaLabel}
      type={type}
      disabled={isDisable}
      onClick={actionOnClick}
    >
      {text}
      {children}
    </button>
  );
};

export default Button;
