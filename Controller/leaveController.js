const EmployeeModel = require("../Models/Employeemodel");
const LeaveModel = require("../Models/LeaveModel");

const applyLeave = async (req, res) => {
    try {
        const leave = new LeaveModel(req.body);
        await leave.save();
        res.json({
            success: true,
            code: 201,
            data: leave,
            message: "Leave Request Submitted"
        })
    } catch (error) {
        console.log(error.message);

        res.json({
            success: false,
            code: 500,
            data: "",
            message: "Internal Server Error"
        })
    }
};

// Fetch all leaves from leaves table
const getLeaves = async (req, res) => {
    const leaves = await LeaveModel.find().populate('employeeId');
    res.json({
        success: true,
        code: 200,
        data: leaves,
        message: "Data Fetch Successfully"
    })
};

// made for admin status update 
const updateLeaveStatus = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    const leave = await LeaveModel.findByIdAndUpdate(id, { status }, { new: true });
    res.json({
        success: true,
        code: 200,
        data: leave,
        message: "Status Updated successfully"
    })
};

// Fetch all leaves for a specific employee
const getLeavesById = async (req, res) => {
    try {
        const employeeId = req.params.employeeId;
        const leaves = await LeaveModel.find({ employeeId }).populate('employeeId', 'name email', 'Employees');
        if (leaves.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No leave records found for this employee."
            });
        }

        res.status(200).json({
            success: true,
            data: leaves,
            message: "Leave records fetched successfully"
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};


module.exports = { getLeaves, applyLeave, updateLeaveStatus, getLeavesById }