import { Outlet } from "react-router-dom"
import MainContainer from "./MainContainer"
import SideBar from "./SideBar"
const Body = ()=>{
    return(
        <div className="flex grid-flow-col overflow-x-hidden">
         <SideBar/>
         <Outlet></Outlet>

        </div>
    )
}
export default Body