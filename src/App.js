import { useEffect,createContext, useState } from "react";
import "./App.css";
import axios from 'axios'
import Home from "./Componets/Home";

export  const senddata = createContext();
function App() {    
  const [Apidata,setApidata] = useState();
  const apidata = async () => {
    let res = await axios.get(
      `https://gateway.marvel.com:443/v1/public/comics?ts=1&hash=ae1895a77e42f57a2ff88de40c57a3e6&apikey=99e9936c87d485c889aa77e299bdda7c`
    );
    setApidata(res)
  };
    
    

  useEffect(() => {
    apidata();
  }, []);
  return (
    <>
    <senddata.Provider value={Apidata}>
      <Home />
    </senddata.Provider>
     
    </>
  );
}

export default App;
