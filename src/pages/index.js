import About from "./AboutPage";
import Home from "./HomePage";
import Cart from "./CartPage";
import SingleProduct from "./SingleProductPage";
import Private from "./PrivateRoute";
import Products from "./ProductsPage";
import Checkout from "./CheckoutPage";
import Error from "./ErrorPage";

export { About, Home, Cart, SingleProduct, Private, Products, Checkout, Error };

// when you import something from folder react will auto go to look for a file called index in
// that file and import from it.
// here we are just trying to make the project structure look cleaner by making this we can
// skip many lines and also be able to change the names whenever we want.
// same time we can just import the any page just by its default import as what we used to do.
