import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

import Background from "./components/Background";
import React from "react";
import Footer from "./components/Footer";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Scientistx Technology | Success your ideas with us ",
  description: "ScientistX is a multinational consortium founded by the ScientistX Group in 2021 with the aim of leveraging technology to empower humanity. This visionary initiative seeks to harness the power of cutting-edge technology to address pressing global challenges and enhance the well-being of individuals and communities worldwide." ,
  keywords:"scientistx, scientistx technology, tech, technology, software, scientistx tech, scientistx technology, scientist, scientist technology, web development, app development, iot, management",
  twitter:{
    card:"summary_large_image",
  },
  metadataBase:"https://scientistx.tech"
};
const style = {
  canvas: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: "0px",
    left: "0px",
    backgroundImage: "url('./Graphic.svg')",
    backgroundSize: "cover",
    zIndex: -11,
    color: "#ffff",
    backgroundColor: "#333333",
  },
};
export default function RootLayout({ children, page }) {
  return (
    <html lang="en">
    
      <body style={{backgroundColor:"#000"}}  className={inter.className}>
        
        <Background />
        <Providers>
          <div>
            <Header />
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
