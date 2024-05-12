import { Outlet } from "react-router-dom"
import Sidebar from "../Sidebar/Sidebar"

const DashboardLayout = () => {
  return (
    <div className="relative min-h-screen bg-slate-200 md:flex">
      <Sidebar></Sidebar>
    <div className="flex-1 md:ml-64">
        <div className="p-5">
        <Outlet></Outlet>
        </div>
    </div>
    </div>
  )
}

export default DashboardLayout