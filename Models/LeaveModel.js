const mongoose = require('mongoose')

const leaveSchema = new mongoose.Schema({
    employeeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Employees' },
    from: Date,
    to: Date,
    type: String,
    reason: String,
    status: { type: String, enum: ['Pending', 'Approved', 'Rejected'], default: 'Pending' }
});


const LeaveModel = mongoose.model('Leaves', leaveSchema);
module.exports = LeaveModel;