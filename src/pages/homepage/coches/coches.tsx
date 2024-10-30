import { Hero } from "../../../components/Hero/Hero";
import { Catalog } from "../../../components/Catalog/Catalog";
import { catalogCar } from "../../../data/catalog";

const heroCochesPage = {
  imageUrl:
    "https://cloudfront.dico.com.mx/media/Estilos/LandingIndustrialCentro_02.jpg",
  imageText: "Muebles Ortega",
  headline: "OG.",
};

const CochesPage = () => {
  return (
    <>
      <Hero {...heroCochesPage} />
      <Catalog productList={catalogCar} />

      <img
        src="https://uc-109.jottacloud.com/thumbnail/eyJ0IjoiMSIsImsiOiJBMWQifQ.RnA34MKt6-dp39JdJdvom2m8aKU55L0EIlszLnomIBxBUWJZppc5gLDPxqeJtkIwTwxZpC_siqiQZ9f63V8AWtF2cj_X5qsqJfnyAVGUEjPJN2ad3GcqORd6Ssa3LdiO.fpINMTCJWcIN7zAZ5d7n4w?size=2480x"
        alt="Descuentos"
        style={{
          width: "100%",
          height: "auto",
          maxHeight: "550px",
          objectFit: "cover",
          margin: "0px auto",
          display: "block",
        }}
      />
    </>
  );
};

export { CochesPage };

//PARTE DE INDUSTRIALES
