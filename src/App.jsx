import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";
import Header from "./components/Header";
import { AppContextProvider } from "./lib/AppContext";
import LoadingPage from "./pages/LoadingPage";
class App extends React.Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 2000);
  }
  render() {
    const { loading } = this.state;
    return (
      <AppContextProvider>
        <Router>
          {loading ? (
            <LoadingPage />
          ) : (
            <>
              <Header />
              <Routes>
                <Route path="/" element={<ProductDetails />} />
              </Routes>
            </>
          )}
        </Router>
      </AppContextProvider>
    );
  }
}
export default App;
