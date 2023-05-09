import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FILTER_LIST_NAME, YOUTUBE_VIDEO_URL } from "../../constants";
import Button from "./Button";
import ShimmerVideoCard from "./ShimmerVideoCard";
import VideoCard from "./VideoCard";

const MainContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_URL);
    const reqData = await data.json();
    console.log("Req data=>", reqData);
    setVideos(reqData.items);
  };

  return (
    <>
      <div className="flex">
        {FILTER_LIST_NAME.map((name) => {
          return <Button name={name} />;
        })}
      </div>
      <div className="flex flex-wrap ml-8">
        {" "}
        {videos.length > 0
          ? videos.map((video) => {
              return (
                <Link to={"/youtube/watch?v=" + video.id}>
                  <VideoCard video={video} key={video.id} />
                </Link>
              );
            })
          : Array.apply(null, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]).map((dummy) => {
              return <ShimmerVideoCard />;
            })}{" "}
      </div>
    </>
  );
};

export default MainContainer;
