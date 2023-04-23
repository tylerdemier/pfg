/**
 * @name: index_controller
 * @desc: Controller for index_routes.
 */
const index_page = (req, res, next)=>{
    res.render('index')
}

module.exports = {
    index_page
}