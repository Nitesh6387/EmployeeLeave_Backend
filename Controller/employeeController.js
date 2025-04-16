const EmployeeModel = require("../Models/Employeemodel");

const registerEmployee = async (req, res) => {
    try {
        const { name, email } = req.body;
        const existing = await EmployeeModel.findOne({ email });
        if (existing) {
            return res.json({
                success: false,
                code: 400,
                data: "",
                message: "Employee Already Registered"
            })
        }
        const employee = new EmployeeModel({ name, email });
        await employee.save();

        res.json({
            success: true,
            code: 201,
            data: employee,
            message: "Employee Register successfully"
        })
    } catch (error) {
        console.log(error.message);

        res.status(500).json({ message: "Internal Server error", error });
    }
};

const loginEmployee = async (req, res) => {
    try {
        const { email } = req.body;
        const employee = await EmployeeModel.findOne({ email });
        if (!employee) {
            return res.json({
                success: false,
                code: 400,
                data: "",
                message: "Login Failed || User Not Found!"
            })
        }
        else {
            res.json({
                success: true,
                code: 200,
                data: employee,
                message: "Login Successfull"
            })
        }

    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};

const getEmployees = async (req, res) => {
    try {
        const employees = await EmployeeModel.find()
        res.json({
            success: true,
            code: 200,
            data: employees,
            message: "Employees Data Fetch Successfully"
        })
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
}


module.exports = { getEmployees,registerEmployee, loginEmployee }