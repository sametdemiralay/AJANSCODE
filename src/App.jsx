import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavigationSection from "./components/NavigationSection";
import FooterSection from "./components/FooterSection";

import Anasayfa from "./pages/Anasayfa";
import Kurumsal from "./pages/Kurumsal";
import Referanslar from "./pages/Referanslar";
import Islerimiz from "./pages/Islerimiz";
import Iletisim from "./pages/Iletisim";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Router>
      <NavigationSection />
      <Switch>
        <Route exact path="/" component={Anasayfa} />
        <Route path="/kurumsal" component={Kurumsal} />
        <Route path="/referanslar" component={Referanslar} />
        <Route path="/islerimiz/:token" component={Islerimiz} />
        <Route path="/iletisim" component={Iletisim} />
        <Route component={NotFound} />
      </Switch>
      <FooterSection />
    </Router>
  );
};

export default App;
