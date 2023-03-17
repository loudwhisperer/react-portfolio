import React from 'react';
import { Link } from 'react-router-dom';

export default function NavTabs(){
    return (
      <nav className="bg-gray-50 dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-3 mx-auto md:px-6">
          <div className="flex items-center">
            <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
              <li>
                <Link
                  to="home"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="projects"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="blog"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}

