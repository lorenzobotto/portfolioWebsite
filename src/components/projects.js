import { CodeIcon } from "@heroicons/react/solid";
import React, {useRef, useEffect, useState} from "react";
import { projects } from "../data";
import ReactGA from 'react-ga4';

export default function Projects({cookies}) {
  const myRef = useRef();

  const [repos, setRepos] = useState([]);
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
    for (const [key, val] of Object.entries(projects)) {
      async function fetchRepo() {
        const request = await fetch('https://api.github.com/repos/lorenzobotto/' + val.name);
        if (request.ok) {
          const response = await request.json();
          response["order"] = val.order;
          setRepos(oldRepos => [...oldRepos, response]);
        } else {
          setFetchError(true);
        }
      }
      fetchRepo();
    }
  }, []);

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
              action: "progetti"
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
    <section ref={myRef} id="projects" style={{paddingTop: "70px", marginTop: "-70px"}} className="text-gray-400 bg-gray-900 body-font">
      <div data-aos="fade-up" data-aos-offset="200" className="container px-5 py-10 mx-auto text-center lg:px-30 xl:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Progetti sviluppati
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Qui di seguito ci sono tutti i progetti che ho sviluppato in ambito universitario e non.
          </p>
        </div>
        <div className={!fetchError ? "grid gap-6 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1" : "flex"} style={{justifyContent: "center"}}>
        {!fetchError && repos.length === 6 && repos.sort((a, b) => a.order > b.order ? 1 : -1).map((repo) => (
           <a key={"link" + projects[repo.name].name} href={projects[repo.name].link} target="_blank" rel="noreferrer" className="p-6 rounded-lg border shadow-md bg-gray-800 z-9 border-gray-700 hover:bg-gray-700 w-9/12 md:w-full" style={{margin: "0 auto", minHeight: "204px"}}
              onClick={() => {
                if (cookies.analyticsCookie){
                  ReactGA.event({
                    category: projects[repo.name].name,
                    action: "progetti"
                  });
                }
              }}
              onAuxClick={() => {
                if (cookies.analyticsCookie){
                  ReactGA.event({
                    category: projects[repo.name].name,
                    action: "progetti"
                  });
                }
              }}
           >
            <div style={{display: "flex", flexDirection: "column", width: "100%", height: "100%"}}>
              <div style={{display: "flex", alignItems: "center", marginBottom: "0.5rem"}}>
                <img src="Octicons-repo.png" alt="Icona Repository" width="16" style={{marginRight: "1rem", paddingTop: "5px"}} className="filterGray"/>
                <h1 className="mb-2 text-2xl font-bold tracking-tight text-white">{repo.name}</h1>
              </div>
              <p className="font-normal text-gray-400 twoLines" style={{textAlign: "start", marginBottom: "0.5rem"}}>{repo.description}</p>
              {repo.language && Object.keys(colors).length > 0 && <div style={{display: "flex", alignItems: "center", marginTop: "auto", paddingTop: "1rem", paddingBottom: "10px"}}>
                  <div style={{width: "10px", height: "10px", marginRight: "0.5rem", borderRadius: "100%", backgroundColor: colors[repo.language].color }}></div>
                  <p className="font-normal text-white">{repo.language}</p>
              </div>}
              {repo.language === null && <div style={{display: "flex", alignItems: "center", marginTop: "auto", paddingTop: "1rem", paddingBottom: "10px"}}>
                  <div style={{width: "10px", height: "10px", marginRight: "0.5rem", borderRadius: "100%", backgroundColor: projects[repo.name].color}}></div>
                  <p className="font-normal text-white">{projects[repo.name].language}</p>
              </div>}
            </div>
         </a>
        ))}
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
            style={{transition: "0.2s ease-in-out", cursor: "pointer"}}
            href="https://github.com/lorenzobotto"
            rel="noreferrer"
            target="_blank"
            className="ml-4 inline-block text-white bg-green-600 mt-20 border-0 py-2 px-6 focus:outline-none hover:bg-green-800 rounded text-lg w-64"
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
      </div>
    </section>
  );
}