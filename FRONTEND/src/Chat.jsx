import "./Chat.css";
import { useContext, useEffect, useState, useRef } from "react";
import { MyContext } from "./MyContext";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";

function Chat() {
  const { newChat, prevChats, reply, darkMode } = useContext(MyContext);
  const safeChats = Array.isArray(prevChats) ? prevChats : [];
  const [latestReply, setLatestReply] = useState(null);
  const bottomRef = useRef(null); // ← auto-scroll ref

  // Auto scroll to bottom whenever messages change
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [safeChats, latestReply]);

  // Typing effect for latest assistant reply
  useEffect(() => {
    if (reply === null) {
      setLatestReply(null);
      return;
    }

    if (!safeChats.length) return;

    const words = reply.split(" ");
    let idx = 0;

    const interval = setInterval(() => {
      setLatestReply(words.slice(0, idx + 1).join(" "));
      idx++;
      if (idx >= words.length) clearInterval(interval);
    }, 40);

    return () => clearInterval(interval);
  }, [reply, safeChats]);

  return (
    <>
      {newChat && safeChats.length === 0 && (
  <h1 className={darkMode ? "dark" : "bright"}>
    Start a New Chat!
  </h1>
)}

      {/* Chat messages container with dark/bright class */}
      <div className={`chats ${darkMode ? "dark" : "bright"}`}>
        {/* All messages except last */}
        {safeChats.slice(0, -1).map((chat, idx) => (
          <div
            key={idx}
            className={chat.role === "user" ? "userDiv" : "gptDiv"}
          >
            {chat.role === "user" ? (
              <p className="userMessage">{chat.content}</p>
            ) : (
              <div className="gptMessage">
                <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
                  {chat.content}
                </ReactMarkdown>
              </div>
            )}
          </div>
        ))}

        {/* Last assistant message */}
        {safeChats.length > 0 &&
          safeChats[safeChats.length - 1].role === "assistant" && (
            <div className="gptDiv">
              <div className="gptMessage">
                <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
                  {latestReply || safeChats[safeChats.length - 1].content}
                </ReactMarkdown>
              </div>
            </div>
          )}

        {/* Dummy div to scroll into view */}
        <div ref={bottomRef} />
      </div>
    </>
  );
}

export default Chat;
