import VideoDB from "./data/data";
import "./App.css";
import {
  lazy,
  Suspense,
  useCallback,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";
import ThemeContext from "./context/ThemeContext";
import VideosContext from "./context/VideosContext";
import VideoDispatchContext from "./context/VideoDispatchContext";
import Counter from "./components/Counter";
import moreVideos from "./data/moredata";

const Dummy = lazy(() => import("./components/Dummy"));

function App() {
  console.log("app rendered");
  const [editableVideo, seteditableVideo] = useState(null);
  const [mode, setMode] = useState("lightMode");
  const inputRef = useRef(null);

  function videoReducer(videos, action) {
    switch (action.type) {
      case "ADD":
        return [...videos, { ...action.payload, id: videos.length + 1 }];

      case "DELETE":
        return videos.filter((video) => video.id !== action.payload);

      case "UPDATE":
        const index = videos.findIndex((v) => v.id === action.payload.id);
        const newVideos = [...videos];
        newVideos.splice(index, 1, action.payload);
        seteditableVideo(null);

        return newVideos;

      case "LOAD":
        return action.payload;

      default:
        return videos;
    }
  }

  useEffect(() => {
    inputRef.current.jumpTo();
  }, []);

  // const [videos, dispatch] = useReducer(videoReducer, []);
  const [videos, dispatch] = useReducer(videoReducer, VideoDB);

  const editVideo = useCallback(
    function editVideo(id) {
      seteditableVideo(videos.find((video) => video.id === id));
    },
    [videos]
  );

  const [show, setShow] = useState(false);

  return (
    <ThemeContext.Provider value={mode}>
      <VideosContext.Provider value={videos}>
        <VideoDispatchContext.Provider value={dispatch}>
          <div className={`App ${mode}`} onClick={() => console.log("app")}>
            {/* <Counter></Counter> */}
            {/* <button className="modebutton" onClick={() => setShow(true)}>
              Lazy load
            </button>
            {show ? (
              <Suspense fallback={<>loading.....</>}>
                <Dummy/>
              </Suspense>
            ) : null} */}
            <button
              className="modebutton"
              onClick={() => dispatch({ type: "LOAD", payload: moreVideos })}
            >
              {" "}
              Get More Vids
            </button>
            <button
              className="modebutton"
              onClick={() => {
                mode === "darkMode"
                  ? setMode("lightMode")
                  : setMode("darkMode");
              }}
            >
              Toggle Mode
            </button>
            <AddVideo ref={inputRef} editableVideo={editableVideo}></AddVideo>
            <div className="video-container">
              <VideoList editVideo={editVideo}></VideoList>
            </div>
          </div>
        </VideoDispatchContext.Provider>
      </VideosContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
