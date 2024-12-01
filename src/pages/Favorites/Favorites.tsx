import { useContext } from "react";
import { ProductCardProps } from "../../components/productCard/ProductCard";
import { setToLocalStorage } from "../../utils/localStorage";
import { FavoritesContext } from "../../providers/FavoritesContext";
import Button from "../../components/Button/Button";
import "./Favorites.styles.scss";

const FAVORITES_LIST_KEY = "FAVORITES_LIST_KEY";

const FavoritesPage = () => {
  const { favoritesList, setFavoritesList } = useContext(FavoritesContext);

  const handleClick = (id: string) => {
    const result = favoritesList.filter(
      (product: ProductCardProps) => product.id !== id
    );
    setFavoritesList(result);
    setToLocalStorage(FAVORITES_LIST_KEY, result);
  };

  return (
    <div className="favorites-page">
      <h1>Favoritos</h1>
      <div className="favorites-list">
        {favoritesList.map((product: ProductCardProps) => (
          <div className="shopping-cart-page-product" key={product.id}>
            <div className="shopping-cart-page-product-image">
              <img src={product.imagesUrl[0]} alt={product.description} />
            </div>
            <div className="shopping-cart-page-product-desc">
              <div>{product.description}</div>
            </div>
            <div className="shopping-cart-page-product-price">
              ${product.price}
            </div>
            <Button
              type="button"
              onClick={() => handleClick(product.id)}
              label="Eliminar"
              className="dark"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export { FavoritesPage };
