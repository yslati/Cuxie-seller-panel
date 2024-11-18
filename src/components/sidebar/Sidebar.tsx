import { ClipboardDocumentIcon, Cog6ToothIcon, HomeIcon, MagnifyingGlassIcon, PlusIcon, Squares2X2Icon } from "@heroicons/react/24/outline";
import SidebarLi from "./SidebarLi";
import { useState } from "react";

const SidebarData = [
    {
        icon: <HomeIcon className="h-6" />,
        label: "Sifarişlər",
        link: "",
        badge: "10+",
    },
    {
        icon: <MagnifyingGlassIcon className="h-6" />,
        label: "Axtarış",
        link: "",
        badge: "",
    },
    {
        icon: <PlusIcon className="h-6" />,
        label: "Məhsul əlavə et",
        link: "",
        badge: "",
    },
    {
        icon: <Squares2X2Icon className="h-6" />,
        label: "Məhsullar",
        link: "",
        badge: "",
    },
    {
        icon: <Cog6ToothIcon className="h-6" />,
        label: "Parametrlər",
        link: "",
        badge: "4",
    },
    {
        icon: <ClipboardDocumentIcon className="h-6" />,
        label: "Müqavilələr",
        link: "",
        badge: "",
    },
]

const Sidebar = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="w-[22.5rem] h-screen bg-[#F3F3FA] flex flex-col">
            <div className="p-4">
                <div className="flex ml-5 pb-4">
                    <img src="/Logo.png" alt="cuxie logo" className="h-16" />
                </div>

                <nav className="space-y-2">
                    {SidebarData.map((item, index) => (
                        <SidebarLi key={index}
                            icon={item.icon}
                            label={item.label}
                            link={item.link}
                            badge={item.badge}
                            active={index === activeIndex}
                            onClick={() => setActiveIndex(index)}
                        />
                    ))}
                </nav>
            </div>
        </div>
    );
}
 
export default Sidebar;