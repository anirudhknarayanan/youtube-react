import { useSelector } from "react-redux"

const SideBar = ()=>{
    const isMenuOpen = useSelector((store)=>store.app.isMenuOpen)
    if(!isMenuOpen) return null
    
    return(
           <div className="w-64 h-screen shadow-lg bg-white p-4">
      <ul className="space-y-4">
        <li>🏠 Home</li>
        <li>🎬 Shorts</li>
        <li>📺 Subscriptions</li>
        <li>📚 Library</li>
      </ul>
    </div>
    )
}
export default SideBar