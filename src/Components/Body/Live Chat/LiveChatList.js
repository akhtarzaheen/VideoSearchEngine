import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  LIVE_CHAT,
  LIVE_CHAT_API_URL,
  LIVE_CHAT_NAME,
} from "../../../constants";
import { addChat } from "../../../Slices/Chat-slice";
import LiveChat from "./LiveChat";

const LiveChatList = () => {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   getLiveChatList();
  // }, []);

  const chatList = useSelector((store) => store.chat.chat);
  console.log("chatList=>", chatList[0]);
  useEffect(() => {
    let timer = setInterval(() => {
      dispatch(
        addChat({
          name: LIVE_CHAT_NAME[
            Math.floor(Math.random() * LIVE_CHAT_NAME.length)
          ],
          chat: LIVE_CHAT.chat,
        })
      );
    }, 2000);
    return () => {
      clearInterval(timer);
    };
  }, [LIVE_CHAT]);

  // const getLiveChatList = async () => {
  //   const data = await fetch(LIVE_CHAT_API_URL);
  //   const liveChats = await data.json();
  //   console.log("liveChats=>", liveChats);
  // };
  return (
    <div className="ml-5 rounded-lg w-96 h-[500px] border border-gray-300">
      <div className="h-10 p-2 border-b-2 w-96">
        <span className="px-5 font-medium">Live Chat</span>
      </div>
      <div className="overflow h-[460px]  overflow-y-scroll flex flex-col-reverse">
        {chatList &&
          chatList.map((chat) => {
            return <LiveChat chat={chat} />;
          })}
      </div>
    </div>
  );
};

export default LiveChatList;
