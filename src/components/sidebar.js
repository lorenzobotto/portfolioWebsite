import React from 'react';
import styled from 'styled-components';
import {FaTimes} from 'react-icons/fa';
import { ArrowRightIcon } from "@heroicons/react/solid";
import ReactGA from 'react-ga4';
import { Link } from "react-scroll";

const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 120%;
    background-color: rgb(31 41 55);
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
    top: ${({isOpen}) => (isOpen ? '0' : '-125%')};
`

const SidebarWrapper = styled.div`
    color: #fff;
    height: 105%;
`

const CloseIcon = styled(FaTimes)`
    color: #fff;
`

const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

const FirstSidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 80px);
    text-align: center;
    padding-left: 0px;
    padding-bottom: 50px;
    justify-content: center;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(3, 60px);
        padding-bottom: 30px;
    }
`

const Logo = styled.div`
    display: flex;
    justify-content: center;
    color: white;
    height: 0%;
`

const SidebarLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: rgba(156, 163, 175, var(--tw-text-opacity));
    cursor: pointer;

    &:hover {
        color: white;
        transition: 0.2 ease-in-out;
    }
`

const NameLink = styled(Link)`
    font-size: 1.70rem;
    line-height: 1.75rem;
    font-weight: 500;
    cursor: pointer;
`

const ButtonLink = styled(Link)``

export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`

export const ButtonSidebar = styled.a`
    border-radius: 50px;
    background-color: rgba(16, 185, 129, var(--tw-bg-opacity));
    white-space: nowrap;
    padding: 16px 64px;
    color: rgba(255, 255, 255, var(--tw-text-opacity));
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2 ease-in-out;
    text-decoration: none;

    &:hover {
        transition: 0.2 ease-in-out;
        background-color: rgba(5, 150, 105, var(--tw-bg-opacity));
        color: rgba(255, 255, 255, var(--tw-text-opacity));
    }
`

const Sidebar = ({isOpen, toggle, cookies}) => {
    return (
        <SidebarContainer isOpen={isOpen}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <Logo>
                <NameLink to="about"
                    onClick={() => {
                        toggle();
                        if (cookies.analyticsCookie){
                          ReactGA.event({
                            category: "Sidebar Link",
                            action: "about"
                          });
                          window['ga-disable-' + process.env.REACT_APP_GA4_KEY] = true;
                          setTimeout(() => {
                            window['ga-disable-' + process.env.REACT_APP_GA4_KEY] = false;
                          }, 200);
                        }
                    }
                    }
                >
                    Lorenzo Botto
                </NameLink>
            </Logo>     
            <SidebarWrapper>
                <FirstSidebarMenu>
                    <SidebarLink to='timeline'
                        offset={-60}
                        onClick={() => {
                            toggle();
                            if (cookies.analyticsCookie){
                                ReactGA.event({
                                    category: "Sidebar Link",
                                    action: "Timeline"
                                });
                                window['ga-disable-' + process.env.REACT_APP_GA4_KEY] = true;
                                setTimeout(() => {
                                    window['ga-disable-' + process.env.REACT_APP_GA4_KEY] = false;
                                }, 200);
                            }
                        }
                        }
                    >Scuola e lavoro</SidebarLink>
                    <SidebarLink to='projects'
                        offset={-120}
                        onClick={() => {
                            toggle();
                            if (cookies.analyticsCookie){
                                ReactGA.event({
                                    category: "Sidebar Link",
                                    action: "progetti"
                                });
                                window['ga-disable-' + process.env.REACT_APP_GA4_KEY] = true;
                                setTimeout(() => {
                                    window['ga-disable-' + process.env.REACT_APP_GA4_KEY] = false;
                                }, 200);
                            }
                        }
                        }
                    >Progetti sviluppati</SidebarLink>
                    <SidebarLink to='skills'
                        offset={-60}
                        onClick={() => {
                            toggle();
                            if (cookies.analyticsCookie){
                                ReactGA.event({
                                    category: "Sidebar Link",
                                    action: "skills"
                                });
                                window['ga-disable-' + process.env.REACT_APP_GA4_KEY] = true;
                                setTimeout(() => {
                                    window['ga-disable-' + process.env.REACT_APP_GA4_KEY] = false;
                                }, 200);
                            }
                        }
                        }
                    >Skills</SidebarLink>
                </FirstSidebarMenu>
                <SideBtnWrap>
                <ButtonLink
                    offset={-60}
                    style={{transition: "0.2s ease-in-out", cursor: "pointer"}}
                    to="contact"
                    className="inline-flex items-center text-white bg-green-600 border-0 py-2 px-10 focus:outline-none hover:bg-green-800 rounded text-lg"
                    onClick={() => {
                        toggle();
                        if (cookies.analyticsCookie){
                            ReactGA.event({
                                category: "Sidebar Link",
                                action: "contact"
                            });
                            window['ga-disable-' + process.env.REACT_APP_GA4_KEY] = true;
                            setTimeout(() => {
                                window['ga-disable-' + process.env.REACT_APP_GA4_KEY] = false;
                            }, 200);
                        }
                    }
                    }
                >
                    Contattami
                    <ArrowRightIcon style={{textAlign: "center"}} className="inline-flex focus:outline-none w-4 h-4 ml-1" />
                </ButtonLink>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
