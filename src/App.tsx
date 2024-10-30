import NavBar from "./components/NadBar/navBar";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/root";
import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { ShoppingCardContext } from "./providers/ShoppingCardContext";
import { useEffect, useState } from "react";
import { getFromLocalStorage } from "./utils/localStorage";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const PRODUCT_LIST_KEY = "PRODUCT_LIST_KEY";
const ppIntialOptions = {
  clientId: "test",
  currency: "MXN",
  intent: "capture",
};

function App() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const result = getFromLocalStorage(PRODUCT_LIST_KEY);
    if (result) {
      setProductList(result);
    }
  }, []);

  return (
    <PayPalScriptProvider options={ppIntialOptions}>
      <ShoppingCardContext.Provider
        value={{
          productList,
          setProductList,
        }}
      >
        <div className="app">
          <NavBar />
          <RouterProvider router={router} />
          <Footer year={0} companyName={""} />
        </div>
      </ShoppingCardContext.Provider>
    </PayPalScriptProvider>
  );
}

export default App;
