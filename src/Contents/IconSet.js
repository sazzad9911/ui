import React from "react";
import "./CSS/IconSet.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faYoutube,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";

const IconSet = () => {
  return (
    <div className=" grid grid-cols-4 gap-2">
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
        <Twitter className=" hover:text-blue-400"/>
      </div>
    </div>
  );
};

export default IconSet;
