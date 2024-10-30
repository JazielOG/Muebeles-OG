import { FC } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaWhatsapp,
} from "react-icons/fa";
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
          <h4>Contacto</h4>
          <p>San Pedro Tultepec - Lerma, edo mex</p>
          <p>
            Email:{" "}
            <a href="email: jazortegaguz@gmail.com">jazortegaguz@gmail.com </a>
          </p>

          {/* Redes sociales integradas en la misma sección */}
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
            <a href="https://www.pinterest.com" className="footer-social-link">
              <FaPinterest />
            </a>
            <a href="https://wa.me/55123456789" className="footer-social-link">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Promociones Todo el Año</h4>
          <p>Buen Fin</p>
          <p>Hot Sale</p>
        </div>

        <div className="footer-section">
          <h4>Servicios Adicionales</h4>
          <p>Diseños</p>
          <p>Servicio de Interiorismo</p>
          <p>Modelos actuales</p>
        </div>

        <div className="footer-section">
          <h4>Ventas en Línea</h4>
          <p>Atención en compras en línea:</p>
          <p>Lunes a Viernes 10 am a 7 pm</p>
          <p>Sábado de 11 am a 5 pm</p>
          <p>Teléfono de Ventas:</p>
          <p>Estado de mexico: 729 918 0867</p>
        </div>

        <div className="footer-section">
          <h4>Atención a Clientes</h4>
          <p>Lunes a Viernes 9 am a 8 pm</p>
          <p>Sábado de 11 am a 5 pm</p>
          <p>Teléfono Atención a Clientes:</p>
          <p>Estado de mexico: 729 918 0867</p>
        </div>

        <div className="footer-section">
          <h4>Servicio al Cliente</h4>
          <p>Solicita tu Cotización</p>
          <p>Servicio de Envío</p>
          <p>Garantia de todo el año</p>
          <p>
            Email:{" "}
            <a href="email: jazortegaguz@gmail.com">jazortegaguz@gmail.com</a>
          </p>
          <p>Garantías</p>
          <p>Concursos y Promociones</p>
        </div>

        <div className="footer-section">
          <h4>Términos y Condiciones</h4>
          <p>Formas de Pago</p>
          <p>Aviso de Privacidad</p>
          <p>Compra Segura</p>
          <p>Políticas de Compra</p>
          <p>Preguntas Frecuentes</p>
        </div>

        <div className="footer-section">
          <h4>Suscribirse</h4>
          <p>Correo electrónico</p>
          <input type="email" placeholder="Ingresa tu email" />
          <button>Suscribirse</button>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copyright">
          &copy; {year} {companyName}. Todos los derechos reservados Mubles OG.
        </p>
      </div>
    </footer>
  );
};

export { Footer };
