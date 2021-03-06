'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn('Users', 'zone2',
        {
            type: Sequelize.STRING
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.removeColumn('Users', 'zone2');
    }
};