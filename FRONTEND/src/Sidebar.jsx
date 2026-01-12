import { useContext, useEffect } from "react";
import { MyContext } from "./MyContext.jsx";
import "./Sidebar.css";
import Logo from "./assets/LogoSidebar.png";
import { v1 as uuidv1 } from "uuid";
import { Sidebar } from "react-pro-sidebar";

function SidebarofApp() {
  const {
    allthreads,
    setAllthreads,
    currentThreadID,
    setNewChat,
    setPrompt,
    setReply,
    setCurrentThreadID,
    setPrevChats,
    darkMode,
  } = useContext(MyContext);

  const getallThread = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/thread", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      const data = await response.json();

      const filteredData = data.threads.map(thread => ({
        threadID: thread.threadID,
        title: thread.title,
      }));

      setAllthreads(filteredData);
    } catch (err) {
      console.log(err);
    }
  };

  const createNewChat = () => {
    setNewChat(true);
    setPrompt("");
    setReply(null);
    setCurrentThreadID(uuidv1());
    setPrevChats([]);
  };

  const changeThread = async (newthreadID) => {
    try {
      setCurrentThreadID(newthreadID);
      const response = await fetch(
        `http://localhost:8080/api/thread/${newthreadID}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );
      const data = await response.json();
      setPrevChats(data.messages);
      setNewChat(false);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteThread = async (threadID) => {
    try {
      await fetch(`http://localhost:8080/api/thread/${threadID}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });

      setAllthreads(prev =>
        prev.filter(t => t.threadID !== threadID)
      );

      if (threadID === currentThreadID) {
        setPrevChats([]);
        setCurrentThreadID(null);
        setNewChat(true);
        setReply(null);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getallThread();
  }, [currentThreadID]);

  return (
      <section className={`sidebar ${darkMode ? "dark" : "light"} `}>

     <button
        className={`new-chat-btn ${darkMode ? "dark" : "light"}`}
        onClick={createNewChat}
      >
        <img src={Logo} alt="logo" className="logo" />
        New Chat
        <i className="fa-solid fa-pen-to-square"></i>
      </button>

      <ul className="history">
        {allthreads?.map(thread => (
          <li
            key={thread.threadID}
            onClick={() => changeThread(thread.threadID)}
            className={
              thread.threadID === currentThreadID ? "active" : ""
            }
          >
            {thread.title}
            <i
              className="fa-solid fa-trash"
              onClick={(e) => {
                e.stopPropagation();
                deleteThread(thread.threadID);
              }}
            />
          </li>
        ))}
      </ul>

      <div className={`sign ${darkMode ? "dark" : "light"}`}>
        <p>Made by Riya Jindal &hearts;</p>
      </div>
    </section>
  );
}

export default SidebarofApp;
