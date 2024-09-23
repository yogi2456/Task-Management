import mongoose from "mongoose";

const conn = async() => {
    try {
        const response = await mongoose.connect(`${process.env.MONGO_URI}`);
        if(response) {
            console.log("connected to DB");
        }
    } catch (error) {
        console.log(error);
    }
};

conn();


// 1N9vo5qh4Qc7Mn4T