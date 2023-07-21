const { Router } = require('express');
const schemaValidator = require('./apps/middleware/schemaValidator')
const AuthenticationMiddleware = require('./apps/middlewares/authentication')
const AuthenticationController = require('./apps/controllers/AuthenticationController')
const authSchema = require('./schema/auth.schema.json')
const UserController = require('./apps/controllers/UserController')
const userSchema = require('./schema/create.user.schema.json')
const routes = new Router();

routes.post('/users', schemaValidator(userSchema), UserController.create);
routes.post('/auth', schemaValidator(authSchema), AuthenticationController.authenticate)
routes.get('/health', (req, res) => {
    return res.send({ message: "Connected with sucess!" });
});
routes.use(AuthenticationMiddleware)
routes.put('/user', UserController.update)
routes.delete('/user', UserController.delete)
routes.get('/user-profile', UserController.userProfile)

module.exports = routes;
