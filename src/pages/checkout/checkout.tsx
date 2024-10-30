import { useForm } from "react-hook-form";
import "./checkout.styles.scss";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { toast, ToastContainer } from "react-toastify";
import { useContext, useState } from "react";
import Modal from "react-modal";
import moment from "moment";
import { ProductCardProps } from "../../components/productCard/ProductCard";
import { ShoppingCard } from "../../components/NadBar/components/ShoppingCart/ShoppingCart";
import { ShoppingCardContext } from "../../providers/ShoppingCardContext";

const Checkout = () => {
  const { productList } = useContext(ShoppingCardContext);
  const { register, handleSubmit } = useForm();
  const [payActive, setPayActive] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [data, setData] = useState({} as any);
  const [tiket, setTicket] = useState();

  const onSubmit = async (dataForm: any) => {
    setData(dataForm);
    setPayActive(true);
  };

  const createOrder = (data: any, actions: any) => {
    return actions.order
      .create({
        purchase_units: [
          {
            description: "Auto BMW",
            amount: {
              currency_code: "MXN",
              value: 0.1,
            },
          },
        ],
      })
      .then((orderId: any) => {
        setModalOpen(true);
        setTicket(orderId);
        return orderId;
      });
  };

  const onError = (data: any) => {
    toast.error("Error en tu metodo de pago");
  };

  return (
    <div className="checkout">
      <h1>Finaliza la compra</h1>
      <form className="checkout-form" onSubmit={handleSubmit(onSubmit)}>
        <h2>Datos de envio</h2>
        <label>Nombre completo</label>
        <input type="text" {...register("name")} required />
        <label>Calle</label>
        <input type="text" {...register("street")} required />
        <label>Código postal</label>
        <input type="text" {...register("cp")} required />
        <label>Colonia</label>
        <input type="text" {...register("colony")} required />
        <label>Municipio</label>
        <input type="text" {...register("town")} required />
        <label>Estado</label>
        <input type="text" {...register("state")} required />
        <label>Numero de telefono</label>
        <input type="number" {...register("Phonenumber")} required />
        {payActive ? (
          <PayPalButtons
            createOrder={createOrder}
            onError={onError}
            className="paypal"
          />
        ) : (
          <input type="submit" value="continuar compra" />
        )}
      </form>
      <Modal isOpen={modalOpen}>
        <div className="checkout-modal">
          <h2>Compra Exitosa</h2>
          <h3>Fecha: {moment().format("MMMM Do YYYY, h:mm:ss a")}</h3>
          <h3>Numero de tiket: {tiket}</h3>
          <h3>Datos de compra</h3>
          <label>Nombre Completo {data.name}</label>
          <label>Calle {data.street}</label>
          <label>Colonia {data.colony}</label>
          <label>Municipio {data.town}</label>
          <label>Estado {data.state}</label>
          <label>Numero de telefono {data.Phonenumber}</label>
          {productList.map((product: ProductCardProps) => {
            return (
              <div className="checkout-modal-product">
                <div className="checkout-modal-product-image">
                  <img src={product.imagesUrl[0]} alt="" />
                </div>
                <label>{product.description}</label>
                <label>Cantidad: {product.quantity}</label>
                <label>Precio: ${product.quantity! * product.price}</label>
              </div>
            );
          })}
        </div>
      </Modal>
      <ToastContainer />
    </div>
  );
};

export { Checkout };
