const {Model, DataTypes} = require('sequelize');

class User extends Model{
    static init(connection){
        super.init({
            username: DataTypes.STRING,
            password: DataTypes.STRING
        },{
            sequelize: connection
        })
    }
}

module.exports = User;