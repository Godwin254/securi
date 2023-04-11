const AuthService = require('../services/auth.service');
const EstateService = require('../services/estate.service');

const authService = new AuthService('some-secret-key');
const estateService = new EstateService()
 //Should be handled from the client side
exports.login = async (req, res) => {

      //firebase auth
      const { email, password } = req.body;
      

      try {
            const {user, token} = await authService.loginUser(email, password)
            //const estate = await estateService.getEstateConfig(user.userId)
            res.status(200).send({ token });
      } catch (error) {
            console.error(error)
            res.status(500).send(error.message);
      }
}

exports.signup = async (req, res) => {

      const { firstname, lastname, email, password, role } = req.body;

      try {
            // Check if the user already exists in Firestore
            const user = await authService.registerUser(firstname, lastname, email, role, password)
      
            res.status(201).send({ user });
      } catch (error) {
            console.error(error);
            res.status(500).send(error.message);
      }
}