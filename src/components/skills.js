import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React, {useRef, useEffect} from "react";
import { skills } from "../data";
import ReactGA from 'react-ga4';
import AOS from 'aos';

export default function Skills({cookies}) {

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
                action: "skills"
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
    <section className="container px-5 py-10 mx-auto mb-12" data-aos="fade-up" data-aos-offset={window.innerHeight * .15} ref={myRef} id="skills" style={{paddingTop: "70px", marginTop: "-70px"}}>
      <div className="text-center mb-10">
        <ChipIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
          Skills &amp; Technologies
        </h1>
        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
          Skills e tecnologie che ho appreso negli anni di studio e nelle esperienze lavorative che ho effettuato.
        </p>
      </div>
      <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
        {skills.map((skill) => (
          <div key={skill} className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
              <BadgeCheckIcon className="text-green-500 w-6 h-6 flex-shrink-0 mr-4" />
              <span className="title-font font-medium text-white">
                {skill}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}