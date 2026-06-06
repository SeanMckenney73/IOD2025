const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const commentSchema = new Schema({
  UID: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'user', 
    required: true 
  },
  commentDesc: { 
    type: String, 
    required: true, 
    trim: true 
  }
}, { 
  timestamps: true 
});


const postSchema = new Schema({
  postTitle: { 
    type: String, 
    required: true, 
    trim: true 
  },
  postDesc: { 
    type: String, 
    required: true 
  },
  postImage: { 
    type: String, 
    default: "https://example.com" 
  },
  UID: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'user', 
    required: true 
  },
  comments: [commentSchema] 
}, { 
  timestamps: true 
});

module.exports = mongoose.model("post", postSchema);