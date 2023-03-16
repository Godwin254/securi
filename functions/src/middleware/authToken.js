const admin = require('firebase-admin');

exports.authToken = async (req, res, next) => {
      try {
        const token = req.headers.authorization?.split(' ')[1] ||
                      req.query?.token ||
                      req.cookies?.token;
    
        if (!token){
          throw new Error('No token found');
          return;
        }
    
        // Verify the token and decode its contents
        const decodedToken = await admin.auth().verifyIdToken(token);
    
        // Set the user ID as a property on the request object for future use
        req.userId = decodedToken.uid;
    
        next();
      } catch (error) {
        console.error(error);
        res.status(401).send('Unauthorized');
      }
};