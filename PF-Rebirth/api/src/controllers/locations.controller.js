
const { Op } = require('sequelize');
const { Pets } = require('../db');
const { getPagination, getPagingData } = require('../tools/paginateLocations.js')

// FIND ALL PETS IN CASE JUST WANNA LOST TIME FILTER INTO THE FRONT
exports.findAllLocations = (req, res) => {

  const { page, 
          size, 
          type,
          locations,
        } = req.query;

  var condition = type ? { type: { [Op.eq]: `${type}` } } : null;
  const { limit, offset } = getPagination(page, size);
  
  Pets.findAndCountAll({ where: condition})
    .then(data => {
      const response = getPagingData(data, page, limit);
      res.send(response);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};