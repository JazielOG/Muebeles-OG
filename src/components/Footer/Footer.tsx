import { FC } from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "./Footer.styles.scss";

export interface FooterProps {
  year: number;
  companyName: string;
}

const Footer: FC<FooterProps> = ({ year, companyName }) => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>CONTACTO</h4>
          <p>Encuentra tu Distribuidor BMW</p>
          <p>7223987247</p>
          <p>Atención a clientes</p>
        </div>
        <div className="footer-section">
          <h4>ENCUENTRA TU BMW</h4>
          <p>Disponibilidad inmediata BMW</p>
          <p>Cotiza tu BMW</p>
          <p>Agenda tu prueba de manejo</p>
          <p>Configura tu BMW</p>
          <p>Lista de precios</p>
          <p>Agenda tu cita con nosotros</p>
        </div>
        <div className="footer-section">
          <h4>Introduccion</h4>
          <p>Gia de manejo</p>
          <p>Modelos</p>
          <p>mas</p>
        </div>
        <div className="footer-section">
          <p>Aviso de Privacidad BMW Conectate con nostros</p>
          <p>BMW Connectate hoy</p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-socials">
          <a href="https://www.facebook.com" className="footer-social-link">
            <FaFacebook />
          </a>
          <a href="https://www.twitter.com" className="footer-social-link">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com" className="footer-social-link">
            <FaInstagram />
          </a>
        </div>
        <p className="footer-copyright">
          &copy; {year} {companyName}. Josoue Jaziel Ortega Guzman
        </p>
      </div>
    </footer>
  );
};

export { Footer };
