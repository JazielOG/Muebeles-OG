import "./map.styles.scss";

const MapPage = () => {
  return (
    <div className="map-page">
      {/* Introducción */}
      <section className="map-page-intro">
        <h1>Bienvenidos a mueblerias OG</h1>
        <p>
          En nuestra mueblería, el arte del mueble trasciende generaciones. Cada
          pieza está diseñada con pasión y dedicación, utilizando materiales de
          alta calidad para garantizar durabilidad y estilo. Creemos que los
          muebles no son solo objetos, sino una extensión de tu hogar y tu
          personalidad.
        </p>
      </section>

      {/* Imagen destacada */}
      <section className="map-page-image">
        <img
          src="https://img.freepik.com/fotos-premium/fabrica-muebles-industriales-rusticos_87720-112635.jpg"
          alt="Muebles artesanales"
        />
        <p className="image-caption">
          Arte y diseño que complementan tu espacio.
        </p>
      </section>

      {/* Mapa */}
      <section className="map-page-map">
        <h2>Visítanos</h2>
        <p>
          Encuentra nuestra mueblería en la ubicación exacta que te brindará una
          experiencia única. Estamos aquí para ayudarte a transformar tu hogar.
        </p>
        <iframe
          title="Mapa de San Pedro Tultepec, México"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13633.096306950523!2d-99.52000205745972!3d19.2708190171134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cdf4e3373f528d%3A0x8169e8742e27509f!2s52030%20San%20Pedro%20Tultepec%2C%20M%C3%A9x.!5e1!3m2!1ses-419!2smx!4v1732926426075!5m2!1ses-419!2smx"
          width="600"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

      {/* Agradecimientos y contacto */}
      <section className="map-page-thank-you">
        <h2>Gracias por visitarnos</h2>
        <p>
          Apreciamos tu interés en nuestra mueblería. Nos esforzamos cada día
          para ofrecerte lo mejor en diseño, calidad y servicio.
        </p>
        <h3>Contáctanos</h3>
        <ul>
          <li>Teléfono: 729 546 7651</li>
          <li>Email: jazielOG@mimuebleria.com</li>
          <li>
            Redes sociales:{" "}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>{" "}
            |{" "}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export { MapPage };
