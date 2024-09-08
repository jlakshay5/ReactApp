import Video from "./Video";
import PlayButton from "./PlayButton";
import useVideos from "../hooks/VideosHook";
import axios from "axios";
import { useCallback, useDeferredValue, useEffect, useMemo } from "react";
import useVideoDispatch from "../hooks/VideoDispatchHook";
import moreVideos from '../data/moredata';




function VideoList({ editVideo }) {
  const videos = useVideos();
  const dispatch = useVideoDispatch();

  const url =
    "https://my.api.mockaroo.com/test_json_react_proj.json?key=50e013a0";

  const play = useCallback(() => console.log("Playing"), []);
  const pause = useCallback(() => console.log("Paused"), []);

  const defVideos = useDeferredValue(videos);

  const memobutton = useMemo(() => (
    <PlayButton onPlay={play} onPause={pause}>
     
    </PlayButton>
  ),[]);

  async function bringVideos() {
    const res = await axios.get(url);
    console.log("get videos", res.data);
    dispatch({ type: "LOAD", payload: res.data });
  }

  useEffect(() => {
    // bringVideos();
  }, []);

 
  return (
    <>
      {defVideos.map((video) => (
        <Video
          key={video.id}
          id={video.id}
          verified={video.verified}
          title={video.title}
          channel={video.channel}
          views={video.views}
          time={video.time}
          editVideo={editVideo}
        >
          {memobutton}
        </Video>
      ))}
      
    </>
  );
}

export default VideoList;
