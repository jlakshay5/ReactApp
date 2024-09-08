import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import "./AddVideo.css";
import useVideoDispatch from "../hooks/VideoDispatchHook";

const AddVideo = forwardRef(function AddVideo({editableVideo},ref) {
  
  const dispatch = useVideoDispatch();
  const iRef = useRef(null);

  useImperativeHandle(ref,()=>{
    return{
      jumpTo(){
      iRef.current.focus();
    }
  }
  },[]);

  const initialState = {
    channel: "Coding away",
    time: "1 year ago",
    verified: true,
    title:'',
    views:''
  };
  const [video, setVideo] = useState(initialState);
  function handleSubmit(e) {
    e.preventDefault();
    if(editableVideo){
      dispatch({type:'UPDATE', payload:video});
    }
    else{
      dispatch({ type: "ADD", payload: video});
    }
    setVideo(initialState);
  }

  function handleChange(e) {
    setVideo({ ...video, [e.target.name]: e.target.value });
  }


  useEffect(()=>{
    if(editableVideo){
      setVideo(editableVideo);
      // console.log(editableVideo);
    }

    // inputRef.current.focus();
    
  },[editableVideo]);

  return (
    <form>
      <input
        ref={iRef}
        type="text"
        name="title"
        onChange={handleChange}
        placeholder="Title"
        value = {video.title}
      />

      <input
        type="text"
        name="views"
        onChange={handleChange}
        placeholder="Views"
        value = {video.views}
      />
      <button onClick={handleSubmit}>{editableVideo?'Edit':'Add'} Video</button>
    </form>
  );
}
)
export default AddVideo;
