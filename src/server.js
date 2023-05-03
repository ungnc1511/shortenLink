import express from "express"
import bodyParser from "body-parser"
import initAppRoutes from "./routes/index"
import cookieParser from "cookie-parser"
import session from "express-session"
import cors from "cors"
const passport = require("passport")

require("dotenv").config()
const app = express()
const PORT = process.env.PORT || 8080
const env = process.env.NODE_ENV

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(
    session({
        secret: "keyboard cat",
        resave: false,
        saveUninitialized: false,
    })
)
app.use(passport.authenticate("session"))
passport.serializeUser(function (user, cb) {
    process.nextTick(function () {
        cb(null, user)
    })
})
passport.deserializeUser(function (user, cb) {
    process.nextTick(function () {
        return cb(null, user)
    })
})
initAppRoutes(app)

app.use((req, res) => {
    return res.status(404).send("notfound")
})

app.listen(PORT, () => {
    console.log(`use env ${env}`)
    console.log(`Server is running on the PORT: ${PORT}`)
})

export default app
