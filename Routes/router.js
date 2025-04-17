const { registerEmployee, loginEmployee, getEmployees } = require('../Controller/employeeController');
const { getLeaves, applyLeave, updateLeaveStatus, getLeavesById } = require('../Controller/leaveController');

const router = require('express').Router()

// admin routes 
router.get('/all-employees', getEmployees)
router.put('/update-leave-status/:id', updateLeaveStatus)
router.get('/all-leaves', getLeaves)


router.post('/emp-register', registerEmployee)
router.post('/emp-login', loginEmployee)

// Employee routes 
router.get('/myleaves/:employeeId', getLeavesById)
router.post('/apply-leave', applyLeave)




module.exports = router;