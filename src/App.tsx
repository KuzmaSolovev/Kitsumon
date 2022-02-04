import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loading from "./components/common/Loading";
import Navbar from "./layouts/Navbar";

const Landing = React.lazy(() => import("./pages/Landing"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Landing} />
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
