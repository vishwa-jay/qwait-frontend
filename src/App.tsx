import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/layout";
import AppRoutes from "./routes";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <AppRoutes />
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
