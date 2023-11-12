import React from "react";
import png from "./../Files/Scientixtx.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faYoutube,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { useSelector } from "react-redux";
import { orange, purple } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Footer = () => {
  const theme = useSelector((state) => state.PageSettings.isDark);

  return (
    <div className="h-[100vh] flex items-end ">
      <div className=" bg-[#5500ff21] items-end  rounded-tl-[15vw] w-full  px-4 py-2 ">
        <div className="w-full flex justify-center">
          <div className="grid grid-cols-2 sm:grid-cols-3  mx-5 lg:grid-cols-5 items-end gap-4 max-w-[1500px]">
            <div className=" lg:mt-0 mt-8 col-span-2 sm:col-span-3 lg:col-span-2">
              <img src={png} className="w-[20vh]" />
              <div className="line-clamp-3 text-justify">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing
              </div>
            </div>
            <div className="h-full ">
              <div className="font-semibold mb-2 text-start">POLICIES</div>
              <div className=" items-start flex flex-col gap-2">
                <Link to={"/"}>ABOUT</Link>
                <Link to={"/"}> SERVICES</Link>
                <Link to={"/"}>JOB OPPORTUNITIES</Link>
                <Link to={"/"}>CALENDER OF EVENTS</Link>
                <Link to={"/"}> TIME AND TIDES</Link>
                <Link to={"/"}> PROJECT PROPOSAL</Link>
                <Link to={"/"}> LOCATION</Link>
              </div>
            </div>
            <div className="h-full">
              <div className="font-semibold mb-2 sm:text-center lg:text-center text-end">
                NEWSLETTERS
              </div>
              <div className=" flex flex-col gap-2 sm:items-center lg:items-center items-end">
                <Link to={"/"}>LARGER PROJECT</Link>
                <Link to={"/"}> LESS DESTINATIONS</Link>
                <Link to={"/"}>CURRENT SUBJECTS</Link>
                <Link to={"/"}>MARKET VALUES</Link>
                <Link to={"/"}> ACCOUNT SETTINGS</Link>

                <Link to={"/"}> ACCOUNT LINKS</Link>
                <Link to={"/"}> LATEST NEWS</Link>
              </div>
            </div>
            <div className="h-full">
              <div className="font-semibold mb-2 sm:text-end lg:text-end text-start">
                EXTERNALS
              </div>
              <div className=" flex flex-col gap-2 sm:items-end lg:items-end items-start">
                <Link to={"/"}>MEMBER</Link>
                <Link to={"/"}> OPPORTUNITIES</Link>
                <Link to={"/"}>UNDERWORLDS</Link>
                <Link to={"/"}>EXTERNAL</Link>
                <Link to={"/"}> BACK MAGICS</Link>
                <Link to={"/"}> STORAGE BUCKET</Link>
                <Link to={"/"}> GREAT KNOWS</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t my-4 pt-4 ">
          <div className=" mx-auto flex justify-center gap-4 ">
            <div>
              <Facebook className=" hover:text-blue-400" />
            </div>
            <div>
              <Instagram className=" hover:text-blue-400" />
            </div>
            <div>
              <YouTube className=" hover:text-blue-400" />
            </div>
            <div>
              <Twitter className=" hover:text-blue-400" />
            </div>
          </div>
          <p className="text-center mt-2">
            @ {new Date().getFullYear()} - All right reserved by ScientistX
            Organization
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
