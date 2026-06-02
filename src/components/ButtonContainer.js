import Button from "./Button"
import { useSelector } from "react-redux";
const list = ["All","Gaming","songs","live","soccer","cricket","cooking","All","Gaming","songs","live","soccer","cricket","cooking"]
const ButoonContainer = ()=>{
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
    return(
        <div className={`fixed top-16 right-0 z-40 bg-white flex overflow-x-auto px-2 py-2 shadow-sm transition-all duration-300 ${
        isMenuOpen ? "left-64" : "left-0"
      }`}>
            {list.map((item,index)=> <Button key={index} name = {item}/>)}
           
        </div>
    )
}
export default ButoonContainer