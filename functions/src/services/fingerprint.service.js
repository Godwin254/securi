const db = require('../config/db');

class Fingerprint{
      constructor(){
            this.residentCollection = db.collection('users');
            this.membersCollection = db.collection('members');
      }

      async getUserByFingerprintId(fingerprintId){
            const userQuery = await this.residentCollection
                  .where('fingerprintId', '==', fingerprintId)
                  .where('deleted', '==', false)
                  .get();

            const memberQuery = await this.membersCollection
                  .where('fingerprintId', '==', fingerprintId)
                  .where('deleted', '==', false)
                  .get();
           
            if (userQuery.empty && memberQuery.empty) return "User not found!";

            return userQuery.empty ? memberQuery.docs[0].data() : userQuery.docs[0].data();


      }
}

module.exports = Fingerprint;