import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React, {useRef, useEffect} from "react";
import { skills } from "../data";
import ReactGA from 'react-ga4';

export default function Skills({cookies}) {

  const myRef = useRef();

  useEffect(() => {
    const opts = {
      threshold: 0.5
    }

    const callback = (entries, observer) => {
      const entry = entries[0];
      if ( entry.isIntersecting ) {
        if (cookies.analyticsCookie){
            ReactGA.event({
              category: "scroll",
              action: "skills"
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
    <section ref={myRef} id="skills" style={{paddingTop: "70px", marginTop: "-70px"}}>
      <div data-aos="fade-up" data-aos-offset="250" className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
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
      </div>
    </section>
  );
}