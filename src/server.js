import app from "./app.js";
import config from "./config/index.js";
import DatabaseConfig from "./config/database.js";

const satrtServer = async () => {
    try {
        await DatabaseConfig.connect();

        console.log("DB Connected!!")
        
        app.listen(config.port, () => {
            console.log(`SERVER STARTED!! on port ${config.port}`)
        })
        
    } catch (error) {
        console.error("Failed to Satrt Server: ", error);
        process.exit(1);   
    }
}

satrtServer();