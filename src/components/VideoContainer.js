import { useEffect, useState } from "react"
import { YOUTUBE_VIDEO_LINK } from "../utils/constants"
import VideoCard from "./VideoCard"
import { Link } from "react-router-dom"

const VideoContainer =()=>{
    const [videos,setVideos] = useState([])


    useEffect(()=>{
        fetchData()
    },[])
    const fetchData =async ()=>{
        const data = await fetch(YOUTUBE_VIDEO_LINK)
        const json = await data.json()
        console.log(json.items);
        setVideos(json.items)
        

    }
    return (
        <div  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-16">
           {videos.map((video)=><Link to={"/watch?v="+video.id}><VideoCard key={video.id} info = {video}/></Link> )}
        </div>
    ) 
}
export default VideoContainer