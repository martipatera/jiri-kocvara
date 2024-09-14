const express = require('express')
const app = express()
const port = process.env.PORT || 4444
const cors = require("cors")
const connectDB = require("./connectDB/connectDB")
const dotenv = require("dotenv")


const deleteMessages = require("./routes/delete_messages")
const forgotpassword = require("./routes/forgotpassword.js")
const get_messages = require("./routes/get_messages.js")
const post_messages = require("./routes/post_messages.js")
const klienti = require("./routes/klienti.js")
const login = require("./routes/login.js")
const register = require("./routes/register.js")

app.use(cors({
    origin: 'https://jiri-kocvara-production.vercel.app', // Umožněte přístup z této domény
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
  }));
app.use(express.json())

dotenv.config();

app.use(express.urlencoded({ extended: true }))

app.use("/api", deleteMessages);
app.use("/api", forgotpassword);
app.use("/api", get_messages);
app.use("/api", post_messages);
app.use("/api", klienti);
app.use("/api", login);
app.use("/api", register);


app.get('/api', function (req, res) {
    res.send('Hello World')
})

connectDB()

app.listen(port,() => {
    console.log(`server is running on port http://localhost:${port}`)
  }
  )