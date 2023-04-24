/**
 * @name: startConnecting_controller
 * @desc: Controller for the startConnecting_routes.
 */


const jsforce = require("jsforce");

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

const startConnecting_page = (req, res)=>{
    res.render('startConnecting')
}

const lead_send_salesforce = (req, res)=>{
    const fn = req.body.firstname;
    const ln = req.body.lastname;
    const company = fn.concat(" ", ln);

    conn.sobject('Lead').create({
        Firstname: req.body.firstname,
        Lastname: req.body.lastname,
        Company: company,
        Email: req.body.email,
        Phone: req.body.phone,
        Title: req.body.type,
        Description: req.body.message
    }).then(function (result){
        console.log(result)
        res.redirect('/')
    }).catch(function (err){
        console.log(err)
    })
}

module.exports = {
    startConnecting_page,
    lead_send_salesforce
}