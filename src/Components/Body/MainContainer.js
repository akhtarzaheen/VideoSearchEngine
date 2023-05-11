import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FILTER_LIST_NAME, YOUTUBE_VIDEO_URL } from "../../constants";
import Button from "./Button";
import ShimmerVideoCard from "./ShimmerVideoCard";
import VideoCard from "./VideoCard";
import style from "./Main.module.css";

function MainContainer() {
  const [videos, setVideos] = useState([]);
  const searchList = useSelector((store) => store.search.searchList);
  // console.log("searchList=>", searchList);
  useEffect(() => {
    getVideos();
  }, []);
  useEffect(() => {
    if (searchList) {
      setVideos(searchList.items);
    }
  }, [searchList]);
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_URL);
    const reqData = await data.json();
    // console.log("Req data=>", reqData);
    setVideos(reqData.items);
  };
  console.log("videos=>", videos);

  return (
    <div className="w-full flex flex-col">
      <div
        className={`w-full flex items-center overflow-auto pb-2 ${style.hiddenScroll}`}
      >
        {FILTER_LIST_NAME.map((name) => {
          return <Button name={name} />;
        })}
      </div>
      <div className="flex flex-wrap ml-8 mt-4">
        {videos && videos.length > 0
          ? videos.map((video) => {
              return (
                // video?.snippet?.thumbnails?.maxres &&
                <Link to={"/youtube/watch?v=" + video.id}>
                  <VideoCard video={video} key={video.id} />
                </Link>

                // <Link to={"/youtube/watch?v=" + video.id}>
                //   <VideoCard video={video} key={video.id} />
                // </Link>
              );
            })
          : Array.apply(null, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]).map((dummy) => {
              return <ShimmerVideoCard />;
            })}{" "}
      </div>
    </div>
  );
}

export default MainContainer;
