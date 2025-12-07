const express = require("express");
const auth = require("../middleware/authMiddleware");
const User = require("../models/User");

const router = express.Router();

// GET logged-in user's profile
router.get("/me", auth, async (req, res) => {
  try {
    // req.user is set by authMiddleware
    const user = await User.findById(req.user._id)
      .select("-password") // exclude password
      .populate("likedBooks"); // populate book info if needed

    if (!user) return res.status(404).json({ message: "User not found" });

    res.json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
