require('../database/conection_db.js');
const User = require('../database/models/User.js');
const bcrypt = require('bcrypt');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

function cryptPassword(password) {
    return bcrypt.hashSync(password, 10);
}

module.exports = {
    //cada async dessa é um middleware
    async dataSearch(req,res){
        const {id,username} = req.body;
        let users;
        if(id === '?'){
            users = await User.findAll(
                {
                    attributes:['id','username','password'],
                    where:{username:{[Op.like]:`${username}%`}}
                })
        }else{
            users = await User.findByPk(id);
        }
        console.log('Data:\n',users);
        return res.json(users);
    },

    async createAmdUpdate(req, res) {
        const { id, username, password } = req.body;
        if (id === '?') {
            await User.create({ username, password: cryptPassword(password) }).then(user => {
                console.log("User's auto-generated ID:", user.id);
            });
        } else {
            // Change everyone without a last name to "Doe"
            await User.update({ password: cryptPassword(password)}, {
                where: {
                    id:id
                }
            });
        }
        return res.send('Sucess!');
    }
} 