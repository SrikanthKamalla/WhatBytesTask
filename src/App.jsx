import Header from "../src/components/Header.jsx";
import Home from "../src/pages/Home.jsx";
import Footer from "../src/components/Footer.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import realmebuds from "../src/assets/realmebuds2wired.png";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import CartPage from "./pages/CartPage.jsx";
import { store } from "./store/store.js";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route
            path={"/"}
            element={
              <>
                <Header />
                <Home />
                <Footer />
              </>
            }
          />
          <Route
            path={"/product/:id"}
            element={
              <>
                <Header />
                <ProductDetail
                  product={{
                    title: "titel",
                    description: "description description",
                    price: 123,
                    image: realmebuds,
                  }}
                />
                <Footer />
              </>
            }
          />
          <Route
            path={"/cart"}
            element={
              <>
                <Header />
                <CartPage />
                <Footer />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
