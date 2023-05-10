import React, { useEffect, useState } from "react";
import { API_KEY, CHANNEL_DESCRIPTION } from "../../constants";
import { numDifferentiation, timeSince } from "../../utils";

const VideoCard = ({ video }) => {
  console.log("video=>", video);
  const [channelDet, setChannelDet] = useState();
  const { snippet, statistics } = video;
  const { thumbnails, channelTitle, publishedAt, channelId } = snippet;
  useEffect(() => {
    getChannelDetails();
  }, []);

  const getChannelDetails = async () => {
    const data = await fetch(
      CHANNEL_DESCRIPTION + channelId + "&key=" + API_KEY
    );
    const getChannelData = await data.json();
    setChannelDet(getChannelData);
  };
  console.log(
    "channelDet=>",
    channelDet?.items[0]?.snippet?.thumbnails?.high?.url
  );
  return (
    <div className="p-2 m-2">
      <div>
        <img
          className="rounded-xl w-96"
          src={thumbnails?.high?.url}
          alt="thumbnails"
        />
      </div>
      <div className="text-base font-bold mt-4 w-80 flex">
        <img
          className="rounded-full w-10 h-10 mx-2"
          src={channelDet?.items[0]?.snippet?.thumbnails?.high?.url}
          alt="thumbnails"
        />
        <span>
          {snippet.title}
          <div className="text-base text-gray-500 mt-1 w-80">
            {channelTitle}
          </div>
          <div className="text-sm text-gray-500 mt-1 w-80">
            {/* <span>{numDifferentiation(statistics.viewCount)} views</span> */}
            <span className="px-1">{timeSince(new Date(publishedAt))}</span>
          </div>
        </span>
      </div>
      {/* <div className="text-base text-gray-500 mt-1 w-80">{channelTitle}</div>
      <div className="text-sm text-gray-500 mt-1 w-80">
        <span>{numDifferentiation(statistics.viewCount)} views</span>
        <span className="px-1">{timeSince(new Date(publishedAt))}</span>
      </div> */}
    </div>
  );
};

export default VideoCard;
