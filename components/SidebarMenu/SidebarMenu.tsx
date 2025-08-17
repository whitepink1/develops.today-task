import { AnimatePresence, motion } from "motion/react";
import { easeOut } from "framer-motion";
import { useState } from "react";

type MenuItem = {
    title?: string;
    subMenu?: MenuItem[];
}

export type SidebarProps = {
    items?: MenuItem[];
}

export const SidebarMenu = ({items}: SidebarProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSubMenu, setIsSubmenu] = useState<string>("");
    const slideVariant = (duration: string) => {
        return {
        initial: {x: -350},
        animate: {x:0},
        transition: { duration: Number(duration), ease: easeOut }}
    };
    return(
            <div className="w-[250px]">
                <motion.button
                    animate={{width: isOpen ? 250 : 100}}
                    transition={{duration: 0.6, ease: easeOut}}
                    onClick={() => setIsOpen(!isOpen)}
                    className='bg-black/90 text-white px-5 py-2 z-10'>
                    {isOpen ? "Close menu" : "Open"}
                </motion.button>
                <AnimatePresence>
                    {isOpen && (
                    <>
                        <motion.div
                            className="fixed inset-0 bg-black/50 -z-1"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{duration: 0.5, ease: easeOut}}
                            exit={{ opacity: 0 }}
                            onClick={() => {
                                setIsOpen(false);
                                setIsSubmenu("");
                            }}
                        />
                        <motion.ul
                            {...slideVariant(`${0.6}`)}
                            exit={{x: -350}}
                            onClick={() => {}}
                            className="w-[250px] flex flex-col gap-3 bg-gray px-5 py-2 z-10">
                            {items?.map((item, id) => (
                                <li key={item.title}>
                                    <button 
                                        onClick={() => setIsSubmenu(i => i === String(id) ? "" : String(id))}
                                        className="cursor-pointer">
                                        {item.title}
                                    </button>
                                    <AnimatePresence>
                                        {(String(id) === isSubMenu && item.subMenu) && (
                                            <motion.ul 
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{height: "auto", opacity: 1}}
                                                exit={{height: 0, opacity: 0 }}
                                                transition={{duration: 0.3, ease: easeOut}}>
                                                {item.subMenu.map((subItem) => (
                                                    <li key={subItem.title} className="ml-4 h-fit">
                                                        - {subItem.title}
                                                    </li>
                                                ))}
                                            </motion.ul>
                                        )}
                                    </AnimatePresence>
                                </li>                                
                            ))}
                        </motion.ul>
                    </>)}
                </AnimatePresence>
            </div>
    )
}