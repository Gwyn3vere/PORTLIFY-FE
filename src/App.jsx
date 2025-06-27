import "./styles/custom.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import publicRoutes from "./routes/publicRoutes";
import privateRoutes from "./routes/privateRoutes";
import { Fragment } from "react";

// Pages
import NotFound from "./pages/404/404";

function App() {
  const renderRoutes = (routes) => {
    return routes.map(
      ({ path, component: Component, layout: Layout = Fragment }, index) => {
        return (
          <Route
            key={index}
            path={path}
            element={
              <Layout>
                <Component />
              </Layout>
            }
          />
        );
      }
    );
  };
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* public routes */}
          {renderRoutes(publicRoutes)}

          {/* private routes */}
          {renderRoutes(privateRoutes)}

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
