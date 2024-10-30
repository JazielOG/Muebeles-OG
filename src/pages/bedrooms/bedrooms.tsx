import { CatalogMb } from "../../components/CatalogMb/CatalogMb";
import { furnitureMb } from "../../data/furniture";
import { newCatalog } from "../../data/newCatalog"; // Importa el nuevo catálogo

const BedroomsPage = () => {
  return (
    <>
      {/* Primer catálogo */}
      <CatalogMb productList={furnitureMb} />

      {/* Primera imagen */}
      <img
        src="https://media.admagazine.com/photos/63a3ca8b147955e81067b3ae/4:3/w_4911,h_3683,c_limit/recamara%20tendencias%202023.jpg"
        alt="Imagen de la habitación"
        style={{
          width: "100%",
          height: "auto",
          maxHeight: "500px",
          objectFit: "cover",
        }}
      />

      {/* Segundo catálogo */}
      <CatalogMb productList={newCatalog} />

      {/* Segunda imagen */}
      <img
        src="https://arq-3d.com/wp-content/uploads/2020/09/Dormitorio_2.jpg"
        alt="Imagen de la habitación"
        style={{
          width: "100%",
          height: "auto",
          maxHeight: "550px",
          objectFit: "cover",
          margin: "0 auto",
          display: "block",
        }}
      />
    </>
  );
};

export { BedroomsPage };

//RECARAMAS
