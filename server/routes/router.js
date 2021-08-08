const express = require('express')
const route = express.Router()
const services = require('../services/render.js')
const controller = require('../controller/controller.js')
route.get('/', services.HomeRoute);
route.get('/add-user', services.addUser);


//api

route.post('/api/users', controller.create)
route.get('/api/users/', controller.find)
route.put('/api/users:id', controller.update)
route.delete('/api/user:id', controller.delete)



module.exports = route