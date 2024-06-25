"use client";
import { ArrowBigUpDash } from "lucide-react";
import { useEffect, useState } from "react";

type ScrollToOptions = {
    left?: number;
    top?: number;
    behavior?: "auto" | "smooth";
}

export default function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);
    const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

    const handleScroll = () => {
        // Show the button when the user scrolls down
        if (window.scrollY > 100) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };
    
    useEffect(() => {
    // Add scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
    }, []);
    
    function scrollToTop() {
        if (!isBrowser()) return;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <button className={`${isVisible ? "visible fixed bottom-0 right-0 p-10" : "" }`} onClick={scrollToTop}>
            <ArrowBigUpDash width={20} height={20}/>
        </button>
    );
}