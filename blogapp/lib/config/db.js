import mongoose from "mongoose";
import dotenv from "dotenv";

// Cargar las variables de entorno desde el archivo .env
dotenv.config();

export const ConnectDB = async () => {
    await mongoose.connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("DB Connected");
}
