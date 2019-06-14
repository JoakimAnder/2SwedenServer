const express = require("express")
const app = express()
const port = process.env.PORT || 5000
const apiRoutes = require('./routes/api')
const apiRoutes2 = require('./routes/api2')

app.listen(port, () => console.log("Server listening on port", port))

app.use("/api",apiRoutes)
app.use("/api2",apiRoutes2)


// app.use((req, res, next) => {
//     console.info(`Got request on ${req.path} (${req.method}).`)
//     next()
// })