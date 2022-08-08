import React, { useEffect, useRef } from "react";
import {timelineElements} from "../data";
import ReactGA from "react-ga4";
import AOS from 'aos';

export default function TimelinePage({cookies}) {

  const myRef = useRef();
  const [firstIntersect, setFirstIntersect] = React.useState(false);

  useEffect(() => {
    if (!firstIntersect) {
      const opts = {
        threshold: window.innerHeight >= 850 && window.innerWidth >= 1280 ? 0.5 : 0.3
      }

      const callback = (entries) => {
        const entry = entries[0];
        if ( entry.isIntersecting ) {
          if (!window['ga-disable-' + process.env.REACT_APP_GA4_KEY]){
              ReactGA.event({
                category: "scroll",
                action: "Timeline"
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

  window.addEventListener('load', AOS.refresh);

  return (
    <section ref={myRef} data-aos="fade-up" data-aos-offset={window.innerHeight * .15} className="timeline-section" id="timeline" style={{paddingTop: "70px", marginTop: "-70px", marginBottom: "10px"}}>
      <div className="container px-5 pb-5 mx-auto">
        <div className="text-center mb-20">
            <div className="w-10 inline-block mb-4" style={{color: "rgba(156, 163, 175, var(--tw-text-opacity))"}}>
              <img src="./timeline.svg" alt="timeline" />
            </div>
            <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
              Percorso scolastico ed esperienze lavorative
            </h1>
          </div>
        <div className="timeline-items">
          {timelineElements.map((item) => {
              return (
                <div id={"timeline" + item.id} key={item.id} data-aos={item.id % 2 === 0 ? "fade-left" : "fade-right"} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-date">{item.date}</div>
                  <div className="timeline-content">
                    <h3 style={{marginBottom: "0px", color: "white"}}>{item.title}</h3>
                    <h4 style={{marginBottom: "20px", paddingTop: "0px", color: "white", fontSize: "16px"}} className="timeline-subtitle">{item.location}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              )
          })}
        </div>
      </div>
    </section>
  );
}