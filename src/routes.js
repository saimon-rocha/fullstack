const { Router } = require('express');
const schemaValidator = require('./apps/middleware/schemaValidator')
const AuthenticationController = require('./app/controllers/AuthenticationController')
const authSchema = require('./schema/auth.schema.json')
const UserController = require('./apps/controllers/UserController')
const userSchema = require('./schema/create.user.schema.json')
const routes = new Router();

routes.post('/users', schemaValidator(userSchema), UserController.create);
routes.post('/auth', schemaValidator(authSchema), AuthenticationController.authenticate)
routes.get('/health', (req, res) => {
    return res.send({ message: "Connected with sucess!" });
});

module.exports = routes;
