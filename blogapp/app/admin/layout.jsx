import Sidebar from "@/Components/AdminComponent/Sidebar";

export default function layout({children}){
    return(
        <>
        <div className="flex">
            <Sidebar/>
        </div>
        {children}
        </>
    )
}