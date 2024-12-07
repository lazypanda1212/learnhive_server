import mongoose from "mongoose";

const messageSchema = mongoose.Schema({
  senderId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  text: { type: String, required: true },
  createdAt: { type: Date, default: new Date() },
});

const Message = mongoose.model("Message", messageSchema);

export default Message;
