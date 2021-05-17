import jwt from 'jsonwebtoken';

var token = jwt.sign({
              "roal": "administrator",
              "user_id": 1,
            }, "secret_key");

console.log("token: " + token)
