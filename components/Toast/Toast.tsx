import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";

export type ToastProps = {
    type?: "success" | "info" | "warning";
    message?: string;
    duration?: number;
    transition?: "fade" | "slide";
};

export const Toast = ({
    type = "success",
    message = "Hello there",
    duration = 4000,
    transition = "fade"
}: ToastProps) => {
    const [isVisible, setIsVisible] = useState(true);
    const toastType = {
        success: {style: "bg-green/55", img: "/icons/success-message.svg"},
        info: {style: "bg-gray/65", img: "/icons/info-message.svg"},
        warning: {style: "bg-red/35", img: "/icons/warning-message.svg"}
    };
    const toastTransition = {
        fade: {initial: {opacity: 0}, animate: {opacity: 1}},
        slide: {initial: {y: 200}, animate: {y: 0}},
    };
    useEffect(() => {
        if (!isVisible) return;
        const ToastTimer = setTimeout(() => {
            setIsVisible(false);
        },duration);
        return () => clearTimeout(ToastTimer);
    }, [isVisible, duration])
    

    const handleClose = () => {
        setIsVisible(false);
    };

    return(
        <>
            <button onClick={() => setIsVisible(true)} className="test-button">Test</button>
            <AnimatePresence>
                {isVisible && 
                <motion.div 
                    initial={toastTransition[transition].initial} 
                    animate={toastTransition[transition].animate}
                    exit={toastTransition[transition].initial}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className={`fixed bottom-10 right-10 w-[250px] h-[140px] min-w-[250px] min-h-[120px] p-5 ${toastType[type].style} rounded-lg`}>
                        <p className={`w-full h-full inline-block break-words overflow-hidden`}>
                            <Image 
                                src={toastType[type].img}
                                height={35}
                                width={35}
                                alt={`Toast ${type} message`}
                                className="absolute -top-3.5 -left-3.5 opacity-65"/>
                            {message.length < 95 ? message : `${message.slice(0,95)}...`}
                        </p>
                        <button 
                            onClick={handleClose} 
                            className="absolute top-1 right-1 cursor-pointer">
                            <Image
                                src="/icons/x-circle.svg"
                                height={25}
                                width={25}
                                alt="Close button"/>
                        </button>
                </motion.div>}
            </AnimatePresence>
        </>
    )
}
