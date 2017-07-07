'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return queryInterface.bulkInsert('snesGames', [
        {
          name: 'The Legend of Zelda: A Link to the Past',
          releaseDate: '1992-04-13 04:05:02',
          rating: '99',
          doesOwn: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Super Mario World',
          releaseDate: '1991-08-13 04:05:02',
          rating: '98',
          doesOwn: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Super Mario Kart',
          releaseDate: '1992-09-01 04:05:02',
          rating: '95',
          doesOwn: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Super Metroid',
          releaseDate: '1994-04-18 04:05:02',
          rating: '94',
          doesOwn: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'F-Zero',
          releaseDate: '1991-08-23 04:05:02',
          rating: '80',
          doesOwn: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Super Punch-Out!",
          releaseDate: '1994-09-14 04:05:02',
          rating: '92',
          doesOwn: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Donkey Kong Country',
          releaseDate: '1994-11-04 04:05:02',
          rating: '85',
          doesOwn: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'StarFox',
          releaseDate: '1993-03-23 04:05:02',
          rating: '87',
          doesOwn: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Teenage Mutant Ninja Turtles IV: Turtles in Time',
          releaseDate: '1992-08-15 04:05:02',
          rating: '91',
          doesOwn: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Chrono Trigger',
          releaseDate: '1995-08-22 04:05:02',
          rating: '99',
          doesOwn: true,
          createdAt: new Date(),
          updatedAt: new Date()
        }
    ], {});
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('snesGames', null, {});
  }
};
