'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return queryInterface.bulkInsert('n64Games', [
        {
          name: 'The Legend of Zelda: Ocarina of Time',
          releaseDate: '1998-11-23 04:05:02',
          rating: '100',
          doesOwn: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Super Mario 64',
          releaseDate: '1996-09-26 04:05:02',
          rating: '97',
          doesOwn: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Mario Kart 64',
          releaseDate: '1997-02-10 04:05:02',
          rating: '95',
          doesOwn: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Super Smash Bros.',
          releaseDate: '1999-04-26 04:05:02',
          rating: '88',
          doesOwn: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Conker's Bad Fur Day",
          releaseDate: '2001-03-04 04:05:02',
          rating: '89',
          doesOwn: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "GoldenEye 007",
          releaseDate: '1997-08-25 04:05:02',
          rating: '94',
          doesOwn: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "The Legend of Zelda: Majora's Mask",
          releaseDate: '2000-10-25 04:05:02',
          rating: '90',
          doesOwn: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Star Fox 64',
          releaseDate: '1997-07-01 04:05:02',
          rating: '82',
          doesOwn: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Banjo-Kazooie',
          releaseDate: '1998-05-31 04:05:02',
          rating: '83',
          doesOwn: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Major League Baseball Featuring Ken Griffey Jr.",
          releaseDate: '1998-05-31 04:05:02',
          rating: '97',
          doesOwn: true,
          createdAt: new Date(),
          updatedAt: new Date()
        }
    ], {});
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('n64Games', null, {});
  }
};
