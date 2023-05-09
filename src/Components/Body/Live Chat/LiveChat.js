import React from "react";
import profileLogo from "../../../assets/img/profileLogo.png";

const LiveChat = (props) => {
  const { name, chat } = props.chat;
  return (
    <div className="flex flex-row p-1 items-center">
      <img className="h-5" src={profileLogo} alt="profile logo" />
      <div className="px-2">
        <span className="text-sm text-gray-500">{name}</span>
        <span className="px-2 text-sm">{chat}</span>
      </div>
    </div>
  );
};

export default LiveChat;
