import React, {useRef, useEffect} from "react";
import ReactGA from "react-ga4";
import { Link } from "react-scroll";
import { SocialIcon } from 'react-social-icons';

export default function About({cookies}) { 

  const myRef = useRef();

  const [firstIntersect, setFirstIntersect] = React.useState(false);

  useEffect(() => {

    if (!firstIntersect) {
      const opts = {
        threshold: window.innerHeight >= 850 && window.innerWidth >= 1280 ? 0.5 : 0.3
      }
  
      const callback = (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          if (!window['ga-disable-' + process.env.REACT_APP_GA4_KEY]){
              ReactGA.event({
                category: "scroll",
                action: "about"
              });
            setFirstIntersect(true);
            observer.unobserve(myRef.current);
          }
          
        }
      }
      const observer = new IntersectionObserver(callback, opts)
      observer.observe(myRef.current);

      return () => {
        observer.unobserve(myRef.current);
      }
    }

    // eslint-disable-next-line
  }, [cookies]);

  

  return (
    <section ref={myRef} data-aos="fade-up" id="about" className="pb-10">
      <div className="container mx-auto flex px-10 py-10 md:py-20 md:pb-10 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-3/5 lg:w-full lg:pr-24 md:pr-16 mr-0 flex flex-col md:items-start mb-16 md:mb-0 items-center text-center md:text-left">
          <div>
            <h1 className="title-font lg:text-4xl text-3xl mb-4 font-medium text-white">
              Ciao, sono Lorenzo.
            </h1>
            <h1 className="title-font lg:text-3xl text-2xl mb-4 font-medium text-white">
              Questo è il mio portfolio personale da programmatore.
            </h1>
          </div>
          <p id="aboutDesc" className="mb-8 leading-relaxed text-left">
            Coltivo la passione dell'informatica e della programmazione fin da piccolo.<br />
            Dopo il diploma in Sistemi Informativi Aziendali, ho proseguito gli studi frequentando l'Università di Informatica a Torino dove ho conseguito una Laurea Triennale. In corso la Laurea Magistrale in Intelligenza Artificiale.<br />
            Per l'università ho sviluppato diversi progetti ed in più ho collaborato con un'azienda informatica per lo sviluppo di un chatbot conversazionale.
          </p>
          <div className="flex justify-center mb-10" style={{textAlign: "center"}}>
            <Link
              style={{transition: "0.2s ease-in-out", cursor: "pointer"}}
              to="contact"
              offset={-60}
              smooth={true}
              duration={500}
              className="flex justify-center inline-block text-white bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-800 rounded text-lg w-32 sm:w-36"
              onClick={() => {
                if (cookies.analyticsCookie){
                  ReactGA.event({
                    category: "buttonAbout",
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
            </Link>
            <Link
              style={{transition: "0.2s ease-in-out", cursor: "pointer"}}
              to="projects"
              offset={-120}
              smooth={true}
              duration={500}
              className="ml-4 inline-block text-white bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-800 rounded text-lg w-32 sm:w-36"
              onClick={() => {
                if (cookies.analyticsCookie){
                  ReactGA.event({
                    category: "buttonAbout",
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
              Progetti
            </Link>
          </div>
          <div className="flex justify-center">
            <SocialIcon className="mr-3 sm:mr-5" id="socialIconGithub" url="https://github.com/lorenzobotto" bgColor="#29374a" fgColor="white" target="_blank" style={{width: "44px", height: "44px"}}
              onMouseEnter={() => {
                document.getElementById("socialIconGithub").getElementsByClassName("social-svg-mask")[0].style.fill = "black";
              }}
              onMouseLeave={() => {
                document.getElementById("socialIconGithub").getElementsByClassName("social-svg-mask")[0].style.fill = "#29374a";
              }}
              onAuxClick={() => {
                  if (cookies.analyticsCookie){
                      ReactGA.event({
                      category: "About Link",
                      action: "github"
                      });
                  }}
                }
                onClick={() => {
                  if (cookies.analyticsCookie){
                      ReactGA.event({
                      category: "About Link",
                      action: "github"
                      });
                  }}
                }
            />
            <SocialIcon className="mr-3 sm:mr-5" id="socialIconFacebook" url="https://www.facebook.com/lorenzo.botto.35" fgColor="white" target="_blank" style={{width: "44px", height: "44px"}} 
              onMouseEnter={() => {
                document.getElementById("socialIconFacebook").getElementsByClassName("social-svg-mask")[0].style.fill = "black";
              }}
              onMouseLeave={() => {
                document.getElementById("socialIconFacebook").getElementsByClassName("social-svg-mask")[0].style.fill = "rgb(59, 89, 152)";
              }}
              onAuxClick={() => {
                if (cookies.analyticsCookie){
                    ReactGA.event({
                    category: "About Link",
                    action: "facebook"
                    });
                }}
              }
              onClick={() => {
                if (cookies.analyticsCookie){
                    ReactGA.event({
                    category: "About Link",
                    action: "facebook"
                    });
                }}
              }
            />
            <SocialIcon className="mr-3 sm:mr-5" id="socialIconInstagram" url="https://www.instagram.com/lorenzobotto_" fgColor="white" target="_blank" style={{width: "44px", height: "44px"}} 
              onMouseEnter={() => {
                document.getElementById("socialIconInstagram").getElementsByClassName("social-svg-mask")[0].style.fill = "black";
              }}
              onMouseLeave={() => {
                document.getElementById("socialIconInstagram").getElementsByClassName("social-svg-mask")[0].style.fill = "rgb(233, 68, 117)";
              }}
              onAuxClick={() => {
                if (cookies.analyticsCookie){
                    ReactGA.event({
                    category: "About Link",
                    action: "instagram"
                    });
                }}
              }
              onClick={() => {
                if (cookies.analyticsCookie){
                    ReactGA.event({
                    category: "About Link",
                    action: "instagram"
                    });
                }}
              }
            />
            <SocialIcon className="mr-3 sm:mr-5" id="socialIconLinkedin" url="https://www.linkedin.com/in/lorenzo-botto" fgColor="white" target="_blank" style={{width: "44px", height: "44px"}}
              onMouseEnter={() => {
                document.getElementById("socialIconLinkedin").getElementsByClassName("social-svg-mask")[0].style.fill = "black";
              }}
              onMouseLeave={() => {
                document.getElementById("socialIconLinkedin").getElementsByClassName("social-svg-mask")[0].style.fill = "rgb(0, 127, 177)";
              }}
              onAuxClick={() => {
                if (cookies.analyticsCookie){
                    ReactGA.event({
                    category: "About Link",
                    action: "linkedin"
                    });
                }}
              }
              onClick={() => {
                if (cookies.analyticsCookie){
                    ReactGA.event({
                    category: "About Link",
                    action: "linkedin"
                    });
                }}
              }
            />
            <SocialIcon id="socialIconPosta" url="mailto:info@lorenzobotto.it" bgColor="#ea4335" fgColor="white" target="_blank" style={{width: "44px", height: "44px"}}
              onMouseEnter={() => {
                document.getElementById("socialIconPosta").getElementsByClassName("social-svg-mask")[0].style.fill = "black";
              }}
              onMouseLeave={() => {
                document.getElementById("socialIconPosta").getElementsByClassName("social-svg-mask")[0].style.fill = "#ea4335";
              }}
              onAuxClick={() => {
                if (cookies.analyticsCookie){
                    ReactGA.event({
                    category: "About Link",
                    action: "email"
                    });
                }}
              }
              onClick={() => {
                if (cookies.analyticsCookie){
                    ReactGA.event({
                    category: "About Link",
                    action: "email"
                    });
                }}
              }
            />
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full flex">
          <img
            className="object-center rounded h-96 w-62 md:w-full md:h-auto lg:w-9/12 xl:w-3/5 pb-8"
            style={{margin: "0 auto"}}
            alt="fotoLorenzo"
            src="./fotopersonale.png"
          />
        </div>
      </div>
    </section>
  );
}