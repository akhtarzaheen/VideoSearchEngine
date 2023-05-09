import React from "react";
import { numDifferentiation, timeSince } from "../../utils";

const VideoCard = ({ video }) => {
  console.log("video=>", video);
  const { snippet, statistics } = video;
  const { thumbnails, channelTitle, publishedAt } = snippet;
  return (
    <div className="p-2 m-2">
      <div>
        <img
          className="rounded-xl w-96"
          src={thumbnails.medium.url}
          alt="thumbnails"
        />
      </div>
      <div className="text-base font-bold mt-4 w-80">{snippet.title}</div>
      <div className="text-base text-gray-500 mt-1 w-80">{channelTitle}</div>
      <div className="text-sm text-gray-500 mt-1 w-80">
        <span>{numDifferentiation(statistics.viewCount)} views</span>
        <span className="px-1">{timeSince(new Date(publishedAt))}</span>
      </div>
    </div>
  );
};

export default VideoCard;
