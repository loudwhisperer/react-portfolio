import React from 'react'
import { Link } from 'react-router-dom';

export default function Footer(){
  Symbol = [
{
  icon: "logo-linkedin",
  link: "https://www.linkedin.com/in/brendan-borowski-886813230 "
},
{
  icon:"logo-github",
  link: "https://github.com/loudwhisperer"
},
{
  icon: "logo-facebook",
  link: "https://www.facebook.com/brendan.borowski.3"
},
{
  icon: "logo-instagram",
  link:"https://www.instagram.com/driftaway44/"
}
  ];
    return (
      <section>
        <footer className="bg-gray-50 dark:bg-gray-700 p-4 shadow-md w-full  top-0 left-0">
          <section className="flex justify-center">
             <ul
              className={"md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in"
              }
            >
           {Symbol.map((totem) => {
                return (
                  <li className="text-4xl text-indigo-600 mr-10 pt-2"> 
                  <Link
                      to={totem.link}
                      className="text-4xl text-indigo-600 mr-10 pt-2"
                      target="_blank"
                    >
                      <ion-icon name={totem.icon}></ion-icon>
                    </Link>
                  </li>
                );
              })}
              </ul>
              </section>
        </footer>
      </section>
    );
}