import React from "react";
import profileLogo from "../../../assets/img/profileImage.avif";

const Comments = ({ comment }) => {
  return (
    <div className="flex mt-5">
      <img
        src={
          comment?.authorProfileImageUrl
            ? comment?.authorProfileImageUrl
            : profileLogo
        }
        alt="profile logo"
        className="h-10 rounded-full"
      />
      <div className="flex flex-col px-5">
        <div className="font-semibold text-sm">{comment?.channelName}</div>
        <div className="text-sm">{comment?.topComment}</div>
        <div className="ml-5">
          {comment?.replies?.length > 0 && (
            <CommentList comment={comment?.replies} />
          )}
        </div>
      </div>
    </div>
  );
};

const CommentList = ({ comment }) => {
  return (
    <>
      {Array.isArray(comment) && comment?.length > 0 ? (
        comment.map((data) => {
          return <Comments comment={data} />;
        })
      ) : (
        <Comments comment={comment} />
      )}
    </>
  );
};

export default CommentList;
