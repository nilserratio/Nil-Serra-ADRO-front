import BurgerStyled from "./BurgerStyled";

interface BurgerProps {
  className: string;
  actionOnClick?: () => void;
  type?: "button";
  ariaLabel?: string;
}

const Burger = ({
  actionOnClick,
  className,
  type = "button",
  ariaLabel = "",
}: BurgerProps): React.ReactElement => {
  return (
    <BurgerStyled
      className={className}
      onClick={actionOnClick}
      type={type}
      aria-label={ariaLabel}
    >
      <div />
      <div />
      <div />
    </BurgerStyled>
  );
};

export default Burger;
