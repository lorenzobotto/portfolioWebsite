import React, {useRef, useEffect} from "react";
import { send } from 'emailjs-com';
import ReactGA from "react-ga4";
import PropagateLoader from "react-spinners/PropagateLoader";

export default function Contact({cookies}) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [privacy, setPrivacy] = React.useState(false);
  const [errorNameOpen, setErrorNameOpen] = React.useState(false);
  const [errorEmailOpen, setErrorEmailOpen] = React.useState(false);
  const [errorMessageOpen, setErrorMessageOpen] = React.useState(false);
  const [errorPrivacyOpen, setErrorPrivacyOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [messageSent, setMessageSent] = React.useState(true);
  const [seeMessage, setSeeMessage] = React.useState(false);

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
              action: "contact"
            });
            observer.unobserve(myRef.current);
        }
      }
    }

    const observer = new IntersectionObserver(callback, opts)
    observer.observe(myRef.current);

    // eslint-disable-next-line
  }, [cookies]);


  function handleSubmit(e) {
    setLoading(true);
    e.preventDefault();
    if (name === "") {
      setErrorNameOpen(true);
      setLoading(false);
      return null;
    }
    if (email === "") {
      console.log("Ciao")
      setErrorEmailOpen(true);
      setLoading(false);
      return null;
    }
    if (message === "") {
      setErrorMessageOpen(true);
      setLoading(false);
      return null;
    }
    if (privacy === false){
      setErrorPrivacyOpen(true);
      setLoading(false);
      return null;
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
      {user_name: name, user_email: email, message: message},
      process.env.REACT_APP_EMAILJS_USER
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setName("");
        setEmail("");
        setMessage("");
        document.getElementById("messageForm").reset();
        setLoading(false);
        setMessageSent(true);
        setSeeMessage(true);
        setTimeout(() => {
          setSeeMessage(false);
        }, 3000);
      })
      .catch((err) => {
        console.log('FAILED...', err);
        setLoading(false);
        setMessageSent(false);
        setSeeMessage(true);
        setTimeout(() => {
          setSeeMessage(false);
        }, 3000);
    });
  }

  return (
    <section ref={myRef} id="contact" className="relative" style={{paddingTop: "70px", marginTop: "-70px", marginBottom: "60px"}}>
      <div id="contactContainer" data-aos="fade-up" data-aos-offset="250" className="container px-5 py-10 mx-auto flex md:flex-nowrap flex-wrap">
        <div id="mappa" className="lg:w-2/3 md:w-2/3 bg-gray-900 rounded-lg overflow-hidden md:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.8)" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2835.5546303914466!2d7.841788715788785!3d44.70829099158181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d2ab16bc1cbb39%3A0x5aae703441b7f0a8!2sStrada%20Favorita%2C%202A%2C%2012042%20Bra%20CN!5e0!3m2!1sit!2sit!4v1659313684406!5m2!1sit!2sit"
          />
          
        </div>
        <form
          id="messageForm"
          name="contact"
          data-netlify="true"
          onSubmit={handleSubmit}
          style={{paddingTop: "5rem"}}
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 style={{paddingBottom: "20px"}} className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            Contattami
          </h2>
          <div className="relative">
            <label htmlFor="name" className={errorNameOpen === true ? "leading-7 text-sm text-red-500" : "leading-7 text-sm text-gray-400"}>
              Nome*
            </label>
            <input
              disabled={loading}
              type="text"
              id="name"
              style={{marginBottom: "5px"}}
              name="name"
              className={
                loading === true ? 
                "w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out cursor-not-allowed opacity-50" 
                : 
                  (errorNameOpen === true ? 
                    "w-full bg-red-100 border-red-400 rounded border focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-red-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" 
                  : 
                    "w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors"
                  )
              }
              onChange={(e) => {setName(e.target.value); setErrorNameOpen(false)}}
            />
            <p className="leading-7 text-red-500" style={{visibility: errorNameOpen === true ? "visible" : "hidden", marginBottom: "5px"}}> Il campo nome è obbligatorio! </p>
          </div>
          <div className="relative">
            <label htmlFor="email" className={errorEmailOpen === true ? "leading-7 text-sm text-red-500" : "leading-7 text-sm text-gray-400"}>
              Email*
            </label>
            <input
              disabled={loading}
              type="email"
              id="email"
              name="email"
              style={{marginBottom: "5px"}}
              className={
                loading === true ? 
                "w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out cursor-not-allowed opacity-50" 
                : 
                  (errorEmailOpen === true ? 
                    "w-full bg-red-100 border-red-400 rounded border focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-red-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  : 
                    "w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors"
                  )
              }
              onChange={(e) => {setEmail(e.target.value); setErrorEmailOpen(false)}}
            />
            <p className="leading-7 text-red-500" style={{visibility: errorEmailOpen === true ? "visible" : "hidden", marginBottom: "5px"}}> Il campo email è obbligatorio! </p>
          </div>
          <div className="relative">
            <label
              htmlFor="message"
              className={errorMessageOpen === true ? "leading-7 text-sm text-red-500" : "leading-7 text-sm text-gray-400"}>
              Messaggio*
            </label>
            <textarea
              disabled={loading}
              id="message"
              name="message"
              style={{marginBottom: "5px"}}
              className={
                loading === true ? 
                "w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out cursor-not-allowed opacity-50" 
                : 
                  (errorMessageOpen === true ? 
                    "w-full bg-red-100 rounded border border-red-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-red-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" 
                  : 
                    "w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors"
                  )
              }
              onChange={(e) => {setMessage(e.target.value); setErrorMessageOpen(false)}}
            />
            <p className="leading-7 text-red-500" style={{visibility: errorMessageOpen === true ? "visible" : "hidden", marginBottom: "5px"}}> Il campo messaggio è obbligatorio! </p>
          </div>
          <div className="relative">
            <input
              disabled={loading}
              type="checkbox"
              id="privacy"
              name="privacy"
              value="privacy"
              className={
                loading === true ? 
                  "opacity-50 cursor-not-allowed" 
                : 
                  (errorPrivacyOpen === true ? 
                    "border-red-400 bg-red-100 text-red-900"
                  :
                    null
                  )
              }
              style={{borderRadius: "4px", marginBottom: "5px"}}
              onChange={() => {setPrivacy(!privacy); setErrorPrivacyOpen(false)}}
            />
            <label style={{marginLeft: "10px"}} htmlFor="privacy" className={errorPrivacyOpen === true ? "text-red-500" : null}>
              Confermo di essere maggiorenne e acconsento al trattamento dei dati personali ai sensi del Regolamento UE nr. 679/2016, GDPR.<br />
              Confermo di aver letto l'informativa sulla privacy.*<br />
              <span style={{fontSize: "11px"}}>(Potrai cancellarli o chiederne una copia facendo esplicita richiesta a info@lorenzobotto.it)</span>
            </label>
            <p className="leading-7 text-red-500" style={{visibility: errorPrivacyOpen === true ? "visible" : "hidden", marginBottom: "5px"}}> Devi accettare il trattamento dei dati! </p>
          </div>
            <button
              disabled={loading}
              type="submit"
              style={{transition: "0.2s ease-in-out", marginBottom: "2rem"}}
              className={loading === true ? "text-white bg-green-600 border-0 py-2 px-6 focus:outline-none rounded text-lg cursor-not-allowed opacity-50" : "text-white bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-800 rounded text-lg"}
            >
              Invia messaggio
            </button>
          <div style={{width: "100%", textAlign: "center"}}>
            <PropagateLoader
              color="#ffffff"
              loading={loading}
              size={10}
            />
            {messageSent && <div className="p-4 mb-4 text-lg rounded-lg bg-green-200 text-green-800" role="alert" style={{visibility: seeMessage === true ? "visible" : "hidden", opacity: seeMessage === true ? 1 : 0, transition: "visibility 0.3s linear, opacity 0.3s linear", margin: "0 auto"}}>
              Messaggio inviato correttamente!
            </div>}
            {!messageSent && <div className="p-4 mb-4 text-lg rounded-lg bg-red-200 text-red-700" role="alert" style={{visibility: seeMessage === true ? "visible" : "hidden", opacity: seeMessage === true ? 1 : 0, transition: "visibility 0.3s linear, opacity 0.3s linear"}}>
              Impossibile inviare il messaggio! Inviare una mail direttamente a <a className="font-semibold underline hover:text-red-900" href="mailto:info@lorenzobotto.it">info@lorenzobotto.it</a>
            </div>}
          </div>
        </form>
      </div>
    </section>
  );
}