import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Suspense } from "react";
import AppRoutes from "./routes";
import { LoadingOverlay } from "./components/LoadingOverlay";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingOverlay visible={true} />}>
        <AppRoutes />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
