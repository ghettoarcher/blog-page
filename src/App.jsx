import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArticlePage from "./Pages/ArticlePage";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:title" element={<ArticlePage />} />
        <Route path="sign-in" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
