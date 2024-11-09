import MainContent from "./MainContent";
import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";
const Home = () => {
  return (
    <div className="bg-zinc-900 pt-20">
      <div className="container mx-auto px-5 pb-7">
        <Header />
        <MainContent />
        <Footer />
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
