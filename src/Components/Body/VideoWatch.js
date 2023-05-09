import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { API_KEY, YOUTUBE_VIDEO_COMMENTS_URL } from "../../constants";
import { closeMenu } from "../../Slices/App-slice";
import CommentList from "./comments/commentList";
import LiveChatList from "./Live Chat/LiveChatList";

const VideoWatch = () => {
  const [searchParams] = useSearchParams();
  const [commentList, setCommentList] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
    getCommentsList();
  }, []);

  const getCommentsList = async () => {
    const data = await fetch(
      YOUTUBE_VIDEO_COMMENTS_URL + searchParams.get("v") + "&key=" + API_KEY
    );
    const commentsData = await data.json();

    // setCommentList(commentsData.items);
    console.log("data=>", commentsData);
    let list = [];
    commentsData.items.map((commentData) => {
      let repArr = [];
      commentData?.replies?.comments?.map((data) => {
        let objRep = {
          replies: [],
          channelName: data.snippet.authorDisplayName,
          topComment: data.snippet.textOriginal,
          authorProfileImageUrl: data.snippet.authorProfileImageUrl,
        };
        repArr.push(objRep);
      });
      let obj = {
        replies: repArr,
        channelName:
          commentData.snippet.topLevelComment.snippet.authorDisplayName,
        topComment: commentData.snippet.topLevelComment.snippet.textOriginal,
        authorProfileImageUrl:
          commentData.snippet.topLevelComment.snippet.authorProfileImageUrl,
      };
      // console.log("obj=>", obj);
      list.push(obj);
    });
    setCommentList(list);
  };
  console.log("comments=>", commentList);
  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <iframe
          width="900"
          height="500"
          src={
            "https://www.youtube.com/embed/" +
            searchParams.get("v") +
            "?autoplay=1"
          }
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <div>
          <LiveChatList />
        </div>
      </div>
      <div>
        {commentList.map((comment) => {
          return <CommentList comment={comment} />;
        })}
      </div>
    </div>
  );
};

export default VideoWatch;
