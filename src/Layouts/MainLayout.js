import React from "react";
import { Parallax, ParallaxLayer, useScroll } from "@react-spring/parallax";
import { useRef } from "react";
import Header, { BottomDrawer } from "../Contents/Header";
import Footer from "../Contents/Footer";
import { useState } from "react";
import { Global } from "@emotion/react";
import { useEffect } from "react";
import { useMediaQuery } from "@mui/material";

export default function MainLayout({ component, page }) {
  const parallaxRef = useRef();
  const [open, setOpen] = useState(false);
  const matches = useMediaQuery("(min-width: 1024px)");
  const [prevScrollpos, setPrevScrollpos] = useState(0);
  const [header, setHeader] = React.useState(true);
  useEffect(() => {
    if (matches) {
      setOpen(false);
    }
  }, [matches]);
  const scrollListener = () => {
    const handleWheelEvent = () => {
      const { container, current } = parallaxRef.current;
      const scrollpercent =
        current / (container.current.scrollHeight - window.innerHeight);
      //updateScroll(scrollpercent)
    };
    window.addEventListener("wheel", handleWheelEvent);
    return () => {
      window.removeEventListener("wheel", handleWheelEvent);
    };
  };
  useEffect(scrollListener, []);
  const updateScroll = (val) => {
    if (prevScrollpos > val) {
      setHeader(true);
    } else {
      setHeader(false);
    }
    setPrevScrollpos(val);
  };

  return (
    <div>
      <Global
        styles={{
          ".MuiDrawer-root > .MuiPaper-root": {
            height: `calc(50% - 20}px)`,
            overflow: "visible",
          },
        }}
      />
      <Header header={header} open={open} setOpen={setOpen} />
      <Parallax
        ref={parallaxRef}
        pages={page ? page : 5}
        style={{ top: "0", left: "0" }}
        onScroll={(e) => {
          console.log(e.currentTarget);
        }}
        on
      >
        {component}
        <ParallaxLayer
          offset={page ? page - 1 : 4}
          speed={page ? (page - 1) / 2 : 2}
          
        >
          <Footer />
          
        </ParallaxLayer>
      </Parallax>

      <BottomDrawer open={open} setOpen={setOpen} />
    </div>
  );
}
