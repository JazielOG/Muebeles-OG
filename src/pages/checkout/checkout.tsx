import { useForm } from "react-hook-form";
import "./checkout.styles.scss";

const Checkout = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: any) => {
    console.log(data);
  };
  return (
    <div className="checkout">
      <h1>Finaliza la compra</h1>
      <form className="checkout-form" onSubmit={handleSubmit(onSubmit)}>
        <h2>Datos de envio</h2>
        <label>Nombre completo</label>
        <input type="text" {...register("name")} />
        <label>Calle</label>
        <input type="text" {...register("street")} />
        <label>Código postal</label>
        <input type="text" {...register("cp")}></input>
        <label>Colonia</label>
        <input type="text" {...register("colony")}></input>
        <label>Municipio</label>
        <input type="text" {...register("town")}></input>
        <label>Estado</label>
        <input type="text" {...register("state")}></input>
        <label>Numero de telefono</label>
        <input type="number" {...register("Phonenumber")} />
        <button type="submit">Comprar</button>
      </form>
    </div>
  );
};

export { Checkout };
