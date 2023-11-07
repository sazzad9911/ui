import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Screens/Home";
import Career from "./Screens/Career";
import About from "./Screens/About";
import Members from "./Screens/Members";
import Services from "./Screens/Services";
import Loader from "./Contents/Loader";
import Alert from "./Contents/Alert";
import Canvas from "./Contents/Canvas";
import Graphic from "./Files/Graphic.svg";
import ParticlesBg from "particles-bg";
import React from "react";
import { useSelector } from "react-redux";
import MainLayout from "./Layouts/MainLayout";
import useDarkSide from "./Hooks/useDarkSide";
import { BottomDrawer } from "./Contents/Header";

function App() {
  const theme = useSelector((state) => state.PageSettings.isDark);
  

  const style = {
    canvas: {
      width: "100%",
      height: "100%",
      position: "absolute",
      top: "0px",
      left: "0px",
      backgroundImage: "url(" + Graphic + ")",
      backgroundSize: "cover",
      zIndex: -1,
      color: "#ffff",
      backgroundColor:"#f7f7f74f"
    },
    canvas2: {
      width: "100%",
      height: "100%",
      position: "absolute",
      top: "0px",
      left: "0px",
      zIndex: 0,
      color: "#ffff",
      backgroundColor:"#ffffffd2"
    },
    img: {
      width: "100%",
      height: "100%",
    },
  };
  return (
    <div className="dark:text-white text-[#0e0e31]">
      {theme ? (
        <ParticlesBg type="lines" num={10} bg={style.canvas} />
      ) : (
        <div>
          <div style={style.canvas2}></div>
          <div style={style.canvas}></div>
        </div>
      )}
      <Routes>
        <Route path="/career" element={<MainLayout component={<Career />}/>} />
        <Route path="/about" element={<MainLayout component={<About />}/>} />
        <Route path="/products" element={<MainLayout component={<Services />}/>} />
        <Route path="/services" element={<MainLayout component={<Services />}/>} />

        {
          //for using single link add link here
        }
        <Route path="/" element={<MainLayout component={<Home />}/>} />
        <Route path="*" element={<MainLayout component={<div />}/>} />
      </Routes>
      {
        //authentication page will situate here
      }
      <SingleLinkRoute />
      <Loader />
      <Alert />
      
    </div>
  );
}

export default App;
//array path should contain a json array object which
//include 'name' of the path and 'element' which is a JSX element.
const SingleLinkRoute = ({ arrayPath }) => {
  if (arrayPath && arrayPath.length > 0) {
    arrayPath.forEach((path) => {
      let join = "/links/" + path.name;
      return <Route name={join} element={path.element} />;
    });
  } else {
    return <div></div>;
  }
};
