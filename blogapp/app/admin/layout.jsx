import { assets } from "@/Assets/assets";
import Sidebar from "@/Components/AdminComponent/Sidebar";
import Image from "next/image";

export default function Layout({ children }) {
    return (
        <>
            <div className="flex">
                <Sidebar />
                <div className="flex flex-col w-full">
                    <div className="flex items-center justify-between w-full py-3 max-h-[60px] px-12 border-b border-black">
                        <h3 className="font-medium">Panel de Administración</h3>
                        <Image src={assets.profile_icon} alt="Icono de perfil" width={40} />
                    </div>
                    {children}
                </div>
            </div>
        </>
    );
}
