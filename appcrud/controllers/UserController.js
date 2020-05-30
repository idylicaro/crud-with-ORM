require('../database/conection_db.js');
const User = require('../database/models/User.js');

module.exports= { 
    async create(req,res) {
        const {username,password} = req.body;
            await User.create({ username,password}).then(user => {
                console.log("User's auto-generated ID:", user.id);
            });
        return res.send('Sucess!');
    }
} 