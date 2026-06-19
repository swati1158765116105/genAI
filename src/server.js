// Fix: Node.js v25 c-ares DNS resolver reads DNS servers as 127.0.0.1
// instead of the actual system DNS. Force Google Public DNS as fallback.
const dns = require("dns")
dns.setServers(["8.8.8.8", "8.8.4.4"])

require("dotenv").config()
const app = require("./app")
const connectTODB = require("./config/database")
connectTODB()

app.listen(3000, () => {
    console.log("the server is running on port 3000")
})