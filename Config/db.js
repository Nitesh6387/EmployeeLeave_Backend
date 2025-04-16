const mongoose = require('mongoose')

const dbCoonect = async () => {
    const conn = await mongoose.connect('mongodb://localhost:27017/EmployeeLeave')
    if (conn) {
        console.log("mongoDb Connected");
    }
}

module.exports=dbCoonect;