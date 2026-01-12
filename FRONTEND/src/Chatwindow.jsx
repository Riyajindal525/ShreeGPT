import "./Chatwindow.css";
import Chat from "./Chat.jsx";
import { MyContext } from "./MyContext.jsx";
import { useContext, useState } from "react";

function Chatwindow() {
  const {
    prompt,
    setPrompt,
    reply,
    setReply,
    currentThreadID,
    setPrevChats,
    darkMode,
    user,
    setUser,
    setDarkMode

  } = useContext(MyContext);

  const [isopen, setIsOpen] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  // Signup state
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  // Login state
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // Chat API
  const getReply = async () => {
    if (!prompt.trim()) return;

    try {
      const response = await fetch("http://localhost:8080/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(user?.token && { Authorization: `Bearer ${user.token}` })
        },
        body: JSON.stringify({
          message: prompt,
          threadID: currentThreadID
        })
      });

      const data = await response.json();

      setReply(data.reply);
      setPrevChats(prev => [
        ...prev,
        { role: "user", content: prompt },
        { role: "assistant", content: data.reply }
      ]);
      setPrompt("");
    } catch (err) {
      console.error("Error fetching reply:", err);
      alert("Failed to fetch reply. Try again later.");
    }
  };

  // Signup function
  const handleSignup = async () => {
    if (!signupName || !signupEmail || !signupPassword) {
      alert("Please fill all fields!");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: signupName,
          email: signupEmail,
          password: signupPassword
        })
      });

      const data = await response.json();

      if (response.ok) {
        alert(`${data.message || "Signup successful!"}. You can login now.`);
        setShowSignup(false);
        setShowLogin(true);
        setSignupName(""); setSignupEmail(""); setSignupPassword("");
      } else {
        alert(data.message || data.error || "Signup failed.");
      }
    } catch (err) {
      console.error("Signup error:", err);
      alert("Error signing up. Try again later.");
    }
  };

  // Login function
  const handleLogin = async () => {
    if (!loginEmail || !loginPassword) {
      alert("Please fill all fields!");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: loginEmail,
          password: loginPassword
        })
      });

      const data = await response.json();

      if (response.ok) {
        const loggedInUser = { name: data.name, email: loginEmail, token: data.token };
        setUser(loggedInUser);
        localStorage.setItem("user", JSON.stringify(loggedInUser));
        setShowLogin(false);
        setLoginEmail(""); setLoginPassword("");
        alert(data.message || "Login successful!");
      } else {
        alert(data.message || data.error || "Login failed.");
      }
    } catch (err) {
      console.error("Login error:", err);
      alert("Error logging in. Try again later.");
    }
  };

  // Logout
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <div className={`chatwindow ${darkMode ? "dark" : "light"}`}>
      {/* Navbar */}
      <div className={`nav-bar ${darkMode ? "dark" : "light"}`}>
        <div className="nav-left">
          <span>ShreeGPT <i className="fa-solid fa-caret-down"></i></span>
        </div>

        <div className="nav-right">
          <i className="fa-solid fa-moon" onClick={() => setDarkMode(prev => !prev)}></i>
          <div className="userIconDiv" onClick={() => setIsOpen(prev => !prev)}>
            <i className="fa-solid fa-user"></i>
            {user && <span style={{ marginLeft: "5px" }}>{user.name}</span>}
          </div>
        </div>

        {isopen && (
          <div className="dropDown">
            {!user && (
              <>
                <div className="dropDownItem" onClick={() => { setShowSignup(true); setIsOpen(false); }}>
                  <i className="fa-regular fa-circle-user"></i> Sign Up
                </div>
                <div className="dropDownItem" onClick={() => { setShowLogin(true); setIsOpen(false); }}>
                  <i className="fa-solid fa-arrow-right-to-bracket"></i> Log in
                </div>
              </>
            )}
            {user && (
              <div className="dropDownItem" onClick={handleLogout}>
                <i className="fa-solid fa-arrow-right-from-bracket"></i> Log out
              </div>
            )}
          </div>
        )}
      </div>

      {/* Signup Modal */}
      {showSignup && (
        <div className="authOverlay">
          <div className="authModal">
            <span className="close" onClick={() => setShowSignup(false)}>✖</span>
            <h2>Sign Up</h2>
            <input placeholder="Name" value={signupName} onChange={e => setSignupName(e.target.value)} />
            <input placeholder="Email" value={signupEmail} onChange={e => setSignupEmail(e.target.value)} />
            <input placeholder="Password" type="password" value={signupPassword} onChange={e => setSignupPassword(e.target.value)} />
            <div className="submit-btn"><button onClick={handleSignup}>Sign Up</button></div>
            <div className="authFooter">
              <br />
              <span>Already have an account? <b style={{ cursor: "pointer", color: "#4a90e2" }} onClick={() => { setShowSignup(false); setShowLogin(true); }}>Login</b></span>
            </div>
          </div>
        </div>
      )}

      {/* Login Modal */}
      {showLogin && (
        <div className="authOverlay">
          <div className="authModal">
            <span className="close" onClick={() => setShowLogin(false)}>✖</span>
            <h2>Log In</h2>
            <input placeholder="Email" value={loginEmail} onChange={e => setLoginEmail(e.target.value)} />
            <input placeholder="Password" type="password" value={loginPassword} onChange={e => setLoginPassword(e.target.value)} />
            <div className="submit-btn"><button onClick={handleLogin}>Log In</button></div>
            <div className="authFooter">
              <br />
              <span>Don't have an account? <b style={{ cursor: "pointer", color: "#4a90e2" }} onClick={() => { setShowSignup(true); setShowLogin(false); }}>Sign Up</b></span>
            </div>
          </div>
        </div>
      )}

      <Chat />

      {/* Input */}
      <div className="ChatInputbox">
        <div className="userInput">
          <input
            placeholder="Ask anything..."
            value={prompt}
            onChange={e => setPrompt(e.target.value)}
            onKeyDown={e => e.key === "Enter" && getReply()}
          />
          <div className="submit" onClick={getReply}>
            <button><i className="fa-solid fa-paper-plane"></i></button>
          </div>
          <div className="info">
           ShreeGPT is not taking data from OpenAI due to credit issues and is working on demo data.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chatwindow;
