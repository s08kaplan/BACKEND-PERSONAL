import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import ProductsProvider from "./context/ProductsProvider";

function App() {
  return (
    <ProductsProvider>
      <Router>
        <AppRouter />
      </Router>
    </ProductsProvider>
  );
}

export default App;
