import { React, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { Fallback } from "./components/fallback";
import Loader from "./assets/image/indicator.gif";
const Home = lazy(() => import("./pages/home/home"));
const About = lazy(() => import("./pages/about/about"));
const Practice = lazy(() => import("./pages/practice/practice"));
const Contact = lazy(() => import("./pages/contact/contact"));
const Error = lazy(() => import("./components/error404"));

function App() {
  return (
    <ErrorBoundary FallbackComponent={Fallback}>
      <Suspense
        fallback={
          <div
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <img src={Loader} alt="Loading GIF" />
          </div>
        }
      >
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/practice" element={<Practice />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
