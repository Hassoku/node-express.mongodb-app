const axios = require('axios')

exports.HomeRoute = (req, res) => {

    axios.get('http://127.0.0.1:3000/api/users')
        .then(function(response) {
            console.log(response)
            res.render('index', { users: response.data })
        }).catch(err => {
            res.send(err)
        })

}
exports.addUser = (req, res) => {
    res.redirect('/add-user')
}