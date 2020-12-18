'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('users', [{
            nombre: 'carlos',
            email: 'prueba@gmail.com',
            password: '$2y$12$Z18bK1SALCjAaER8aPDVQuTyfq3INk0J1uI64iuFZYaXsG3s0pbAm', //micontraseña
            rol: 'Administrador',
            createdAt: new Date(),
            updatedAt: new Date()
        }]);
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Usuarios', null, {});

    }
};