import {  BrowserRouter, Link, Route, Routes} from "react-router-dom"
import  Home  from "../components/Screens/Home";
import About from "../components/Screens/About";
import Contact from "../components/Screens/Contact";
import Post from '../components/Screens/Post'
import Blogs from '../components/Screens/Blogs'


export default function AppRouter(){


    return(
        <>
        <BrowserRouter>
        
        <nav>
        <Link to="/home">Home Page</Link>
        <Link to="/about">About Page</Link>
        <Link to="/Contact">Contact Page</Link>
        <Link to="/Post">Post Page</Link>
        <Link to="/Blogs">Blogs Page</Link>
        </nav>

        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Post" element={<Post />} />
          <Route path="Blogs" element={<Blogs />} />
        </Routes>

        </BrowserRouter>
        </>
    );
}