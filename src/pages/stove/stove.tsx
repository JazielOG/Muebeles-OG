import { CatalogSv } from "../../components/CatalogSv/CatalogSv";
import { StoveCs } from "../../data/stove"; // Asegúrate de que el nombre del catálogo coincida

const StovePage = () => {
  return (
    <div>
      {/* Inserta la imagen aquí */}
      <img
        src="https://www.cocinassantosdc.com/wp-content/uploads/2024/06/banner-cocinassantos-descuento10-new.jpg"
        alt="Cocina"
        style={{ width: "100%", height: "auto" }}
      />

      {/* Renderiza el catálogo */}
      <CatalogSv productList={StoveCs} />
    </div>
  );
};

export { StovePage };
