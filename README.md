# ShreeGPT – Demo GPT Chat App 

**ShreeGPT** is a React-based GPT chat app using **demo/local data**.  

OpenAI API is not connected due to credit limitations; chats are stored locally for demo purposes only. .

---

## Features

- Chat with AI-like responses (demo data)
- Typing animation for assistant messages
- Multiple chat threads (demo only)
- JWT-based signup/login authentication
- Dark / light mode toggle
- Responsive UI

---

## Tech Stack

- **Frontend:** React, Context API
- **Backend:** Node.js + Express (JWT auth demo)
- **Styling:** CSS, FontAwesome
- **Markdown Rendering:** ReactMarkdown, rehype-highlight
- **Unique IDs:** uuid
- **Authentication:** JWT (JSON Web Token)

---

## Installation & Running Locally

```bash
# Clone the repo
git clone https://github.com/Riyajindal525/ShreeGPT.git
cd ShreeGPT

# Install dependencies
npm install

# Start frontend
npm start

# Start backend (Node/Express server)
cd backend
npm install
npm start
