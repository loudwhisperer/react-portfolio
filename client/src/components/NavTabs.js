import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Button from "./NavButton";

export default function NavTabs(){
  let Links = [
    { name: "Home", link: "home" },
    { name: "About", link: "about" },
    { name: "Projects", link: "projects" },
    { name: "Blog", link: "blog" },
  ];
  let [open, setOpen] = useState(false);
    return (
      <header className="bg-gray-50 dark:bg-gray-700 p-4 shadow-md w-full  top-0 left-0">
        <nav className="flex justify-between items-center w-[92%]  mx-auto">
          <div
            className="font-bold text-2xl cursor-pointer flex items-center 
      text-white"
          >
            <span className="text-4xl text-indigo-600 mr-1 pt-2">
              <ion-icon name="man-outline"></ion-icon>
            </span>
            Brendan Borowski
          </div>
          <div className="duration-500 md:static absolute  md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full flex items-center px-5">
            <div
              onClick={() => setOpen(!open)}
              className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
            >
              <ion-icon name={open ? "close" : "menu"}></ion-icon>
            </div>

            <ul
              className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
                open ? "top-20 " : "top-[-490px]"
              }`}
            >
              {Links.map((link) => {
                return (
                  <li>
                    <Link
                      to={link.link}
                      className="text-gray-900 dark:text-white hover:underline md:ml-8 text-xl md:my-0 my-7"
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <Button>
            <Link to="contact">Contact</Link>
          </Button>
        </nav>
      </header>
    );
    }

