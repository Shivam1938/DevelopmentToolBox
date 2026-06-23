import mongoose from "mongoose";

class DatabaseConfig {
    static async connect() {
        try {
            const mongoURI = process.env.MONGO_CONNECT_URI

            if (!mongoURI) {
                throw new Error('MongoDB connection URI is not defined in environment variables')
            }

            const options = {
                maxPoolSize: 10, // Maintain upto 10 socket connections
                serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
                socketTimeoutMS: 45000, // Close sockets after 45 seconds after 45 seconds of inactivity
            }

            await mongoose.connect(mongoURI, options)
        } catch (error) {
            console.log("Failed to connect to MongoDB: ", error.message);
            process.exit(1);   
        }
    }

    static async disconnect() {
        try {
            await mongoose.disconnect();
            console.log("MongoDB Disconnecting Successfuly");
            
        } catch (error) {
            console.error("Error Disconnecting From MongoDB: ", error.message);
        }
    }
}

export default DatabaseConfig;