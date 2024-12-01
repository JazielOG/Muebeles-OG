import { FC } from "react";

export interface ButtonLinkProps {
  href: string;
  className?: string;
  iconAfter?: () => JSX.Element;
  children?: React.ReactNode; // Permite pasar contenido como texto o elementos dentro del botón
}

const ButtonLink: FC<ButtonLinkProps> = ({
  href,
  className,
  iconAfter,
  children,
}) => {
  return (
    <a href={href} className={className}>
      {children}{" "}
      {/* Aquí se renderiza el contenido (texto) que pasas como children */}
      {iconAfter && iconAfter()} {/* Renderiza el ícono si se pasa como prop */}
    </a>
  );
};

export { ButtonLink };
