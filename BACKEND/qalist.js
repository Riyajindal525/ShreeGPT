const qaList = [
  // 🔹 BASIC GREETINGS
  { q: "hello", a: "Hello! I am ShreeGPT, your demo AI assistant 😊" },
  { q: "hi", a: "Hi there! How can I help you today?" },
  { q: "hey", a: "Hey! What would you like to know? 😄" },
  { q: "how are you", a: "I am doing great! How about you?" },
  { q: "bye", a: "Goodbye! Feel free to chat again 👋" },

  // 🔹 IDENTITY
  { q: "what is your name", a: "My name is ShreeGPT." },
  { q: "who are you", a: "I am ShreeGPT, a demo AI assistant created for learning purposes." },
  { q: "who created you", a: "I was created by Riya as a demo AI project 🚀" },
  { q: "what is shreegpt", a: "ShreeGPT is a demo AI assistant inspired by ChatGPT." },

  // 🔹 PURPOSE
  { q: "what can you do", a: "I can answer demo questions and help with basic coding concepts." },
  { q: "help", a: "Sure! Ask me anything related to coding or general questions." },

  // 🔹 AI / GPT
  { q: "what is ai", a: "AI stands for Artificial Intelligence 🤖" },
  { q: "what is gpt", a: "GPT is a language model that can understand and generate text." },

  // 🔹 CODING QUESTIONS (IMPORTANT)
  { q: "what is html", a: "HTML stands for HyperText Markup Language. It is used to structure web pages." },
  { q: "what is css", a: "CSS is used to style HTML elements and design web pages." },
  { q: "what is react", a: "React is a JavaScript library used to build user interfaces." },
  { q: "what is node", a: "Node.js allows JavaScript to run outside the browser." },
  { q: "what is api", a: "An API allows different software applications to communicate with each other." },
  { q: "what is frontend", a: "Frontend is the part of a website that users see and interact with." },
  { q: "what is backend", a: "Backend handles server logic, databases, and APIs." },
  { q: "what is full stack", a: "Full stack development includes both frontend and backend development." },

  // 🔹 SIMPLE CODE OUTPUT
  { q: "html example", a: "<html><body><h1>Hello World</h1></body></html>" },
  { q: "css example", a: "h1 { color: red; }" },
  { q: "js example", a: "console.log('Hello World');" },

  // 🔹 COMMON DEV QUESTIONS
  { q: "what is git", a: "Git is a version control system used to track code changes." },
  { q: "what is github", a: "GitHub is a platform to store and share code using Git." },
  { q: "what is bug", a: "A bug is an error or issue in code." },
  { q: "how to learn coding", a: "Practice daily, build projects, and learn from mistakes." },

  // 🔹 FEELINGS
  { q: "sad", a: "It's okay to feel sad sometimes. Take a break and keep going 💛" },
  { q: "happy", a: "That's great to hear! 😄" },
  { q: "love", a: "Love is a beautiful emotion ❤️" },

  // 🔹 FUN
  { q: "joke", a: "Why do programmers prefer dark mode? Because light attracts bugs 😄" },
  { q: "funny", a: "I try to keep things light and helpful 😄" },

  // 🔹 DEMO LIMITATION (HONEST LIKE CHATGPT)
  { q: "are you real", a: "I am a demo AI, not a real human." },
  { q: "can you learn", a: "I cannot learn yet. I work on predefined demo responses." },
  { q: "live data", a: "I do not have access to live data in this demo version." },

  // 🔹 DEFAULT
  { q: "ok", a: "Okay 👍" },
  { q: "thanks", a: "You're welcome! 😊" },
  { q: "thank you", a: "Happy to help! 😄" },
{ q: "who created you", a: "I was created by Riya Jindal for demo purposes 🚀" },
  { q: "who made you", a: "ShreeGPT was made by Riya Jindal 👩‍💻" },
  { q: "who is your creator", a: "Riya Jindal is my creator 💙" },
  { q: "what is shreegpt", a: "ShreeGPT is a demo GPT made by Riya Jindal, inspired by ChatGPT 🤖" },

  { q: "what can you do", a: "I can answer demo questions, including basic coding questions!" },
  { q: "help", a: "Sure! Ask me coding or general questions 😊" },
   {
    q: "what is javascript",
    a: "JavaScript is a high-level, interpreted, and dynamically typed programming language mainly used to create interactive and dynamic web applications. While HTML is used for structure and CSS is used for styling, JavaScript adds behavior to a website. With JavaScript, we can: Handle user events (click, input, submit), Update content without reloading the page, Validate forms, Create animations, Communicate with servers using APIs. Initially, JavaScript was only used in browsers, but with Node.js it can now run on the server as well. Today, JavaScript is used in: Frontend (React, Angular, Vue), Backend (Node.js), Mobile Apps (React Native), Desktop Apps (Electron)"
  },
  {
    q: "explain var let and const",
    a: "In JavaScript, variables are used to store data values. There are three ways to declare variables: var, let, and const. Var has function scope and can be re-declared and re-assigned, which may cause bugs. Let has block scope and can be re-assigned but not re-declared, making it safer. Const also has block scope but cannot be re-assigned or re-declared and must be initialized at declaration time. In modern JavaScript, let and const are preferred over var because they help write clean and predictable code."
  },
  {
    q: "what is asynchronous javascript",
    a: "Asynchronous JavaScript allows the program to perform long-running tasks like API calls, file loading, or timers without blocking the main thread. JavaScript handles async tasks using callbacks, promises, and async/await. Callbacks can cause callback hell, making code hard to read. Promises improve readability by handling success and failure using then and catch. Async/await is built on promises and makes asynchronous code look synchronous, improving readability and debugging. Async programming is essential for building fast and responsive web applications."
  },
  {
    q: "what is closure in javascript",
    a: "A closure is created when a function remembers variables from its outer lexical scope even after the outer function has finished execution. Closures allow functions to access variables defined outside them. They are commonly used for data hiding, encapsulation, and maintaining state. Closures are used in event handlers, callbacks, and React hooks. Although powerful, closures should be used carefully because they can increase memory usage if not managed properly."
  },
  {
    q: "what is event loop in javascript",
    a: "The event loop is a mechanism that allows JavaScript to perform non-blocking operations even though it is single-threaded. JavaScript runtime consists of the call stack, Web APIs, callback queue, microtask queue, and event loop. Synchronous code runs first in the call stack. Asynchronous tasks are handled by Web APIs and moved to queues. The event loop continuously checks whether the call stack is empty and pushes tasks back for execution. This ensures smooth UI performance and efficient handling of asynchronous operations."
  },
  // New entries
  {
    q: "who created this Q&A list",
    a: "This Q&A list was created by Riya Jindal as a demonstration of JavaScript questions and answers."
  },
  {
    q: "what is hoisting in javascript",
    a: "Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope. Variables declared with var are hoisted and initialized with undefined, while let and const are hoisted but not initialized, causing a ReferenceError if accessed before declaration. Functions declared using function declarations are hoisted entirely and can be called before they appear in the code."
  },
  {
    q: "what is prototype in javascript",
    a: "Every JavaScript object has a prototype. A prototype is also an object, and all JavaScript objects inherit their properties and methods from their prototype. This is called prototype chaining. Prototypes allow inheritance of methods and properties, helping to reduce memory usage and improve code reusability."
  },
  {
    q: "what is DOM in javascript",
    a: "The Document Object Model (DOM) is a programming interface for web documents. It represents the page as a tree structure where each node is an object representing a part of the document. JavaScript can interact with the DOM to read and modify content, structure, and styling dynamically, enabling interactive web applications."
  },
  {
    q: "what is event delegation in javascript",
    a: "Event delegation is a technique of attaching a single event listener to a parent element that will fire for all its children. Instead of attaching individual listeners to each child, the event bubbles up to the parent, which handles it. Event delegation improves performance, reduces memory usage, and allows dynamic elements to be handled efficiently."
  }

  
];

export default qaList;
