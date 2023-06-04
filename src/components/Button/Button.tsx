interface ButtonProps {
  className?: string;
  ariaLabel?: string;
  text?: string;
  isDisable?: boolean;
  actionOnClick?: () => void;
  children?: React.ReactElement;
}

const Button = ({
  className,
  ariaLabel,
  text,
  isDisable,
  actionOnClick,
  children,
}: ButtonProps): React.ReactElement => {
  return (
    <button
      className={className}
      aria-label={ariaLabel}
      disabled={isDisable}
      onClick={actionOnClick}
    >
      {text}
      {children}
    </button>
  );
};

export default Button;
