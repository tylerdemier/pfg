const express = require('express')
const jsforce = require('jsforce')

const app = express()
const PORT = 3001

require('dotenv').config()
const {SF_LOGIN_URL, SF_USERNAME, SF_PASSWORD, SF_TOKEN} = process.env
const conn = new jsforce.Connection({
    loginUrl:SF_LOGIN_URL
})
conn.login(SF_USERNAME, SF_PASSWORD+SF_TOKEN, (err, response)=>{
    if(err){
        console.error(err)
    } else {
        console.log("User ID:" + response.id)
        console.log("Org ID:" + response.organizationId)
    }
})
app.get('/', (req, res)=>{
    conn.query("SELECT Id, Name FROM Account", (err, response)=>{
        if(err){
            console.error(err)
        } else {
            console.log("Total records" + response.totalSize)
            res.json(response.records)
        }
    })
    //res.send("Salesforce integration with nodejs")
})
app.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`)
})