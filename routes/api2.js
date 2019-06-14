require("dotenv").config()
const express = require('express')
const router2 = express.Router()
const axios = require("axios")


router2.get("/CC", (req, res) => {
    // console.log("Client request params:",req.params)
   

    const key2 = process.env.LOCAL_CURRENCY

    const url2 = `https://api.ipdata.co/?api-key=${key2}`
    axios.get(url2)
        .then(response => {
            // console.log("Axios response data:", response.data)
            res.json(response.data)
        })
        .catch(err => {
            console.error(err)
            res.status(500).send("Error from external API")
        })
      

})

module.exports = router2