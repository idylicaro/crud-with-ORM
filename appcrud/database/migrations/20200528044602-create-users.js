'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('users', { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey:true,
          autoIncrement:true,
          allowNull:false
        },
        username:{
          type: Sequelize.STRING(50),
          allowNull:false,
        },
        password:{
          type: Sequelize.STRING(70),
          allowNull:false,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull:false,
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull:false,
        },
       });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('users');
    
  }
};
