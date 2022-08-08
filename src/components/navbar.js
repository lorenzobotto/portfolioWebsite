import { ArrowRightIcon } from "@heroicons/react/solid";
import {FaBars} from 'react-icons/fa';
import styled from 'styled-components'
import React, {useState, useEffect} from "react";
import ReactGA from 'react-ga4';
import { Link } from "react-scroll";

const MobileIcon = styled.div`
    display: none;  

    @media screen and (max-width: 767px) {
        color: #fff;
        display: block;
        position: absolute;
        top: 0;
        right: 2px;
        transform: translate(-100%, 79%);
        font-size: 1.6rem;
        cursor: pointer;
    }
`

export default function Navbar({toggle, cookies}) {

  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowHeight(window.innerHeight);
      setWindowWidth(window.innerWidth);
    }
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header id="headerSection" className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row">
        {/* eslint-disable-next-line */}
        <div className="title-font font-medium text-white md:mb-0">
          <Link to="about" smooth={true} duration={500} className="text-xl" style={{cursor: "pointer"}}
            onClick={() => {
              if (cookies.analyticsCookie){
                ReactGA.event({
                  category: "Navbar Link",
                  action: "about"
                });
                window['ga-disable-' + process.env.REACT_APP_GA4_KEY] = true;
                setTimeout(() => {
                  window['ga-disable-' + process.env.REACT_APP_GA4_KEY] = false;
                }, 500);
              }
            }
            }
          >
            Lorenzo Botto
          </Link>
        </div>
        <MobileIcon id="mobileIcon" onClick={toggle}>
          <FaBars style={{verticalAlign: 'unset'}}/>
        </MobileIcon>
        <nav id="nav" className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <Link to="timeline" isDynamic={true} offset={windowHeight >= 818 && windowWidth >= 1280 ? 40 : -60} smooth={true} duration={500} style={{transition: "0.2s ease-in-out", cursor: "pointer"}} className="mr-5 hover:text-white" 
            onClick={() => {
              if (cookies.analyticsCookie){
                ReactGA.event({
                  category: "Navbar Link",
                  action: "Timeline"
                });
                window['ga-disable-' + process.env.REACT_APP_GA4_KEY] = true;
                setTimeout(() => {
                  window['ga-disable-' + process.env.REACT_APP_GA4_KEY] = false;
                }, 500);
              }
            }
            }
            >
            Scuola e lavoro
          </Link>
          <Link to="projects" offset={-120} smooth={true} duration={500} style={{transition: "0.2s ease-in-out", cursor: "pointer"}} className="mr-5 hover:text-white"
            onClick={() => {
              if (cookies.analyticsCookie){
                ReactGA.event({
                  category: "Navbar Link",
                  action: "progetti"
                });
                window['ga-disable-' + process.env.REACT_APP_GA4_KEY] = true;
                setTimeout(() => {
                  window['ga-disable-' + process.env.REACT_APP_GA4_KEY] = false;
                }, 500);
              }
            }
            }
          >
            Progetti sviluppati
          </Link>
          <Link to="skills" offset={-60} smooth={true} duration={500} style={{transition: "0.2s ease-in-out", cursor: "pointer"}} className="mr-5 hover:text-white"
            onClick={() => {
              if (cookies.analyticsCookie){
                ReactGA.event({
                  category: "Navbar Link",
                  action: "skills"
                });
                window['ga-disable-' + process.env.REACT_APP_GA4_KEY] = true;
                setTimeout(() => {
                  window['ga-disable-' + process.env.REACT_APP_GA4_KEY] = false;
                }, 500);
              }
            }
            }
          >
            Skills
          </Link>
        </nav>
        <Link
          offset={-60}
          smooth={true} 
          duration={500}
          id="buttonNav"
          to="contact"
          style={{transition: "0.2s ease-in-out", cursor: "pointer"}}
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
          onClick={() => {
            if (cookies.analyticsCookie){
              ReactGA.event({
                category: "Navbar Link",
                action: "contact"
              });
              window['ga-disable-' + process.env.REACT_APP_GA4_KEY] = true;
              setTimeout(() => {
                window['ga-disable-' + process.env.REACT_APP_GA4_KEY] = false;
              }, 500);
            }
          }
          }
        >
          Contattami
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </Link>
      </div>
    </header>
  );
}