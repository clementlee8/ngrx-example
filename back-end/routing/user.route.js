const express = require('express');
const route = express.Router();
const userController = require('./../controllers/user.controller');

route.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next();
})
route.get('/', userController.getAll);
route.post('/add', userController.addNew);
route.put('/:id', userController.update);
route.delete("/:id", userController.delete);

module.exports = route;