import MainContainer from "./MainContainer"
import SideBar from "./SideBar"
const Body = ()=>{
    return(
        <div className="flex grid-flow-col">
         <SideBar/>
         <MainContainer/>

        </div>
    )
}
export default Body