import React, {useState} from "react";
import About from "./components/about";
import Contact from "./components/contact";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Footer from "./components/footer";
import Timeline from "./components/timeline";
import Sidebar from "./components/sidebar";
import AOS from 'aos';
import 'flowbite';
import 'aos/dist/aos.css';
import useScrollBlock from "./components/useScrollBlock";
import { useCookies } from 'react-cookie';
import ScrollToTop from "react-scroll-up";
import {FaArrowCircleUp} from 'react-icons/fa';
import ReactGA from "react-ga4";

export default function App() {

  const [cookies, setCookie, removeCookie] = useCookies(['userCookies']);

  const [blockScroll, allowScroll] = useScrollBlock();

  AOS.init();

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
      setIsOpen(!isOpen);
      isOpen ?  allowScroll() : blockScroll();
  }  

  const functionSetCookie = (name, boolean, options) => {
      setCookie(name, boolean, options);
  }

  const functionRemoveCookie = (name) => {
      removeCookie(name);
  }

  return (
    <main className="text-gray-400 bg-gray-900 body-font zeroRightClassName">
      <Navbar toggle={toggle} cookies={cookies}/>
      <Sidebar cookies={cookies} isOpen={isOpen} toggle={toggle}/>
      <About cookies={cookies} />
      <Timeline cookies={cookies} />
      <Projects cookies={cookies} />
      <Skills cookies={cookies} />
      <Contact cookies={cookies} />
      <Footer cookies={cookies} functionSetCookie={functionSetCookie} functionRemoveCookie={functionRemoveCookie} />
      <div id="scrollArrowUp">
        <ScrollToTop duration={500} easing="linear" showUnder={200}>
          <FaArrowCircleUp onClick={() => {
                                            if (cookies.analyticsCookie){
                                              ReactGA.event({
                                                category: "Button to TopTop",
                                                action: "about"
                                              });
                                            }
                                            window['ga-disable-' + process.env.REACT_APP_GA4_KEY] = true;
                                            setTimeout(() => {
                                              window['ga-disable-' + process.env.REACT_APP_GA4_KEY] = false;
                                            }, 500);
                                          }} 
            size={"50px"} 
          />
        </ScrollToTop>
      </div>
    </main>
  );
}
