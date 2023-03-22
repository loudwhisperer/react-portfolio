import React from "react";
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
  Outlet,
} from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Footer from "./components/Footer";
import About from "./components/pages/About";
import Blog from "./components/pages/Blog";
import Contact from "./components/pages/Contact";
import Projects from "./components/pages/Projects";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route path="contact" element={<Contact />} />
        <Route path="/" element={<About />} />
        <Route path="blog" element={<Blog />} />
        <Route path="projects" element={<Projects />} />
      </Route>
    )
  );
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
const Root = () => {
  return (
      <div>
        <NavTabs />
        <Outlet />
        <Footer />
      </div>
  );
};

export default App;
