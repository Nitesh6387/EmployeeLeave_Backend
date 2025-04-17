const mongoose = require('mongoose')

const mongoURI = 'mongodb+srv://niteshverma6387:nFXuzYHdsPDPBWCD@emp.nualdlh.mongodb.net/?retryWrites=true&w=majority';
const dbCoonect = async () => {
    try {
        const conn = await mongoose.connect(mongoURI);

        if (conn) {
            console.log("MongoDB Connected");
        }
    } catch (err) {
        console.error("MongoDB connection error:", err);
    }
}

module.exports = dbCoonect;