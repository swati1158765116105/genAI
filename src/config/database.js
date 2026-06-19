const mongoose = require("mongoose")

async function connectTODB() {
    try {
        console.log("Connecting to:", process.env.MONGO_URL)

        await mongoose.connect(process.env.MONGO_URL)

        console.log("Connected to Database")
    }
    catch (err) {
        const dns = require("dns")
        console.error("FULL ERROR:")
        console.error(err)
        console.error("DNS servers Node is using:", dns.getServers())
        process.exit(1)
    }
}

module.exports = connectTODB