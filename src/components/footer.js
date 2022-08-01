import React, {useEffect} from 'react';
import {FaFacebook, FaInstagram, FaLinkedin, FaGithub} from 'react-icons/fa';
import styled from 'styled-components';
import PrivacyInfo from './privacy';
import moment from 'moment';
import ReactGA from "react-ga4";
import { Link } from "react-scroll";
import useScrollBlock from "./useScrollBlock";

export const FooterContainer = styled.footer`
    background-color: rgba(31, 41, 55, var(--tw-bg-opacity));
`

export const FooterWrap = styled.div`
    padding: 48px 24px;
    max-width: 1300px;
    margin: 0 auto;
`

export const FooterLinksContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px 80px;
    @media screen and (max-width: 820px) {
        padding-top: 32px;
    }
`

export const FooterLinksWrapperLeft = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: top;
    @media screen and (max-width: 820px) {
    }
`

export const FooterLinksWrapperCenter = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: top;
    @media screen and (max-width: 820px) {
        justify-content: flex-start;
    }
`

export const FooterLinksWrapperRight = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: top;
    @media screen and (max-width: 820px) {
        justify-content: flex-start;
    }

    @media screen and (max-width: 670px) {
        justify-content: center;
    }
`

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    box-sizing: border-box;
    color: #fff;
    @media screen and (max-width: 420px) {
        margin: 0;
        padding: 10px;
    }
`

export const FooterLinkItemsCenter = styled.div`
    display: flex;
    flex-direction: column;
    margin: 16px;
    text-align: left;
    box-sizing: border-box;
    color: #fff;
    @media screen and (max-width: 420px) {
        margin: 0;
        padding: 10px;
    }
`

export const FooterLinkItemsRight = styled.div`
    display: flex;
    flex-direction: column;
    margin: 16px;
    text-align: left;
    box-sizing: border-box;
    color: #fff;
    @media screen and (max-width: 420px) {
        margin: 0;
        padding: 10px;
    }
`

export const FooterLinkTitle = styled.h1`
    font-size: 16px;
    margin-bottom: 16px;
    font-weight: bold;
`

export const FooterLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;
    cursor: pointer;
    &:hover {
        color: gray;
        transition: 0.3s ease-out;
    }
`

export const FooterLinkRight = styled.div`
    display: flex;
    flex-direction: row;
`

export const SocialIconLink = styled.a`
    margin-right: 20px;
    color: #fff;
    font-size: 24px;
    cursor: pointer;
    &:hover {
        color: gray;
        transition: 0.3s ease-out;
    }
`

export const Rights = styled.section`
    width: 100%;
`

export const RightsWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 40px auto 0 auto;
    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`

export const WebsiteRights = styled.small`
    color: #fff;
    font-size: 15px;
`

export const Email = styled.a`
    color: white;
    &:hover {
        color: gray;
        transition: 0.3s ease-out;
    }
`



export default function Footer ({cookies, functionSetCookie, functionRemoveCookie}) {

    const [blockScroll, allowScroll] = useScrollBlock();

    const [checkedAnalytics, setCheckedAnalytics] = React.useState(cookies.analyticsCookie ? true : false);

    const [necessaryConsent, setNecessaryConsent] = React.useState(cookies.necessaryCookie ? true : false);

    const [showBannerCookie, setShowBannerCookie] = React.useState(cookies.necessaryCookie ? "none" : "block");

    const [opacityBannerCookie, setOpacityBannerCookie] = React.useState(cookies.necessaryCookie ? 0 : 1);
    
    const [openModal, setOpenModal] = React.useState(false);
  
    const handleChangeAnalytics = () => {
      setCheckedAnalytics(!checkedAnalytics);
    };

    var dateExpire = moment().add(180,'d').toDate();

    useEffect(() => {
        if (cookies.analyticsCookie) {
            setCheckedAnalytics(true);
        } else {
            setCheckedAnalytics(false);
        }
        // eslint-disable-next-line
    }, [showBannerCookie]);

    useEffect(() => {
        if (openModal) {
            blockScroll();
        } else {
            allowScroll();
        }
        // eslint-disable-next-line
    }, [openModal]);

    useEffect(() => {
        if (cookies.analyticsCookie) {
            ReactGA.initialize(process.env.REACT_APP_GA4_KEY);
        } else {
            functionRemoveCookie('_ga_' + process.env.REACT_APP_GA4_KEY.split("-").pop());
            window['ga-disable-' + process.env.REACT_APP_GA4_KEY] = true;
        }
        // eslint-disable-next-line
    }, []);

    return (
        <FooterContainer id="footerSection">
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapperLeft>
                        <FooterLinkItems style={{marginRight: "auto"}}>
                            <FooterLinkTitle>Informazioni su di me</FooterLinkTitle>
                                <div style={{display: "flex", flexDirection: "column", fontSize: "15px"}}>
                                    <div style={{fontWeight: "bold", marginBottom: "3px"}}>
                                        Indirizzo
                                    </div>
                                    <div style={{marginBottom: "20px"}}>
                                        Strada Favorita 2/A, 12042, Bra (CN)
                                    </div>
                                    <div style={{fontWeight: "bold", marginBottom: "3px"}}>
                                        Numero di telefono
                                    </div>
                                    <div style={{marginBottom: "20px"}}>
                                        +39 389 9456700
                                    </div>
                                    <div style={{fontWeight: "bold", marginBottom: "3px"}}>
                                        Email
                                    </div>
                                    <div>
                                        <Email href="mailto:info@lorenzobotto.it" 
                                        onAuxClick={() => {
                                            if (cookies.analyticsCookie){
                                                ReactGA.event({
                                                category: "Footer Links",
                                                action: "email"
                                                });
                                            }
                                        }}     
                                        onClick={() => {
                                            if (cookies.analyticsCookie){
                                                ReactGA.event({
                                                category: "Footer Links",
                                                action: "email"
                                                });
                                            }
                                        }}                                        
                                        >info@lorenzobotto.it</Email>
                                    </div>
                                </div>
                        </FooterLinkItems>
                    </FooterLinksWrapperLeft>
                    <FooterLinksWrapperCenter>
                        <FooterLinkItemsCenter>
                            <FooterLinkTitle>Link utili</FooterLinkTitle>
                            <FooterLink to="about" smooth={true} duration={500} 
                                onClick={() => {
                                    if (cookies.analyticsCookie){
                                        ReactGA.event({
                                        category: "Footer Link",
                                        action: "about"
                                        });
                                    }
                                    window['ga-disable-' + process.env.REACT_APP_GA4_KEY] = true;
                                    setTimeout(() => {
                                        window['ga-disable-' + process.env.REACT_APP_GA4_KEY] = false;
                                    }, 500);
                                }}
                            >Chi sono</FooterLink>
                            <FooterLink to="timeline" smooth={true} duration={500} 
                                onClick={() => {
                                    if (cookies.analyticsCookie){
                                        ReactGA.event({
                                        category: "Footer Link",
                                        action: "Timeline"
                                        });
                                    }
                                    window['ga-disable-' + process.env.REACT_APP_GA4_KEY] = true;
                                    setTimeout(() => {
                                        window['ga-disable-' + process.env.REACT_APP_GA4_KEY] = false;
                                    }, 500);
                                }}
                            >Scuola e lavoro</FooterLink>
                            <FooterLink to="projects" smooth={true} duration={500}
                                onClick={() => {
                                    if (cookies.analyticsCookie){
                                        ReactGA.event({
                                        category: "Footer Link",
                                        action: "progetti"
                                        });
                                    }
                                    window['ga-disable-' + process.env.REACT_APP_GA4_KEY] = true;
                                    setTimeout(() => {
                                        window['ga-disable-' + process.env.REACT_APP_GA4_KEY] = false;
                                    }, 500);
                                }
                                }
                            >Progetti sviluppati</FooterLink>
                            <FooterLink to="skills"   smooth={true} duration={500}
                                onClick={() => {
                                    if (cookies.analyticsCookie){
                                        ReactGA.event({
                                        category: "Footer Link",
                                        action: "skills"
                                        });
                                    }
                                    window['ga-disable-' + process.env.REACT_APP_GA4_KEY] = true;
                                    setTimeout(() => {
                                        window['ga-disable-' + process.env.REACT_APP_GA4_KEY] = false;
                                    }, 500);
                                }
                                }
                            >Skills</FooterLink>
                            <FooterLink to="contact"  smooth={true} duration={500}
                                onClick={() => {
                                    if (cookies.analyticsCookie){
                                        ReactGA.event({
                                        category: "Footer Link",
                                        action: "contact"
                                        });
                                    }
                                    window['ga-disable-' + process.env.REACT_APP_GA4_KEY] = true;
                                    setTimeout(() => {
                                        window['ga-disable-' + process.env.REACT_APP_GA4_KEY] = false;
                                    }, 500);
                                }
                                }
                            >Contattami</FooterLink>
                            <FooterLink to="" data-modal-toggle="defaultModal"
                                onClick={() => {
                                    setOpenModal(true);
                                    if (cookies.analyticsCookie){
                                        ReactGA.event({
                                        category: "Footer Link",
                                        action: "Privacy"
                                        });
                                    }
                                    window['ga-disable-' + process.env.REACT_APP_GA4_KEY] = true;
                                    setTimeout(() => {
                                        window['ga-disable-' + process.env.REACT_APP_GA4_KEY] = false;
                                    }, 500);
                                }
                                }
                            >Privacy e Cookies Policy</FooterLink>
                            <FooterLink to="" onClick={() => {
                                setShowBannerCookie("block");
                                setTimeout(() =>
                                    setOpacityBannerCookie(1), 10
                                );
                                if (cookies.analyticsCookie){
                                    ReactGA.event({
                                    category: "Footer Link",
                                    action: "Cookie"
                                    });
                                }
                            }}>Modifica preferenze Cookie</FooterLink>
                        </FooterLinkItemsCenter>
                    </FooterLinksWrapperCenter>
                    <FooterLinksWrapperRight>
                        <FooterLinkItemsRight>
                            <FooterLinkTitle>Social</FooterLinkTitle>
                            <FooterLinkRight>
                                <SocialIconLink href="https://www.facebook.com/lorenzo.botto.35" target="_blank" aria-label="Facebook"
                                    onAuxClick={() => {
                                        if (cookies.analyticsCookie){
                                            ReactGA.event({
                                            category: "Footer Link",
                                            action: "facebook"
                                            });
                                        }}
                                    }
                                    onClick={() => {
                                        if (cookies.analyticsCookie){
                                            ReactGA.event({
                                            category: "Footer Link",
                                            action: "facebook"
                                            });
                                        }}
                                    }
                                ><FaFacebook /></SocialIconLink>
                                <SocialIconLink href="https://www.instagram.com/lorenzobotto_" target="_blank" aria-label="Instagram"
                                    onAuxClick={() => {
                                        if (cookies.analyticsCookie){
                                            ReactGA.event({
                                            category: "Footer Link",
                                            action: "instagram"
                                            });
                                        }}
                                    }
                                    onClick={() => {
                                        if (cookies.analyticsCookie){
                                            ReactGA.event({
                                            category: "Footer Link",
                                            action: "instagram"
                                            });
                                        }}
                                    }
                                ><FaInstagram /></SocialIconLink>
                                <SocialIconLink href="https://www.linkedin.com/in/lorenzo-botto" target="_blank" aria-label="LinkedIn"
                                    onAuxClick={() => {
                                        if (cookies.analyticsCookie){
                                            ReactGA.event({
                                            category: "Footer Link",
                                            action: "linkedin"
                                            });
                                        }}
                                    }
                                    onClick={() => {
                                        if (cookies.analyticsCookie){
                                            ReactGA.event({
                                            category: "Footer Link",
                                            action: "linkedin"
                                            });
                                        }}
                                    }
                                ><FaLinkedin /></SocialIconLink>
                                <SocialIconLink href="https://github.com/lorenzobotto" target="_blank" aria-label="GitHub"
                                    onAuxClick={() => {
                                        if (cookies.analyticsCookie){
                                            ReactGA.event({
                                            category: "Footer Link",
                                            action: "github"
                                            });
                                        }}
                                    }
                                    onClick={() => {
                                        if (cookies.analyticsCookie){
                                            ReactGA.event({
                                            category: "Footer Link",
                                            action: "github"
                                            });
                                        }}
                                    }
                                ><FaGithub /></SocialIconLink>
                            </FooterLinkRight>
                        </FooterLinkItemsRight>
                    </FooterLinksWrapperRight>
                </FooterLinksContainer>
                <Rights>
                    <RightsWrap>
                        <WebsiteRights>
                            Lorenzo Botto © {new Date().getFullYear()} All Rights reserved.
                        </WebsiteRights>
                    </RightsWrap>
                </Rights>
            </FooterWrap>
            <PrivacyInfo setOpenModal={setOpenModal} />
            <div className='cookieBannerContainer z-20' style={{display: showBannerCookie, opacity: opacityBannerCookie, transition: 'opacity 0.3s ease', cursor: cookies.necessaryCookie ? "pointer" : "initial"}}
            onClick={(event) => {
                if (cookies.necessaryCookie && event.target === event.currentTarget) {
                    setShowBannerCookie("none");
                }
            }}            
            >
                <div className='cookieBanner' id="cookieSection" style={{cursor: "auto"}}>
                    <div className='bannerLeftColumn'>
                        <div className="text-gray-300">
                            Utilizziamo i cookie per migliorare l'esperienza dell'utente e analizzare il traffico del sito. Per ulteriori informazioni si prega di leggere la nostra{" "}
                            <a href="#0" 
                                onClick={() => {
                                    setOpenModal(true);
                                    if (cookies.analyticsCookie){
                                        ReactGA.event({
                                        category: "Cookie Banner",
                                        action: "Privacy"
                                        });
                                    }
                                }} 
                                data-modal-toggle="defaultModal" 
                                className="hover:underline text-blue-500"
                            >privacy policy.</a><br />
                            Puoi decidere quali cookie vengono utilizzati selezionando le rispettive opzioni di seguito:
                        </div>
                        <div className="flex items-center mb-2" style={{paddingTop: "10px"}}>
                            <input id="checkbox-1" aria-describedby="checkbox-1" type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-600 ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600" checked disabled />
                            <label htmlFor="checkbox-1" className="ml-3 text-sm font-medium text-gray-500">Cookie Necessari: consentono di navigare e utilizzare le funzioni di base e di memorizzare le preferenze.</label>
                        </div>
                        <div className="flex items-center mb-2">
                            <input id="checkbox-2" aria-describedby="checkbox-2" type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-600 ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600" value={checkedAnalytics} onChange={handleChangeAnalytics} checked={checkedAnalytics} />
                            <label htmlFor="checkbox-2" className="ml-3 text-sm font-medium text-gray-300">Cookie Analitici: ci consentono di determinare come i visitatori interagiscono con il nostro servizio al fine di migliorare l'esperienza dell'utente (Google Analytics).</label>
                        </div>
                    </div>
                    <div className="bannerRightColumn">
                        <button
                            style={{transition: "0.2s ease-in-out", padding: "5px 10px", margin: "15px", marginBottom:"5px", justifyContent: "center"}}
                            onClick={() => {
                                if (cookies.analyticsCookie){
                                    ReactGA.event({
                                    category: "Accetta tutti",
                                    action: "Cookie"
                                    });
                                }
                                if (!necessaryConsent) {
                                    functionSetCookie('necessaryCookie', true, {path: '/', expires: dateExpire, sameSite: 'none', secure: true});
                                    setNecessaryConsent(true);
                                }
                                if (!cookies.analyticsCookie){
                                    functionSetCookie('analyticsCookie', true, {path: '/', expires: dateExpire, sameSite: 'none', secure: true});
                                    setCheckedAnalytics(true);
                                    ReactGA.initialize(process.env.REACT_APP_GA4_KEY);
                                    window['ga-disable-' + process.env.REACT_APP_GA4_KEY] = false;
                                }
                                if (checkedAnalytics === false){
                                    setCheckedAnalytics(true);
                                }
                                setOpacityBannerCookie(0);
                                setTimeout(() =>
                                    setShowBannerCookie("none"), 300
                                )
                            }}
                            className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                            Accetta tutti i cookie
                        </button>
                        <button
                            style={{transition: "0.2s ease-in-out", padding: "5px 10px", margin: "15px", marginBottom:"5px", marginTop:"10px", justifyContent: "center"}}
                            onClick={() => {
                                if (cookies.analyticsCookie){
                                    ReactGA.event({
                                    category: "Accetta selezionati",
                                    action: "Cookie"
                                    });
                                }
                                if (!necessaryConsent) {
                                    functionSetCookie('necessaryCookie', true, {path: '/', expires: dateExpire, sameSite: 'none', secure: true});
                                    setNecessaryConsent(true);
                                }
                                if (checkedAnalytics) {
                                    if (!cookies.analyticsCookie) {
                                        functionSetCookie('analyticsCookie', true, {path: '/', expires: dateExpire, sameSite: 'none', secure: true});
                                        ReactGA.initialize(process.env.REACT_APP_GA4_KEY);
                                        window['ga-disable-' + process.env.REACT_APP_GA4_KEY] = false;
                                    }
                                } else {
                                    if (cookies.analyticsCookie) {
                                        functionRemoveCookie('analyticsCookie');
                                        functionRemoveCookie('_ga');
                                        functionRemoveCookie('_ga_' + process.env.REACT_APP_GA4_KEY.split("-").pop());
                                        window['ga-disable-' + process.env.REACT_APP_GA4_KEY] = true;
                                    }
                                }
                                setOpacityBannerCookie(0);
                                setTimeout(() =>
                                    setShowBannerCookie("none"), 300
                                )
                            }}
                            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                            Accetta cookie selezionati
                        </button>
                        <button
                            style={{transition: "0.2s ease-in-out", padding: "5px", margin: "15px", marginTop:"10px", justifyContent: "center", paddingLeft: "10px", paddingRight: "10px"}}
                            onClick={() => {
                                if (cookies.analyticsCookie){
                                    ReactGA.event({
                                    category: "Accetta necessari",
                                    action: "Cookie"
                                    });
                                }
                                if (!necessaryConsent) {
                                    functionSetCookie('necessaryCookie', true, {path: '/', expires: dateExpire, sameSite: 'none', secure: true});
                                    setNecessaryConsent(true);
                                }
                                if (cookies.analyticsCookie) {
                                    functionRemoveCookie('analyticsCookie');
                                    functionRemoveCookie('_ga');
                                    functionRemoveCookie('_ga_' + process.env.REACT_APP_GA4_KEY.split("-").pop());
                                    window['ga-disable-' + process.env.REACT_APP_GA4_KEY] = true;
                                }
                                if (checkedAnalytics) {
                                    setCheckedAnalytics(false);
                                }
                                setOpacityBannerCookie(0);
                                setTimeout(() =>
                                    setShowBannerCookie("none"), 300
                                )
                            }}
                            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                            Accetta solo cookie necessari
                        </button>
                    </div>
                </div>
            </div>
        </FooterContainer>
    )
}