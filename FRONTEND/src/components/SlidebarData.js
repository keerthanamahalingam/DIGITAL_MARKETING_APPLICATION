import React from "react";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Login",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text"
  },
  {
    title: "Home",
    path: "/Home",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text"
  },
  {
    title: "About",
    path: "/About",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text"
  },
  {
    title: "Contact",
    path: "/Contact",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text"
  },
  // {
  //   title: "Payment",
  //   path: "/Payment",
  //   icon: <FaIcons.FaEnvelopeOpenText />,
  //   cName: "nav-text"
  // },
 
];
