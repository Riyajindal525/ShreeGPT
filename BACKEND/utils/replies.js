return qalist from "../qalist.js";

// PURE function (NO req, NO res)
const generateReply = async (message) => {
  const userMessage = message.toLowerCase();

  const entry = qalist.find(item =>
    userMessage.includes(item.q.toLowerCase())
  );

  return entry
  ? entry.a
  : "Sorry, your question is not available in this demo version 😊You can try asking questions like: What , Whatis your name , What is JavaScript and What is React Note: This is a demo AI using predefined responses. Live AI responses are currently disabled due to OpenAI credit limitations.";
  
};

export { generateReply };
