import qalist from "../qalist.js";

// PURE function (NO req, NO res)
const generateReply = async (message) => {
  const userMessage = message.toLowerCase();

  const entry = qalist.find(item =>
    userMessage.includes(item.q.toLowerCase())
  );

  return entry
    ? entry.a
    : "Sorry, free demo AI is not live yet!";
};

export { generateReply };
