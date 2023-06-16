const AuthService = require('../services/auth.service');

//initializers
const authService = new AuthService();
 
exports.login = async (req, res) => {
      const { email, password } = req.body;
      
      try {
            const user = await authService.loginUser(email, password)
            res.status(200).send(user);
      } catch (error) {
            console.error(error)
            res.status(500).send(error.message);
      }
}

exports.signup = async (req, res) => {
      const { firstname, lastname, email, phone, estateId, password, role } = req.body;

      try {
            const user = await authService.registerUser(firstname, lastname, email, phone, estateId, role, password)
            res.status(201).send(user);
      } catch (error) {
            res.status(500).send(error.message);
      }
}