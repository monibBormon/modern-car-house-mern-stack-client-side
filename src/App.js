import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthProvider from "./context/AuthProvider";
import About from "./pages/About/About";
import Dashboard from "./pages/DashBoard/Dashboard/Dashboard";
import MakeAdmin from "./pages/DashBoard/MakeAdmin/MakeAdmin";
import ManageOrders from "./pages/DashBoard/ManageOrders/ManageOrders";
import MyOrders from "./pages/DashBoard/MyOrders/MyOrders";
import ExploreCars from "./pages/ExploreCars/ExploreCars";
import Home from "./pages/Homepage/Home/Home";
import AdminRoute from "./pages/Login/AdminRoute/AdminRoute";
import Login from "./pages/Login/Login/Login";
import PrivateRoute from "./pages/Login/PrivateRoute/PrivateRoute";
import Register from "./pages/Login/Register/Register";
import NotFound from "./pages/NotFound/NotFound";
import Purchase from "./pages/Purchase/Purchase";
import Footer from "./pages/Shared/Footer/Footer";
import Header from "./pages/Shared/Header/Header";


function App() {
  return (
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/explore-cars'>
            <ExploreCars></ExploreCars>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <PrivateRoute path='/car-details/:id'>
            <Purchase></Purchase>
          </PrivateRoute>
          <Route path='/register'>
            <Register></Register>
          </Route>
          <PrivateRoute path='/dashboard'>
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
