const express = require('express')
const app = express()

/**
 *
 * @module: path:
 * @module: jsforce:
 */
const path = require('path')
const jsforce = require('jsforce')

require('dotenv').config()

/**
 * @desc: Connection with Salesforce.
 */
const {SF_LOGIN_URL, SF_USERNAME, SF_PASSWORD, SF_TOKEN} = process.env
const conn = new jsforce.Connection({
    loginUrl:SF_LOGIN_URL
})
conn.login(SF_USERNAME, SF_PASSWORD + SF_TOKEN, (err, response) => {
    if (err) {
        console.error(err)
    } else {
        console.log("User ID:" + response.id)
        console.log("Org ID:" + response.organizationId)
    }
})

/**
 * @desc: Settings.
 */
app.set('port', process.env.PORT || 3001)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

/**
 * @desc: Middlewares.
 */
app.use(express.urlencoded({extended: false}))

/**
 * @desc: Routes.
 */
const index_route = require('./app/models/routes/index_routes')
app.use('/', index_route);
/**
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
*/

/**
 * @desc: Static files
 */
app.use(express.static(path.join(__dirname, 'public')))

/**
 * @desc: Runs the server.
 */
app.listen(app.get('port'), ()=>{
    console.log('Server is running at http://localhost:', app.get('port'))
})

module.exports = app