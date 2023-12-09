// IMPORTS MODULES TO BE USED

import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./core/Home";
import Users from "./user/Users";
import Signup from "./user/Signup";
import Signin from "./auth/Signin";
import EditProfile from "./user/EditProfile";
import Profile from "./user/Profile";
import PrivateRoute from "./auth/PrivateRoute";
import Menu from "./core/Menu";
import NewShop from "./shop/NewShop";
import Shops from "./shop/Shops";
import MyShops from "./shop/MyShops";
import Shop from "./shop/Shop";
import EditShop from "./shop/EditShop";
import NewProduct from "./product/NewProduct";
import EditProduct from "./product/EditProduct";
import Product from "./product/Product";
import Cart from "./cart/Cart";
import Checkout from "./cart/Checkout";
import PlaceOrder from "./cart/PlaceOrder";
import StripeConnect from "./user/StripeConnect";
import ShopOrders from "./order/ShopOrders";
import Order from "./order/Order";

// RETURNS THE MENU COMPONENT AND THE EMBEDDED SWITCH COMPONENT WITH ROUTES

const MainRouter = () => {
  return (
    <div>
      <Menu />
      <Switch>
        {/* DEFAULT STARTING HOME URL */}
        <Route exact path="/" component={Home} />
        {/* ROUTES FOR USER RELATED COMPONENTS */}
        <Route path="/users" component={Users} />
        <Route path="/signup" component={Signup} />
        <Route path="/signin" component={Signin} />
        <PrivateRoute path="/user/edit/:userId" component={EditProfile} />
        <Route path="/user/:userId" component={Profile} />
        {/* ROUTES FOR SHOPPING RELATED COMPONENTS */}
        <Route path="/shops/all" component={Shops} />
        <Route path="/shops/:shopId" component={Shop} />
        <Route path="/product/:productId" component={Product} />
        <Route path="/cart" component={Cart} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/placeorder" component={PlaceOrder} />
        {/* ROUTES FOR SELLER RELATED COMPONENTS */}
        <Route path="/order/:orderId" component={Order} />
        <PrivateRoute
          path="/seller/orders/:shop/:shopId"
          component={ShopOrders}
        />
        <PrivateRoute path="/seller/shops" component={MyShops} />
        <PrivateRoute path="/seller/shop/new" component={NewShop} />
        <PrivateRoute path="/seller/shop/edit/:shopId" component={EditShop} />
        <PrivateRoute
          path="/seller/:shopId/products/new"
          component={NewProduct}
        />
        <PrivateRoute
          path="/seller/:shopId/:productId/edit"
          component={EditProduct}
        />
        {/* ROUTE FOR STRIPE CONNECT */}
        <Route path="/seller/stripe/connect" component={StripeConnect} />
      </Switch>
    </div>
  );
};

export default MainRouter;
