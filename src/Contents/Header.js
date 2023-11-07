import React from "react";
import "./CSS/Header.css";
import { Call, Email, WatchLater } from "@mui/icons-material";
import { Wave } from "react-animated-text";
import IconSet from "./IconSet";
import ThemeSwitch from "./ThemeSwitch";
import useDarkSide from "../Hooks/useDarkSide";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setThem } from "../action";
import { useMediaQuery } from "usehooks-ts";
import MenuIcon from "@mui/icons-material/Menu";
import { CgMenuGridO } from "react-icons/cg";
import {
  Box,
  Drawer,
  Skeleton,
  SwipeableDrawer,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import styled from "@emotion/styled";
import useMenu from "../Hooks/useMenu";
import { Link, useLocation } from "react-router-dom";
import { MdAvTimer, MdOutlineCall, MdOutlineEmail } from "react-icons/md";

const Header = ({ open, setOpen, header }) => {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );
  const theme = useSelector((state) => state.PageSettings.isDark);
  //const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  const toggleDarkMode = (checked) => {
    //console.log(colorTheme);
    setTheme(colorTheme);
    setDarkSide((v) => !v);
  };

  React.useEffect(() => {
    dispatch(setThem(darkSide));
  }, [darkSide,theme]);
  return (
    <div className="">
      <div
        style={{
          position: "fixed",
          zIndex: 1,
          top: header ? 0 : -120,
          left: 0,
          overflow: "hidden",
          transition: " top 0.3s",
        }}
        className="bg-[#5500ff21] w-full px-5 py-2 hidden lg:block"
      >
        <div className="flex  justify-between">
          <div className="flex items-center">
            <IconSet />
            <div className="ml-4" />
            <ThemeSwitch onChange={toggleDarkMode} value={darkSide} />
          </div>
          <div className="flex mr-2  font-thin text-[14px]">
            <div className="flex items-center">
              <MdOutlineCall />
              <p className="ml-2">+8801761143991</p>
            </div>
            <div className="flex items-center ml-2">
              <MdOutlineEmail />
              <p className="ml-2">info@scientistx.com</p>
            </div>
            <div className="flex items-center ml-2">
              <MdAvTimer />
              <p className="ml-2">SUN - THU 10:00 pm - 1:00 am</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div
            style={{
              fontSize: "34px",
              alignItems: "flex-start",
            }}
          >
            <Wave
              text="Scientistx"
              effect="stretch"
              effectDuration={0.9}
              effectDelay={0.9}
              effectChange={0.7}
            />
          </div>
          <div className="flex gap-6 mr-2 font-semibold ">
            <Linker name={"Home"} route={"/"} />
            <Linker name={"Services"} route={"/services"} />
            <Linker name={"Products"} route={"/products"} />
            <Linker name={"News"} route={"/news"} />
            <Linker name={"Career"} route={"/career"} />
            <Linker name={"About"} route={"/about"} />
          </div>
        </div>
      </div>

      <div
        style={{
          position: "fixed",
          zIndex: 1,
          top: 0,
          left: 0,
          overflow: "hidden",
        }}
        className=" bg-[#5500ff21] w-full lg:hidden px-2 py-1 flex justify-between items-center"
      >
        <div
          style={{
            fontSize: "34px",
            alignItems: "flex-start",
            marginTop: "-5px",
          }}
        >
          <Wave
            text="Scientistx"
            effect="stretch"
            effectDuration={0.9}
            effectDelay={0.9}
            effectChange={0.7}
          />
        </div>
        <div>
          <CgMenuGridO onClick={() => setOpen(true)} size={30} />
        </div>
      </div>
    </div>
  );
};

export default Header;
export const BottomDrawer = ({ open, setOpen }) => {
  const drawerBleeding = 20;
  const container =
    window !== undefined ? () => window.document.body : undefined;
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );
  const theme = useSelector((state) => state.PageSettings.isDark);

  //const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  const toggleDarkMode = (checked) => {
    //console.log(colorTheme);
    setTheme(colorTheme);
    setDarkSide((v) => !v);
    
  };

  React.useEffect(() => {
    dispatch(setThem(darkSide));
  }, [darkSide]);
  return (
    <SwipeableDrawer
      container={container}
      anchor="bottom"
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      swipeAreaWidth={drawerBleeding}
      disableSwipeToOpen={false}
      ModalProps={{
        keepMounted: true,
      }}
    >
      <div className="absolute top-[-20px] flex justify-center items-center bg-white dark:bg-[#1b1b1b]  rounded-tl-[20px] rounded-tr-[20px] left-0 h-5 w-full">
        <div className="h-[7px] w-8 bg-gray-400 rounded-2xl" />
      </div>
      <div className="h-[65vh] overflow-y-scroll dark:text-white bg-white dark:bg-[#1b1b1b] px-4">
        <div className=" text-xl">Menus</div>
        <div className="flex flex-wrap gap-4 font-semibold mt-4">
          <Linker name={"Home"} route={"/"} />
          <Linker name={"Services"} route={"/services"} />
          <Linker name={"Products"} route={"/products"} />
          <Linker name={"News"} route={"/news"} />
          <Linker name={"Career"} route={"/career"} />
          <Linker name={"About"} route={"/about"} />
        </div>
        <div className="flex justify-between flex-wrap border-t border-dashed mt-4">
          <div className="flex items-center">
            <IconSet />
            <div className="ml-4" />
            <ThemeSwitch onChange={toggleDarkMode} value={darkSide} />
          </div>
          <div className="flex flex-wrap gap-2  font-thin text-[14px]">
            <div className="flex items-center">
              <MdOutlineCall />
              <p className="ml-2">+8801761143991</p>
            </div>
            <div className="flex items-center ">
              <MdOutlineEmail />
              <p className="ml-2">info@scientistx.com</p>
            </div>
            <div className="flex items-center">
              <MdAvTimer />
              <p className="ml-2">SUN - THU 10:00 pm - 1:00 am</p>
            </div>
          </div>
        </div>
        <div className=" text-xl mt-4">About Us</div>
        <div className="text-xs mt-2 text-justify">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing
        </div>
        <div className="text-sm my-4">@ Powered by ScientitX Organization</div>
      </div>
    </SwipeableDrawer>
  );
};
const Linker = ({ route, name, className }) => {
  const pathname = useLocation().pathname;
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => setHover(false)}
      className={`${pathname === route && "dark:text-yellow-300 text-blue-600"}  ${className}`}
    >
      <Link to={route}>{name}</Link>
      <div
        style={{
          width: hover ? 35 : 0,
        }}
        className={`link mx-auto dark:bg-yellow-300 bg-blue-600`}
      />
    </div>
  );
};
