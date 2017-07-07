'use strict';

var date = Date.now().valueOf();
console.log(date);

module.exports = {
  up: function (queryInterface, Sequelize) {
      return queryInterface.bulkInsert('nesGames', [
        {
          name: 'The Legend of Zelda',
          releaseDate: '1987-08-22 04:05:02',
          rating: '98',
          doesOwn: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Super Mario Bros. 3',
          releaseDate: '1990-02-12 04:05:02',
          rating: '97',
          doesOwn: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Mega Man 2',
          releaseDate: '1989-06-01 04:05:02',
          rating: '70',
          doesOwn: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Metroid',
          releaseDate: '1987-08-01 04:05:02',
          rating: '88',
          doesOwn: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Super Mario Bros. 2',
          releaseDate: '1988-10-10 04:05:02',
          rating: '89',
          doesOwn: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Mike Tyson's Punch-Out!",
          releaseDate: '1987-10-01 04:05:02',
          rating: '92',
          doesOwn: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Final Fantasy',
          releaseDate: '1990-05-01 04:05:02',
          rating: '80',
          doesOwn: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Tetris',
          releaseDate: '1989-11-01 04:05:02',
          rating: '65',
          doesOwn: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'CastleVania',
          releaseDate: '1989-09-01 04:05:02',
          rating: '88',
          doesOwn: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'DuckTales',
          releaseDate: '1987-11-06 04:05:02',
          rating: '78',
          doesOwn: true,
          createdAt: new Date(),
          updatedAt: new Date()
        }
    ], {});
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('nesGames', null, {});
  }
};
