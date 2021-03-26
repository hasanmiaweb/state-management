import { createContext, useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Shipment from "./Components/Shipment/Shipment";

export const CategoryContext = createContext();

function App() {
  
  const [count, setCount] = useState(0);
  return (
    <CategoryContext.Provider value={count}>
      <Header count={count} setCount={setCount}></Header>
      <Home count={count}></Home>
      <Shipment count={count}></Shipment>
    </CategoryContext.Provider>
  );
}

export default App;
