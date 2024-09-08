import { useContext, memo, useRef, useLayoutEffect, useEffect, useId } from "react";
import "./Video.css";
import ThemeContext from "../context/ThemeContext";
import useVideoDispatch from "../hooks/VideoDispatchHook";

const Video = memo(function Video(
  {
  title,
  channel = "Coding away",
  views,
  time,
  verified,
  id,
  children,
  editVideo,
  }) 
{
  console.log("vid rendered", id);
  const theme = useContext(ThemeContext);
  const dispatch = useVideoDispatch();

  // useEffect(()=>{
  //   const idx = setInterval(()=>{
  //     console.log('video playing', id)
  //   },2000);

  //   return ()=>{
  //     clearInterval(idx);
  //     console.log('cleared');
  //   }

  // },[]);
  const ref = useRef(null);
  const uid = useId();

  useLayoutEffect(()=>{
    const {height} = ref.current.getBoundingClientRect();
    console.log(height);
  },[])

  return (
    <>
      <div id={uid} ref={ref} className={`container ${theme}`}>
        <button
          className="close"
          onClick={() => dispatch({ type: "DELETE", payload: id })}
        >
          X
        </button>
        <button className="edit" onClick={() => editVideo(id)}>
          Edit
        </button>
        <div className="pic">
          <img
            src={`https://picsum.photos/id/${id}/220/100`}
            alt="Katherine Johnson"
          />
        </div>

        <div className="title"> {title}</div>
        <div className="channel">
          {channel} {verified && "✅"}{" "}
        </div>

        <div className="views">
          {views} views <span>.</span> {time}
        </div>

        <div>{children}</div>
      </div>
    </>
  );
})

export default Video;
