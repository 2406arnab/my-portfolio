import React, { useEffect, useState, useRef } from 'react'
import OverlayMenu from './OverlayMenu'
import Logo from "../assets/Logo.jpg"
import { TfiMenu } from "react-icons/tfi";

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [visible, setVisible] = useState(true);
    const [forceVisible, setForceVisible] = useState(false);
    //To detect the last scroll in y axis
    const lastScrollY = useRef(0);
    // To set the timer for auto hide
    const timerId = useRef(null);

    useEffect(() => {
        const homeSection = document.querySelector("#home");

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setForceVisible(true);
                    setVisible(true); // Always visible on homepage
                } else {
                    setForceVisible(false);
                }
            },
            { threshold: 0.1 }
        );

        if (homeSection) observer.observe(homeSection);

        return () => {
            if (homeSection) observer.unobserve(homeSection);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            // If on homepage, never hide navbar
            if (forceVisible) {
                setVisible(true);
                return;
            }

            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY.current) {
                // scrolling down -> hide
                setVisible(false);
            } else {
                // scrolling up -> show
                setVisible(true);

                // hide again after 3sec idle
                if (timerId.current) clearTimeout(timerId.current);
                timerId.current = setTimeout(() => {
                    setVisible(false);
                }, 3000);
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (timerId.current) clearTimeout(timerId.current);
        };
    }, [forceVisible]);

    return (
        <>
            <nav className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 z-50 transition-transform duration-300 ${visible ? "translate-y-0" : "-translate-y-full"}`}>
                <div className='flex items-center space-x-2'>
                    <img src={Logo} alt='Logo' className='w-10 h-10' />
                    <div className='text-2xl font-bold text-white hidden sm:block'>Arnab</div>
                </div>

                <div className='lg:block'>
                    <button onClick={() => setMenuOpen(true)} className='text-[#1cd8d2] text-3xl focus:outline-none' aria-label='Open Menu'>
                        <TfiMenu />
                    </button>
                </div>

            </nav>
            <OverlayMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
        </>
    )
}

export default NavBar