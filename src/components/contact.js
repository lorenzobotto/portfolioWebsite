import React, {useRef, useEffect} from "react";
import { send } from 'emailjs-com';
import ReactGA from "react-ga4";
import PropagateLoader from "react-spinners/PropagateLoader";
import { useForm } from 'react-hook-form';
import AOS from 'aos';

export default function Contact({cookies, setOpenModal, toggleModal}) {
  const [loading, setLoading] = React.useState(false);
  const [messageSent, setMessageSent] = React.useState(true);
  const [seeMessage, setSeeMessage] = React.useState(false);

  const [disableForm, setDisableForm] = React.useState(false);

  const myRef = useRef();

  const refLoader = useRef(null);

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
                action: "contact"
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

  const {
    register,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm();

  useEffect(() => {
    document.getElementById("email2Div").style.display = "none";
    // eslint-disable-next-line
  }, []);

  async function onSubmit(data) {
    if(data.email2 === "") {
      setLoading(true);
      if ((refLoader.current?.getBoundingClientRect().bottom + window.scrollY + 40) > (window.scrollY + window.innerHeight + 0.5)) {
        window.scrollTo({
          behavior: 'smooth',
          top: (refLoader.current?.getBoundingClientRect().top + window.scrollY ) - window.innerHeight + refLoader.current?.offsetHeight + 40
        })
      }
      if (cookies.analyticsCookie){
        ReactGA.event({
          category: "contactForm",
          action: "Invia Mex"
        });
      }
      send(
        process.env.REACT_APP_EMAILJS_SERVICE,
        process.env.REACT_APP_EMAILJS_TEMPLATE,
        {user_name: data.name, user_email: data.email, message: data.message},
        process.env.REACT_APP_EMAILJS_USER
      )
        .then(() => {
          reset({name: '', email: '', message: '', privacy: false});
          setLoading(false);
          setMessageSent(true);
          setSeeMessage(true);
          setTimeout(() => {
            setSeeMessage(false);
          }, 3000);
        })
        .catch(() => {
          setDisableForm(true);
          setMessageSent(false);
          setSeeMessage(true);
      });
    }
  }

  window.addEventListener('load', AOS.refresh);

  return (
    <section ref={myRef} id="contact" data-aos="fade-up" data-aos-offset={window.innerHeight * .15} className="relative container px-10 py-10 pb-10 mx-auto flex md:flex-nowrap flex-wrap md:mb-14 flex-col-reverse md:flex-row" style={{paddingTop: "70px", marginTop: "-70px"}}>
        <form
          id="messageForm"
          name="contact"
          data-netlify="true"
          onSubmit={handleSubmit(onSubmit)}
          className="xl:w-2/5 lg:w-5/12 md:w-1/2 flex flex-col pt-6 md:ml-auto w-full md:pb-8 mt-8 md:mt-0 md:pt-4 lg:pt-8">
          <h2 style={{paddingBottom: "20px"}} className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            Contattami
          </h2>
          <div className="relative">
            <label htmlFor="name" className={errors.name ? "leading-7 text-sm text-red-500" : "leading-7 text-sm text-gray-400"}>
              Nome*
            </label>
            <input
              {...register("name", {required: true})}
              disabled={loading}
              type="text"
              style={{marginBottom: errors.name ? "5px" : "20px"}}
              className={
                loading === true ? 
                "w-full bg-gray-800 rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out cursor-not-allowed opacity-50" 
                : 
                  (errors.name ? 
                    "w-full bg-red-100 border-red-400 rounded border focus:border-red-500 focus:ring-2 focus:ring-red-900 text-base outline-none text-red-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" 
                  : 
                    "w-full bg-gray-800 rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  )
              }
            />
            <p className="leading-7 text-red-500" style={{display: errors.name ? "block" : "none", marginBottom: "5px"}}> Il campo nome è obbligatorio! </p>
          </div>
          <div className="relative">
            <label htmlFor="email" className={errors.email ? "leading-7 text-sm text-red-500" : "leading-7 text-sm text-gray-400"}>
              Email*
            </label>
            <input
            {...register("email", {required: {value: true, message: 'Il campo email è obbligatorio!'}, pattern: {value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, message: 'Inserisci un\'email valida!'}})}
              id="emailInput"
              disabled={loading}
              style={{marginBottom: errors.email ? "5px" : "20px"}}
              className={
                loading === true ? 
                "w-full bg-gray-800 rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out cursor-not-allowed opacity-50" 
                : 
                  (errors.email ? 
                    "w-full bg-red-100 border-red-400 rounded border focus:border-red-500 focus:ring-2 focus:ring-red-900 text-base outline-none text-red-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  : 
                    "w-full bg-gray-800 rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  )
              }
            />
            {errors.email && <p className="leading-7 text-red-500" style={{display: errors.email ? "block" : "none", marginBottom: "5px"}}> {errors.email.message} </p>}
          </div>
          <div className="relative">
            <label
              htmlFor="message"
              className={errors.message ? "leading-7 text-sm text-red-500" : "leading-7 text-sm text-gray-400"}>
              Messaggio*
            </label>
            <textarea
              {...register("message", {required: true})}
              id="message"
              disabled={loading}
              style={{marginBottom: errors.message ? "5px" : "20px"}}
              className={
                loading === true ? 
                "w-full bg-gray-800 rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-2 px-3 leading-5 transition-colors duration-200 ease-in-out cursor-not-allowed opacity-50" 
                : 
                  (errors.message ? 
                    "w-full bg-red-100 rounded border border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-900 text-base outline-none text-red-900 py-2 px-3 leading-5 transition-colors duration-200 ease-in-out" 
                  : 
                    "w-full bg-gray-800 rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-2 px-3 leading-5 transition-colors duration-200 ease-in-out"
                  )
              }
            />
            <p className="leading-7 text-red-500" style={{display: errors.message ? "block" : "none", marginBottom: "5px"}}> Il campo messaggio è obbligatorio! </p>
          </div>
          <div className="relative">
            <input
              {...register("privacy", {required: true})}
              disabled={loading}
              type="checkbox"
              id="privacy"
              className={
                loading === true ? 
                  "w-4 h-4 text-blue-600 rounded focus:ring-blue-600 ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600 opacity-50 cursor-not-allowed transition-colors duration-200 ease-in-out" 
                : 
                  (errors.privacy ? 
                    "w-4 h-4 text-red-900 rounded focus:ring-blue-600 ring-offset-gray-800 focus:ring-2 bg-red-100 border-red-400 transition-colors duration-200 ease-in-out"
                  :
                    "w-4 h-4 text-blue-600 rounded focus:ring-blue-600 ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600 transition-colors duration-200 ease-in-out"
                  )
              }
              style={{borderRadius: "4px", marginBottom: "5px"}}
            />
            <label style={{marginLeft: "10px"}} htmlFor="privacy" className={loading === true ? "opacity-50 cursor-not-allowed": (errors.privacy ? "text-red-500" : null)}>
              Confermo di essere maggiorenne e acconsento al trattamento dei dati personali ai sensi del Regolamento UE nr. 679/2016, GDPR.<br />
              Confermo di aver letto <a href="#"
                                onClick={(e) => {
                                  e.preventDefault();
                                  setOpenModal(true);
                                  toggleModal("defaultModal");
                                  if (cookies.analyticsCookie){
                                      ReactGA.event({
                                      category: "contactForm",
                                      action: "Privacy"
                                      });
                                  }
                                }}
                                style={{pointerEvents: loading ? "none" : "initial"}}
                                className={loading === true ? "text-gray-400 opacity-50 cursor-not-allowed" : (errors.privacy ? "text-red-500 hover:text-red-600" : "text-gray-400 hover:text-gray-500")}
                            >l'informativa sulla privacy</a>.*<br className={loading === true ? "cursor-not-allowed" : null} />
              <span style={{fontSize: "11px"}}>(Potrai cancellarli o chiederne una copia facendo esplicita richiesta a info@lorenzobotto.it)</span>
            </label>
            <p className="leading-7 text-red-500" style={{display: errors.privacy ? "block" : "none", marginBottom: "5px"}}> Devi accettare il trattamento dei dati! </p>
          </div>
          <div className="relative mt-2 mb-2" id="email2Div">
            <label
              htmlFor="email2"
              className={"leading-7 text-sm text-gray-400"}>
              NON COMPILARE QUESTO CAMPO!
            </label>
            <input
              disabled={loading}
              {...register("email2")}
              id="email2"
              type="email"
              className={
                loading === true ? 
                "w-full bg-gray-800 rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out cursor-not-allowed opacity-50"
                  :
                  "w-full bg-gray-800 rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-2 px-3 leading-5 transition-colors duration-200 ease-in-out"
              }
            />
          </div>
            <button
              disabled={loading}
              type="submit"
              style={{transition: "background-color 0.2s ease-in-out", marginBottom: "2rem", marginTop: errors.privacy ? "5px" : "20px"}}
              className={loading === true ? "text-white bg-green-600 border-0 py-2 px-6 focus:outline-none rounded text-lg cursor-not-allowed opacity-50" : "text-white bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-800 rounded text-lg"}
              onClick={() => {
                document.documentElement.style.scrollBehavior = 'smooth';
                setTimeout(() => {
                  document.documentElement.style.scrollBehavior = 'initial';   
                }, 1);
              }}
            >
              Invia messaggio
            </button>
          <div style={{width: "100%", textAlign: "center"}}>
            <PropagateLoader
              color="#ffffff"
              loading={loading && !disableForm}
              size={10}
            />
            {messageSent && <div id="messageSent" ref={refLoader} className="p-4 mb-4 text-lg rounded-lg bg-green-200 text-green-800" role="alert" style={{visibility: seeMessage === true ? "visible" : "hidden", opacity: seeMessage === true ? 1 : 0, transition: "visibility 0.3s linear, opacity 0.3s linear", margin: "0 auto"}}>
              Messaggio inviato correttamente!
            </div>}
            {!messageSent && <div id="messageSent" ref={refLoader} className="p-4 mb-4 text-lg rounded-lg bg-red-200 text-red-700" role="alert" style={{visibility: seeMessage === true ? "visible" : "hidden", opacity: seeMessage === true ? 1 : 0, transition: "visibility 0.3s linear, opacity 0.3s linear"}}>
              Impossibile inviare il messaggio! Inviare una mail direttamente a <a className="font-semibold underline hover:text-red-900" 
                href="mailto:info@lorenzobotto.it"
                onAuxClick={() => {
                  if (cookies.analyticsCookie){
                      ReactGA.event({
                      category: "Errore Invio Mex",
                      action: "email"
                      });
                  }
              }}     
              onClick={() => {
                  if (cookies.analyticsCookie){
                      ReactGA.event({
                      category: "Errore Invio Mex",
                      action: "email"
                      });
                  }
              }} 
              >info@lorenzobotto.it
              </a>
            </div>}
          </div>
        </form>
        <div id="mappa" className="xl:w-3/5 lg:w-7/12 md:w-2/3 bg-gray-900 overflow-hidden md:ml-10 p-10 flex items-end justify-start relative">
          <iframe
            id="frameMappa"
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0 rounded-lg"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.8)" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2835.5546303914466!2d7.841788715788785!3d44.70829099158181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d2ab16bc1cbb39%3A0x5aae703441b7f0a8!2sStrada%20Favorita%2C%202A%2C%2012042%20Bra%20CN!5e0!3m2!1sit!2sit!4v1659313684406!5m2!1sit!2sit"
          />
        </div>
    </section>
  );
}