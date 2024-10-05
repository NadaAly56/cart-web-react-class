import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";
import Header from "./components/Header";
import { AppContextProvider } from "./lib/AppContext";
class App extends React.Component {
  state = { name: "nada" };
  constructor(props) {
    super(props);
    this.changeName = this.changeName.bind(this);
  }
  changeName() {
    this.setState({
      name: "Nadoda",
    });
  }
  render() {
    return (
      <AppContextProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<ProductDetails />} />
          </Routes>
        </Router>
      </AppContextProvider>
    );
  }
}
export default App;
