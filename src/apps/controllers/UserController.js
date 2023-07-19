const Users = require('../models//Users');

class UserController {
    async create(req, res) {
        const verifyUser = await User.findOne({
            where: {
                email: req.body.email,
            },
        })
        if (verify) {
            return res.status(400).json({ message: 'User Already exits' })
        }
        const user = await Users.create(req.body);
        if (!user) {
            return res.send({ message: 'Failed to create a user!'})
        }
        return res.send({ message: 'User created' })
    }
}

module.exports = new UserController();
