const mongoose = require('mongoose');

const connectDb = async () => {
    try {
        const con = await mongoose.connect(process.env.dataBase, {
        })
        console.log(`Mongo started on ${con.connection.host}`);
    } catch (error) {
        console.log(error);
    }
};

module.exports = connectDb;