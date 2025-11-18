import { Outlet } from "react-router-dom";
import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";

const App = () => {
  return (
    <div className="">
     <Header/>
      <Outlet/>
     <Footer/>
    </div>
  );
};

export default App;
