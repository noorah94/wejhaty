import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Destinations from "./components/Destinations";
import DestinationInfo from "./components/DestinationInfo";
import DayInYourCity from "./components/DayInYourCity";
import DayInYourCityInfo from "./components/DayInYourCityInfo";
import PlanYourTrip from "./components/PlanYourTrip";
import TravelTips from "./components/TravelTips";
import Admin from "./components/Admin";
import UserInfo from "./components/UserInfo";
import MyFav from "./components/MyFav";
import MyOrders from "./components/MyOrders";
import LoginSignupDesign from "./components/LoginSignupDesign";
import Footer from "./components/Footer";
import WhoAreWe from "./components/WhoAreWe";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          exact
          path="/destinations"
          element={
            <>
              <Destinations /> <Footer />
            </>
          }
        />
        <Route
          exact
          path="/UserInfo"
          element={
            <>
              <UserInfo /> <Footer />
            </>
          }
        />
        <Route
          exact
          path="/MyFav"
          element={
            <>
              <MyFav /> <Footer />
            </>
          }
        />
        <Route
          exact
          path="/MyOrders"
          element={
            <>
              <MyOrders /> <Footer />
            </>
          }
        />
        <Route
          exact
          path="/destinations/:city/:id"
          element={
            <>
              <DestinationInfo /> <Footer />
            </>
          }
        />
        <Route
          exact
          path="/dayInYourCity"
          element={
            <>
              <DayInYourCity /> <Footer />
            </>
          }
        />
        <Route
          exact
          path="/dayInYourCity/:id"
          element={
            <>
              <DayInYourCityInfo />
              <Footer />
            </>
          }
        />
        <Route exact path="/PlanYourTrip" element={<PlanYourTrip />} />
        <Route exact path="/travelTips" element={<TravelTips />} />
        <Route
          exact
          path="/signup"
          element={<LoginSignupDesign type={"Signup"} />}
        />
        <Route
          exact
          path="/login"
          element={<LoginSignupDesign type={"login"} />}
        />
        <Route
          exact
          path="/admin"
          element={
            <>
              <Admin />
              <Footer />
            </>
          }
        />
        <Route
          exact
          path="/resetPass"
          element={<LoginSignupDesign type={"ResetPass"} />}
        />
        <Route
          exact
          path="users/completeResetPassword/:id"
          element={<LoginSignupDesign type={"completeResetPassword"} />}
        />
        <Route
          exact
          path="/whoAreWe"
          element={
            <>
              <WhoAreWe />
              <Footer />
            </>
          }
        />
        <Route path="*" element={<h1> 404 </h1>} />
      </Routes>
    </>
  );
}

export default App;
