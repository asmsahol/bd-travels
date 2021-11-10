/** @format */
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import AuthProvider from "./Context/AuthProvider";
import Home from "./pages/Home/Home";
import Header from "./pages/Home/Header/Header";
import About from "./pages/About/About";
import SignUp from "./pages/Home/SignUp/SignUp";
import PrivateRoute from "./pages/PrivateRoute/PrivateRoute";
import Login from "./pages/Home/Login/Login";
import NoFound from "./pages/Home/NotFount/NotFound";
import Footer from "./pages/Home/Footer/Footer";
import Services from "./pages/Services/Services";
import RecentTravel from "./pages/RecentTravel/RecentTravel";
import TravelsWay from "./pages/TravelsWay/TravelsWay";
import Booking from "./pages/Booking/Booking";
import MyOrder from "./pages/Booking/MyOrder";
import Admin from "./pages/Admin/Admin";

function App() {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://pure-falls-70781.herokuapp.com/services")
      .then(res => res.json())
      .then(data => setServices(data));
  }, []);

  // Recent
  const [recent, setRecent] = useState([]);
  useEffect(() => {
    fetch("https://pure-falls-70781.herokuapp.com/recent")
      .then(res => res.json())
      .then(data => setRecent(data));
  }, []);

  // Travels Way
  const [travelWay, setTravelWay] = useState([]);
  useEffect(() => {
    fetch("https://pure-falls-70781.herokuapp.com/travels_way")
      .then(res => res.json())
      .then(data => setTravelWay(data));
  }, []);

  return (
    <div className='App'>
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
            <Route path='/services'>
              <h2 className='mt-5'>Best places to visit in Bangladesh</h2>
              <div className='services'>
                {services.map(service => (
                  <Services service={service} key={service._id}></Services>
                ))}
              </div>
            </Route>
            <PrivateRoute path='/service/:serviceId'>
              <Booking services={services}></Booking>
            </PrivateRoute>
            <Route path='/travels_way'>
              <h2 className='mt-5'>WAYS TO TRAVEL</h2>
              <div className='travels-way'>
                {travelWay.map(tWay => (
                  <TravelsWay tWay={tWay} key={tWay._id}></TravelsWay>
                ))}
              </div>
            </Route>
            <Route path='/about'>
              <About></About>
            </Route>
            <Route path='/recent'>
              <h2 className='mt-5'>Recent Tripadvisor Plus deals</h2>
              <div className='recent-section'>
                {recent.map(recent => (
                  <RecentTravel recent={recent} key={recent._id}></RecentTravel>
                ))}
              </div>
            </Route>
            <Route path='/signup'>
              <SignUp></SignUp>
            </Route>
            <PrivateRoute path='/order'>
              <h2 className='mt-5'>My Order</h2>
              <MyOrder></MyOrder>
            </PrivateRoute>
            <PrivateRoute path='/admin'>
              <h2 className='mt-5'>Admin</h2>
              <div>
                <Admin></Admin>
              </div>
            </PrivateRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route>
              <NoFound></NoFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
