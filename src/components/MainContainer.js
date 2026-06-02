import ButoonContainer from "./ButtonContainer"
import VideoContainer from "./VideoContainer"
import { useSelector } from "react-redux";

const MainContainer = ()=>{
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
    return(
       <div className={`mt-16 transition-all duration-300 ${
        isMenuOpen ? "ml-64" : "ml-0"
      }`}>
        <ButoonContainer/>
        <VideoContainer/>
       </div>
    )
}
export default MainContainer