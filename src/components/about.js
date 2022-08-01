import React, {useRef, useEffect} from "react";
import ReactGA from "react-ga4";
import { Link } from "react-scroll";
import { SocialIcon } from 'react-social-icons';

export default function About({cookies}) { 

  const myRef = useRef();

  useEffect(() => {
    const opts = {
      threshold: 0.5
    }

    const callback = (entries, observer) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        if (cookies.analyticsCookie){
            ReactGA.event({
              category: "scroll",
              action: "about"
            });
            observer.unobserve(myRef.current);
        }
      }
    }

    const observer = new IntersectionObserver(callback, opts)
    observer.observe(myRef.current);

    // eslint-disable-next-line
  }, [cookies]);

  return (
    <section ref={myRef} data-aos="fade-up" id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <div>
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Ciao, sono Lorenzo.
            </h1>
            <h1 className="title-font sm:text-3xl text-2xl mb-4 font-medium text-white">
              Questo è il mio portfolio personale da programmatore.
            </h1>
          </div>
          <p className="mb-8 leading-relaxed">
            Coltivo la passione dell'informatica e della programmazione fin da piccolo.<br />
            Dopo il diploma in Sistemi Informativi Aziendali, ho proseguito gli studi frequentando l'Università di Informatica a Torino dove ho conseguito una Laurea Triennale. In corso la Laurea Magistrale in Intelligenza Artificiale.<br />
            Per l'università ho sviluppato diversi progetti ed in più ho collaborato con un'azienda informatica per lo sviluppo di un chatbot conversazionale.
          </p>
          <div className="flex justify-center mb-10" style={{textAlign: "center"}}>
            <Link
              style={{transition: "0.2s ease-in-out", cursor: "pointer"}}
              to="contact"
              smooth={true}
              duration={500}
              className="inline-block text-white bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-800 rounded text-lg w-36"
              onClick={() => {
                if (cookies.analyticsCookie){
                  ReactGA.event({
                    category: "buttonAbout",
                    action: "contact"
                  });
                }
                window['ga-disable-' + process.env.REACT_APP_GA4_KEY] = true;
                setTimeout(() => {
                  window['ga-disable-' + process.env.REACT_APP_GA4_KEY] = false;
                }, 500);
              }
              }  
            >
              Contattami
            </Link>
            <Link
              style={{transition: "0.2s ease-in-out", cursor: "pointer"}}
              to="projects"
              smooth={true}
              duration={500}
              className="ml-4 inline-block text-white bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-800 rounded text-lg w-36"
              onClick={() => {
                if (cookies.analyticsCookie){
                  ReactGA.event({
                    category: "buttonAbout",
                    action: "progetti"
                  });
                }
                window['ga-disable-' + process.env.REACT_APP_GA4_KEY] = true;
                setTimeout(() => {
                  window['ga-disable-' + process.env.REACT_APP_GA4_KEY] = false;
                }, 500);
              }
              }  
            >
              Progetti
            </Link>
          </div>
          <div className="flex justify-center">
            <SocialIcon id="socialIconGithub" url="https://github.com/lorenzobotto" bgColor="#29374a" fgColor="white" target="_blank" style={{marginRight: "20px", width: "44px", height: "44px"}}
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
            <SocialIcon id="socialIconFacebook" url="https://www.facebook.com/lorenzo.botto.35" fgColor="white" target="_blank" style={{marginRight: "20px", width: "44px", height: "44px"}} 
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
            <SocialIcon id="socialIconInstagram" url="https://www.instagram.com/lorenzobotto_" fgColor="white" target="_blank" style={{marginRight: "20px", width: "44px", height: "44px"}} 
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
            <SocialIcon id="socialIconLinkedin" url="https://www.linkedin.com/in/lorenzo-botto" fgColor="white" target="_blank" style={{marginRight: "20px", width: "44px", height: "44px"}}
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
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-center rounded"
            style={{height: "50vh", margin: "0 auto"}}
            alt="fotoLorenzo"
            src="./fotopersonale.png"
          />
        </div>
      </div>
    </section>
  );
}