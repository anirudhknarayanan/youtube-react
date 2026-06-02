import { useEffect, useState } from "react"
import { YOUTUBE_VIDEO_LINK } from "../utils/constants"
import VideoCard from "./VideoCard"

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
        <div className="flex flex-wrap">
           {videos.map((video)=> <VideoCard key={video.id} info = {video}/>)}
        </div>
    ) 
}
export default VideoContainer