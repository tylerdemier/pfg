const express = require('express')
const app = express()

/**
 *
 * @module: path:
 * @module: jsforce:
 */
const path = require('path')

require('dotenv').config()

/**
 * @desc: Settings.
 */
app.set('port', process.env.PORT || 3001)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

/**
 * @desc: Middlewares.
 */
app.use(express.json())
app.use(express.urlencoded({extended: false}))

/**
 * @desc: Routes.
 */
const index_route = require('./app/models/routes/index_routes')
const aboutUs_route = require('./app/models/routes/aboutUs_routes')
const startConnecting_route = require('./app/models/routes/startConnecting_routes')
app.use('/', index_route)
app.use('/', aboutUs_route)
app.use('/', startConnecting_route)

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

module.exports = {
    app
}