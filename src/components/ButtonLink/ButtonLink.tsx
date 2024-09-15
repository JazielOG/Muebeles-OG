import { FC } from "react";
import { FaArrowRight } from "react-icons/fa";
import classNames from "classnames";
import "./ButtonLink.styles.scss";

export interface ButtonLinkProps {
  href: string;
  label?: string | null;
  className?: string;
  iconAfter?: () => React.ReactElement;
}

const ButtonLink: FC<ButtonLinkProps> = ({
  href,
  label,
  className,
  iconAfter,
}) => {
  console.log(label);
  const classes = classNames("button-link", className);

  return (
    <a className={classes} href={href}>
      {
        // Si label es verdadero, muestra el div con la clase "button-link-label"
        label && <div className="button-link-label">{label}</div>
      }
      {
        // Si iconAfter es verdadero, ejecuta iconAfter, sino muestra el icono de flecha
        iconAfter ? iconAfter() : <FaArrowRight />
      }
    </a>
  );
};

export { ButtonLink };
