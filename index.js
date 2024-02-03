
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import routing from './routes/user.js'
// db connecting
import {Koneksi} from "./config/Koneksi.js"

const PORT = process.env.PORT || 5000

const app = express()



app.use(cors({
    origin: ["https://kasir-toko-client.vercel.app", "https://www.postman.com", "http://localhost:3000", "http://localhost:5000"],
    methods: ["POST", "GET", "PATCH", "DELETE",'PUT', "OPTIONS"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
 }));
 
app.use('/uploads', express.static('uploads'))
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())




app.use(routing);


app.use("/", (req, res) => {
    res.send("Server is running");
});
app.listen(PORT, () => {
    console.log(`APP STARTED PORT : ${PORT}`)
})
