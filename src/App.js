import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Overlay from "./components/Overlay";
import { Route, Switch } from "react-router-dom";
import SingleProduct from "./pages/SingleProduct/SingleProducts";
import EarPhone from "./pages/EarPhone";
import HeadPhone from "./pages/HeadPhone";
import Speaker from "./pages/Speaker";
import Error from "./components/Error";

function App() {
  return (
    <>
      <Navbar />
      <Overlay />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/speaker" component={Speaker} />
        <Route exact path="/speaker/:slug" component={SingleProduct} />
        <Route exact path="/earphone" component={EarPhone} />
        <Route exact path="/earphone/:slug" component={SingleProduct} />
        <Route exact path="/headphone" component={HeadPhone} />
        <Route exact path="/headphone/:slug/" component={SingleProduct} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
