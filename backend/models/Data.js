const mongoose = require('mongoose');

const ComplaintSchema = new mongoose.Schema({
  complainantName: { type: String, required: true },
  complaintType: { type: String, required: true },
  fdate: { type: Date, required: true },
  description: { type: String, required: true },
  attachment: { type: String },
  username: { type: String, required: true },
  createdAt: { type: Date },
  updatedAt: { type: Date },
  placedToOtherCourt: { type: Boolean, default: false },
  status: { type: String },
  assignedDate: { type: Date },
  assignedTime: { type: String }
}, { collection: 'complaints' });

module.exports = mongoose.model('Complaint', ComplaintSchema);
