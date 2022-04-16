import VideoDetails from "./VideoDetails";

const VideoList = ({videos, handleSelect}) => {
    const renderedVideos = videos.map((video)=>{
        return <VideoDetails key = {video.id.videoId} video = {video}
            handleSelect = {handleSelect}/>
    });

    return <div>{renderedVideos}</div>;
}
 
export default VideoList;