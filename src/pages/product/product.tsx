import { useParams } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./product.styles.scss";
import EmblaCarousel from "../../components/EmblaCarousel/EmblaCarousel";
import { useContext, useEffect, useState } from "react";
import { catalogCar } from "../../data/catalog";
import { ProductCardProps } from "../../components/productCard/ProductCard";
import { SubmitHandler, useForm } from "react-hook-form";
import { Catalog } from "../../components/Catalog/Catalog";
import { ShoppingCardContext } from "../../providers/ShoppingCardContext";
import { setToLocalStorage } from "../../utils/localStorage";

interface ProductFormProps {
  quantity: number;
}

const PRODUCT_LIST_KEY = "PRODUCT_LIST_KEY";

const ProductPage = () => {
  const { productList, setProductList } = useContext(ShoppingCardContext);
  const { register, handleSubmit } = useForm<ProductFormProps>();
  const params = useParams();
  const [product, setProduct] = useState<ProductCardProps>();

  // useEffect con params.productId en las dependencias
  useEffect(() => {
    const result = catalogCar.find((product) => {
      return product.id === params.productId;
    });
    if (result) {
      setProduct(result);
    }
  }, [params.productId]); // Agrega 'params.productId' en el array de dependencias

  // Guardar la lista de productos en el almacenamiento local si hay cambios
  useEffect(() => {
    if (productList && productList.length > 0) {
      setToLocalStorage(PRODUCT_LIST_KEY, productList);
    }
  }, [productList]);

  const findProduct = () => {
    // Si lo encuentra regresa la posicion, sino regresa un -1
    const result = productList.findIndex(
      (productSearch: ProductCardProps) => productSearch.id === product?.id
    );

    return result;
  };

  const onSubmit: SubmitHandler<ProductFormProps> = (data) => {
    const productIndex = findProduct();

    if (productIndex === -1) {
      // Cuando no existe, lo añade a la lista
      setProductList([
        ...productList,
        {
          ...product,
          quantity: Number(data.quantity),
        },
      ]);
    } else {
      // Cuando existe, solo modificalo
      productList[productIndex].quantity =
        Number(productList[productIndex].quantity) + Number(data.quantity);
      setProductList([...productList]);
    }
    toast("Producto añadidod al carrito");
  };
  if (!product) {
    return (
      <div>
        <p>Este producto ya no existe, intenta más tarde.</p>
      </div>
    );
  }

  return (
    <div className="product-page">
      <div className="product-page-body">
        <div className="product-page-carousel">
          <EmblaCarousel slides={product?.imagesUrl} />
        </div>

        <div className="product-page-detail-wraper">
          <div className="product-page-detail-title">{product.title}</div>
          <div className="product-page-detail-price">{product.price} MXN</div>

          <div className="product-page-detail-description">
            {product.description}
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <label>
              Cantidad
              <select {...register("quantity", { required: true, min: 1 })}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
              </select>
              <input type="submit" value="Agregar al carrito" />
            </label>
          </form>
        </div>
      </div>
      <label>Productos Relacionados</label>
      <Catalog productList={catalogCar.slice(1, 4)} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export { ProductPage };
