import express from "express"
import cors from "cors"

import config from "./config/index.js"

import apiRoutes from "./routes/index.route.js"

const app = express();

app.use(cors({
    origin: config.cors.origin,
    credentials: config.cors.credentials,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
}))

//body parsing middleware
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended:true, limit: '10mb'}));

app.use(`${config.api.prefix}${config.api.version}`, apiRoutes)

app.get("/", (req, res) => {
    res.json({
        success: true
    })
})

export default app;