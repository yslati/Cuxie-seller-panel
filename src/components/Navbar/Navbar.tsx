import { BellIcon, ChatBubbleLeftIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const Navbar = () => {
    const [open, setOpen] = useState(true);

    return (
        <nav className="h-20 font-lato_700 flex items-center justify-end px-14 gap-x-10 text-input">
            <button className={`flex items-center gap-x-2 rounded-lg px-6 py-2 
                ${open ? 'bg-[#C1EFAF] hover:bg-[#C1EFAF]/90 text-[#012200]' :
                    'bg-[#FFDAD6] hover:*:[#FFDAD6]/90 text-[#3B0907]'
                }
            `} onClick={() => setOpen(!open)}>
                <span className={`w-3 h-3  rounded-full ${open ? 'bg-[#012200]' : 'bg-[#3B0907]'}`}/>
                {open ? 'Açıqdır' : 'Bağlıdır'}
            </button>
            <button className="flex items-center gap-x-2">
                <img src="/icons/excel.png" alt="excel" className="h-6" />
                <span className="flex-1 text-primary">İxrac et</span>
            </button>
            <button className="p-2 relative">
                <BellIcon className="h-8" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"/>
            </button>
            <button className="p-2 relative">
                <ChatBubbleLeftIcon className="h-8" />
            </button>
        </nav>
    );
}
 
export default Navbar;