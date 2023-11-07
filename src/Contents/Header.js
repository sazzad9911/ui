import React from "react";
import "./CSS/Header.css";
import { Call, Email, WatchLater } from "@mui/icons-material";
import { Wave } from "react-animated-text";
import IconSet from "./IconSet";
import ThemeSwitch from "./ThemeSwitch";
import useDarkSide from "../Hooks/useDarkSide";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setThem } from "../action";
import { useMediaQuery } from "usehooks-ts";
import MenuIcon from "@mui/icons-material/Menu";
import { CgMenuGridO } from "react-icons/cg";
import { Box, Drawer, Skeleton, SwipeableDrawer, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import styled from "@emotion/styled";

const Header = () => {
  const [header, setHeader] = React.useState(true);
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );
  const [open, setOpen] = useState(false);
  const matches = useMediaQuery("(min-width: 768px)");
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
    <div className="">
      <div
        style={{
          position: "fixed",
          zIndex: 1,
          top: 0,
          left: 0,
          overflow: "hidden",
        }}
        className="bg-[#5500ff21]  w-full px-5 py-2 hidden lg:block"
      >
        <div className="flex  justify-between">
          <div className="flex items-center">
            <IconSet />
            <div className="ml-4" />
            <ThemeSwitch onChange={toggleDarkMode} value={darkSide} />
          </div>
          <div className="flex w-[610px] ">
            <div className="flex items-center">
              <Call />
              <p className="ml-2">+8801761143991</p>
            </div>
            <div className="flex items-center ml-2">
              <Email />
              <p className="ml-2">info@scientistx.com</p>
            </div>
            <div className="flex items-center ml-2">
              <WatchLater />
              <p className="ml-2">SUN - THU 10:00 pm - 1:00 am</p>
            </div>
          </div>
        </div>
        <div className=" ">
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
          <div className="right"></div>
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
        <div className="text-black">
          <CgMenuGridO
            onClick={() => setOpen(true)}
            size={30}
            className="text-[#000]"
          />
        </div>
      </div>
      <BottomDrawer open={open} setOpen={setOpen} />
    </div>
  );
};

export default Header;
const BottomDrawer = ({ open, setOpen }) => {
  const drawerBleeding = 56;
  const StyledBox = styled(Box)(({ theme }) => ({
    //backgroundColor: theme.palette.mode === "light" ? "#fff" : grey[800],
  }));

  const Puller = styled(Box)(({ theme }) => ({
    width: 30,
    height: 6,
   // backgroundColor: theme.palette.mode === "light" ? grey[300] : grey[900],
    borderRadius: 3,
    position: "absolute",
    top: 8,
    left: "calc(50% - 15px)",
  }));
  const container =
    window !== undefined ? () => window.document.body : undefined;
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
      <StyledBox
        sx={{
          position: "absolute",
          top: 20,
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
          visibility: "visible",
          right: 0,
          left: 0,
          height:"20px"
        }}
      >
        <Puller />
        <Typography sx={{ p: 2, color: "text.secondary" }}>
          51 results
        </Typography>
      </StyledBox>
      <StyledBox
        sx={{
          px: 2,
          pb: 2,
          height: "50vh",
          overflow: "auto",
        }}
      >
        <Skeleton variant="rectangular" height="50vh" />
      </StyledBox>
    </SwipeableDrawer>
  );
};
