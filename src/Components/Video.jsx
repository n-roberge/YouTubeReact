const video = (video, handleSelect) => {

    return (  
        <div onClick={()=>handleSelect(video)}>
            <img src={video.snippet.thumbnasils.medium.url} alt={video.snippet.description}/>
            <div>{video.snippet.title}</div>
        </div>
    );
}
 
export default video;