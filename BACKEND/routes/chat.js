import express from "express";
import { generateReply } from "../utils/replies.js";
import Thread from "../models/thread.js";

const router = express.Router();

/* ---------------- TEST ---------------- */
router.post("/test", async (req, res) => {
  try {
    const threadData = new Thread({
      threadID: "test12",
      title: "Test Thread",
    });
    await threadData.save();
    res.json({ message: "Thread saved successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/* ---------------- GET ALL THREADS ---------------- */
router.get("/thread", async (req, res) => {
  try {
    const threads = await Thread.find().sort({ updatedAt: -1 });
    res.json({ threads });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/* ---------------- GET SINGLE THREAD ---------------- */
router.get("/thread/:threadID", async (req, res) => {
  const { threadID } = req.params;
  try {
    const thread = await Thread.findOne({ threadID });
    if (!thread)
      return res.status(404).json({ message: "Thread not found" });

    res.json(thread);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/* ---------------- DELETE THREAD ---------------- */
router.delete("/thread/:threadID", async (req, res) => {
  const { threadID } = req.params;
  try {
    const result = await Thread.deleteOne({ threadID });
    if (!result.deletedCount)
      return res.status(404).json({ message: "Thread not found" });

    res.json({ message: "Thread deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/* ---------------- CHAT (MAIN) ---------------- */
router.post("/chat", async (req, res) => {
  const { threadID, message } = req.body;

  if (!threadID || !message)
    return res.status(400).json({ message: "threadID & message required" });

  try {
    let thread = await Thread.findOne({ threadID });

    if (!thread) {
      thread = new Thread({
        threadID,
        title: message,
        messages: [],
      });
    }

    // Save user message
    thread.messages.push({ role: "user", content: message });

    // AI reply
    const reply = await generateReply(message);

    thread.messages.push({ role: "assistant", content: reply });
    thread.updatedAt = Date.now();
    await thread.save();
       
    res.json({ reply });
  ;
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
