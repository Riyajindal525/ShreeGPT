import "./App.css";
import Sidebar from "./Sidebar.jsx";
import Chatwindow from "./Chatwindow.jsx";
import { MyContext } from "./MyContext.jsx";
import { useState, useEffect } from "react";
import { v1 as uuidv1 } from "uuid";

function App() {
  const [prompt, setPrompt] = useState("");
  const [reply, setReply] = useState("");
  const [currentThreadID, setCurrentThreadID] = useState(uuidv1());
  const [newChat, setNewChat] = useState(true);
  const [prevChats, setPrevChats] = useState([]);
  const [allthreads, setAllthreads] = useState([]);
  const [darkMode, setDarkMode] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const ProviderValue = {
    prompt,
    setPrompt,
    reply,
    setReply,
    currentThreadID,
    setCurrentThreadID,
    newChat,
    setNewChat,
    prevChats,
    setPrevChats,
    allthreads,
    setAllthreads,
    darkMode,
    setDarkMode,
    sidebarOpen,
    setSidebarOpen,
    user,
    setUser
  };

  return (
    <div className="app">
      <MyContext.Provider value={ProviderValue}>
        <Sidebar />
        <Chatwindow />
      </MyContext.Provider>
    </div>
  );
}

export default App;
