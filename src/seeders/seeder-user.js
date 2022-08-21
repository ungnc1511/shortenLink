"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
        await queryInterface.bulkInsert(
            "User",
            [
                {
                    username: "user1",
                    password:
                        "$2a$10$PsbfONDoBN/moJstrnkheO0Sf6.nO1dlNCO1XzbrfaBtsS63Ct60.", //q
                    groupId: 1,
                },
                {
                    username: "user2",
                    password:
                        "$2a$10$PsbfONDoBN/moJstrnkheO0Sf6.nO1dlNCO1XzbrfaBtsS63Ct60.", //q
                    groupId: 1,
                },
            ],
            {}
        );
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    },
};
