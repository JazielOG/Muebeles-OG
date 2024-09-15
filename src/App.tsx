import NavBar from "./components/NadBar/navBar";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/root";
import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { ShoppingCardContext } from "./providers/ShoppingCardContext";
import { useEffect, useState } from "react";
import { getFromLocalStorage } from "./utils/localStorage";

const PRODUCT_LIST_KEY = "PRODUCT_LIST_KEY";

function App() {
  const [productList, setProducList] = useState([]);

  useEffect(() => {
    const result = getFromLocalStorage(PRODUCT_LIST_KEY);
    if (result) {
      setProducList(result);
    }
  }, []);

  return (
    <ShoppingCardContext.Provider
      value={{
        productList,
        setProducList,
      }}
    >
      <div className="app">
        <NavBar />
        <RouterProvider router={router} />
        <Footer year={0} companyName={""} />
      </div>
    </ShoppingCardContext.Provider>
  );
}

export default App;
