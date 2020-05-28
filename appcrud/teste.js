require('./database/conection_db');
const User = require('./database/models/User.js');

User.create({ username:'admin',password:'root' }).then(user => {
    console.log("User's auto-generated ID:", user.id);
  });