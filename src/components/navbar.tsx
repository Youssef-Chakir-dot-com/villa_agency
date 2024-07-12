import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faEnvelope,
  faMap,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Button1 from "./Buttons";

function Navbar() {
  return (
    <nav className="pb-4 fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="flex justify-between mx-10 border-accent border-b-2 pb-1">
        <div className="flex justify-between gap-x-2">
          <div className="flex justify-center items-center gap-x-2 border-r-2 border-accent pr-2">
            <FontAwesomeIcon icon={faEnvelope} style={{ color: "#f35525" }} />
            <span className="text-light-green text-[11px]">
              youssef@gmail.com
            </span>
          </div>
          <div className="flex justify-center items-center gap-x-2">
            <FontAwesomeIcon icon={faMap} style={{ color: "#f35525" }} />
            <span className="text-light-green text-[11px]">
              Hay Dakhla / Agadir
            </span>
          </div>
        </div>

        <div className="flex gap-x-2">
          <Link href="#">
            {" "}
            <i className="bi bi-facebook"></i>{" "}
          </Link>
          <Link href="#">
            {" "}
            <i className="bi bi-instagram"></i>{" "}
          </Link>
          <Link href="#">
            {" "}
            <i className="bi bi-linkedin"></i>{" "}
          </Link>
          <Link href="#">
            {" "}
            <i className="bi bi-twitter"></i>{" "}
          </Link>
        </div>
      </div>
      <div className=" flex justify-around mt-3 items-center">
        <div>
          <h1 className="font-bold text-[20px]">VILLA</h1>
        </div>
        <div className="flex gap-x-7 items-center">
          <Link
            href="#"
            className="hover:text-primary font-medium text-[14px] "
          >
            Home
          </Link>
          <Link
            href="#"
            className="hover:text-primary font-medium  text-[14px]"
          >
            Properties
          </Link>
          <Link
            href="#"
            className="hover:text-primary font-medium  text-[14px]"
          >
            Property Details
          </Link>
          <Link
            href="#"
            className="hover:text-primary font-medium  text-[14px]"
          >
            Contact Us
          </Link>
          <Button1 />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
