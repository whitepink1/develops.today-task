import { AnimatePresence, motion } from "motion/react";
import { easeOut } from "framer-motion";
import { MenuItem } from "./SidebarMenu";

type TSubMenu = {
    id?: number;
    isSubMenu?: string;
    item?: MenuItem;
}

export const SubMenu = ({id, isSubMenu, item }: TSubMenu) => {
    return(
        <AnimatePresence>
            {(String(id) === isSubMenu && item?.subMenu) && (
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
                </motion.ul>)}
        </AnimatePresence>
    )
}