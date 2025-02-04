import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Home from "./Pages/Home";
import Favorites from "./Pages/Favorites";
import Movie from "./Pages/Movie";
import { Provider } from "react-redux";
import store from "./Redux/store";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/movie/:id" element={<Movie />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Provider>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
