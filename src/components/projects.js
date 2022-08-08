import { CodeIcon, FilterIcon } from "@heroicons/react/solid";
import React, {useRef, useEffect, useState} from "react";
import { projects } from "../data";
import ReactGA from 'react-ga4';
import AOS from 'aos';
import { Octokit } from "@octokit/rest"  

const octokit = new Octokit({     
  auth: process.env.REACT_APP_GITHUB_TOKEN,    
  userAgent: 'skylight v1' 
});

export default function Projects({cookies}) {
  const myRef = useRef();
  const [firstIntersect, setFirstIntersect] = React.useState(false);

  const [repos, setRepos] = useState(null);
  const [colors, setColors] = useState({});
  const [fetchError, setFetchError] = useState(false);

  useEffect(() => {
    async function fetchColor() {
      const request = await fetch('https://raw.githubusercontent.com/ozh/github-colors/master/colors.json');
      if (request.ok) {
        const response = await request.json();
        setColors(response);
      } else {
        setFetchError(true);
      }
    }
    fetchColor();
    // eslint-disable-next-line
    async function fetchRepo() {
      await octokit.request('GET /users/lorenzobotto/repos')
            .then(res => {
              setRepos(res.data);
            })
            .catch(() => setFetchError(true))
    }
    fetchRepo();
  }, []);

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
                action: "progetti"
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
    <section ref={myRef} data-aos="fade-up" data-aos-offset={window.innerHeight * .15} id="projects" className="text-gray-400 bg-gray-900 body-font container px-5 mx-auto text-center lg:px-30 xl:px-40">
        <div className="flex flex-col w-full mb-10">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Progetti sviluppati
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Qui di seguito ci sono tutti i progetti che ho sviluppato in ambito universitario e non.
          </p>
        </div>
        <div className={!fetchError ? "grid gap-6 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1" : "flex"} style={{justifyContent: "center"}}>
        {!fetchError && repos && projects.map((project) => {
          const repo = repos.filter(function(elem){return elem.name === project.name;})
          return(
           <a key={"link" + repo[0].name} href={project.link} target="_blank" rel="noreferrer" className="p-6 rounded-lg border shadow-md bg-gray-800 z-9 border-gray-700 hover:bg-gray-700 w-10/12 md:w-full" style={{margin: "0 auto", minHeight: "204px"}}
              onClick={() => {
                if (cookies.analyticsCookie){
                  ReactGA.event({
                    category: repo[0].name,
                    action: "progetti"
                  });
                }
              }}
              onAuxClick={() => {
                if (cookies.analyticsCookie){
                  ReactGA.event({
                    category: repo[0].name,
                    action: "progetti"
                  });
                }
              }}
           >
            <div style={{display: "flex", flexDirection: "column", width: "100%", height: "100%"}}>
              <div style={{display: "flex", alignItems: "center", marginBottom: "0.5rem"}}>
                <img src="Octicons-repo.png" alt="Icona Repository" width="16" style={{marginRight: "1rem", paddingTop: "5px"}} className="filterGray"/>
                <h1 className="mb-2 text-xl sm:text-2xl font-bold tracking-tight text-white">{repo[0].name}</h1>
              </div>
              <p className="font-normal text-gray-400 twoLines" style={{textAlign: "start", marginBottom: "0.5rem"}}>{repo[0].description}</p>
              {repo[0].language && Object.keys(colors).length > 0 && <div style={{display: "flex", alignItems: "center", marginTop: "auto", paddingTop: "1rem", paddingBottom: "10px"}}>
                  <div style={{width: "10px", height: "10px", marginRight: "0.5rem", borderRadius: "100%", backgroundColor: colors[repo[0].language].color }}></div>
                  <p className="font-normal text-white text-left">{repo[0].language}</p>
              </div>}
              {repo[0].language === null && <div style={{display: "flex", alignItems: "center", marginTop: "auto", paddingTop: "1rem", paddingBottom: "10px"}}>
                  <div style={{width: "10px", height: "10px", marginRight: "0.5rem", borderRadius: "100%", backgroundColor: project.color}}></div>
                  <p className="font-normal text-white text-left">{project.language}</p>
              </div>}
            </div>
            </a>
          )
        })}
        {fetchError &&  <div role="alert" style={{alignSelf: "center"}}>
                          <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
                            Qualcosa è andato storto!
                          </div>
                          <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                            <p>Prova a ricaricare la pagina per vedere i progetti.</p>
                          </div>
                        </div>
        }
        </div>
        <a
            style={{transition: "0.2s ease-in-out", cursor: "pointer", marginBottom: "70px"}}
            href="https://github.com/lorenzobotto"
            rel="noreferrer"
            target="_blank"
            className="inline-block text-white bg-green-600 mt-10 border-0 py-2 px-6 focus:outline-none hover:bg-green-800 rounded text-lg w-64"
            onClick={() => {
              if (cookies.analyticsCookie){
                ReactGA.event({
                  category: "buttonPiuProgetti",
                  action: "progetti"
                });
              }
            }} 
            onAuxClick={() => {
              if (cookies.analyticsCookie){
                ReactGA.event({
                  category: "buttonPiuProgetti",
                  action: "progetti"
                });
              }
            }}  
          >
            Più progetti
        </a>
    </section>
  );
}