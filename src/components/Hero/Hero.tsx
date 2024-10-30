import { FC } from "react";
import { ButtonLink, ButtonLinkProps } from "../ButtonLink/ButtonLink";
import "./Hero.styles.scss";

interface HeroProps {
  imageUrl: string;
  imageText: string;
  headline: string;
  button?: ButtonLinkProps;
}

const Hero: FC<HeroProps> = ({ imageUrl, imageText, headline, button }) => {
  return (
    <div className="hero">
      <img className="img-backgroud" src={imageUrl} alt={imageText} />
      <div className="cta">{button && <ButtonLink {...button} />}</div>
    </div>
  );
};

export { Hero };
