const VideoDetails = ({video, handleSelect}) => {

    return (  
        <div onClick={()=>handleSelect(video)}>
            <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
            <div>{video.snippet.title}</div>
        </div>
    );
}
 
export default VideoDetails;