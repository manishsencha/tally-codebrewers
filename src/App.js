import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import { AuthProvider } from "./context/AuthContext";
import AdminDashboard from "./pages/admin/AdminDashboard";
import FormAnalytics from "./pages/admin/FormAnalytics";
import FormSettings from "./pages/admin/FormSettings";
import Login from "./pages/admin/Login";
import SignUp from "./pages/admin/SignUp";
import Home from "./pages/Home";
import FreeRoute from "./utils/FreeRoute";
import PrivateRoute from "./utils/PrivateRoute";
import Footer from "./components/Footer";
import Create from "./pages/admin/create";
import Fill from "./pages/admin/fill";
function App() {
  return (
    <div style={{paddingBottom:"14em",backgroundColor:"#272727"}}>
      <Router>
        <AuthProvider>
          <Header />
          <Switch>
            <PrivateRoute path="/analytics/:formId" component={FormAnalytics} />
            <Route path="/fill/:adminId/:id" component={Fill} />
            <FreeRoute exact path="/" component={Home} />
            <FreeRoute path="/login" component={Login} />
            <FreeRoute path="/signup" component={SignUp} />
            <PrivateRoute path="/admin" component={AdminDashboard} />
            <PrivateRoute
              path="/admin/:formId/settings"
              component={FormSettings}
            />
            <PrivateRoute path="/create" component={Create} />
          </Switch>
        </AuthProvider>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
