/**
 * @name: startConnecting_controller
 * @desc: Controller for the startConnecting_routes.
 */
const lead = {}

const startConnecting_page = (req, res)=>{
    res.render('startConnecting')
}

const lead_send_salesforce = (req, res)=>{
    res.send('lead_send_salesforce')
}


module.exports = {
    startConnecting_page,
    lead_send_salesforce
}