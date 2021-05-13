import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import './App.css';
import './mediaQuery.css';
import './sidebar.css';
import Menu from "./component/menu";
import BigBoard from "./component/container";
import Banner from "./component/assets/icons/banner"
import CatogoryList from "./component/CatogoryList";
import Stories from "./component/stories";
import Products from "./component/Products";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CartPanel from "./component/cartPanel";
import ProfilLogin from "./component/ProfilLoogin";
import PageNotFound from "./component/pagenotfound404";
import Admin from "./component/AdminPanel/admin";
import Footer from "./component/footer";


class App extends React.Component {

  render() {
    return (
      <Router>
        <>
          <Banner />
          <Menu />
          <div className="container">
            <Switch>
              <Route path="/" exact>
                <Stories />
                <CatogoryList />
                <div className="row">
                  <BigBoard />
                </div>
              </Route>
              <Route path="/products/:brend">
                <div className="row">
                  <Products />
                </div>
              </Route>
              <Route path="/profile">
                <ProfilLogin />
              </Route>
              <Route path="/cart">
                <CartPanel />
              </Route>
              <Route path="/dashboard">
                <Admin />
              </Route>
              <Route path="*">
                <PageNotFound />
              </Route>
            </Switch>
          </div>
          <Footer />
        </>
      </Router>
    );
  }
}

export default App;
