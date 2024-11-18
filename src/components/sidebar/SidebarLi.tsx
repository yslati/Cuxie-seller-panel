import { Link } from "react-router-dom";

interface SidebarLiProps {
    icon: React.ReactNode;
    label: string;
    link: string;
    badge?: string;
    active?: boolean;
    onClick: () => void;
  }

const SidebarLi = ({ icon, label, link, badge, active, onClick }: SidebarLiProps) => {
    return (
        <Link to={link} className={`flex items-center gap-x-5 px-5 py-4 rounded-full text-lg  transition-all
        ${active ? 'text-[#001D35] bg-active font-lato_700' :
            'text-input hover:bg-gray-50 font-lato_600'
        }`} onClick={onClick}>
            {icon}
            <span className="flex-1">
                {label}
            </span>
            {badge && (
            <span className={`px-2 py-0.5 text-sm rounded-full ${active ? 'text-[#001D35] font-lato_700' : 'text-input'}`}>
                {badge}
            </span>
            )}
        </Link>
    );
}
 
export default SidebarLi;