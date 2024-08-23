import mongoose from "mongoose";

export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://tanialuduenaok:01234567@cluster0.hntzqxl.mongodb.net/blogapp');
    console.log("DB Connected");
}