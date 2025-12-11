const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    publicationYear: {
        type: Number,
        required: true
    },
    genre: {
        type: String
    },
    ISBN: {
        type: String,
        required: true,
        unique: true
    },
    status: { 
        type: String,
        enum: ["available", "rented"],
        default: "available"
    },
    rentedBy: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User", 
        default: null 
    },
    likedBy: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    image: String
}, { timestamps: true });

module.exports = mongoose.model("Book", bookSchema);
