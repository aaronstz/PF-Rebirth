const { Op } = require('sequelize');
const { Pets } = require('../db');
const { getPagination, getPagingData } = require('../tools/paginateData.js')

// FIND ALL PETS IN CASE JUST WANNA LOST TIME FILTER INTO THE FRONT
exports.findAll = (req, res) => {

  const { page, 
          size, 
          type,
          name,
          age
        } = req.query;

  var condition = type ? { type: { [Op.eq]: `${type}` } } : null;
  const { limit, offset } = getPagination(page, size);
  
  Pets.findAndCountAll({ where: condition, limit, offset })
    .then(data => {
      const response = getPagingData(data, page, limit);
      res.send(response);
      console.log('response :>> ', response);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};


// FIND ALL PETS IN REBIRTH DB
exports.filterPets = (req, res) => {

  const { page=0, sizePage , name, type, age, location, gender, race, size } = req.query;
  const { limit, offset} = getPagination(page, sizePage);
  
  //ENUM QUERIES
  var typeSearch = type ? { type: { [Op.eq] : { [Op.any]: `${type}` }} } : null;
  var sizeSearch = size ? { size: { [Op.eq] : { [Op.any]: `${size}` }} } : null;
  var genderSearch = gender ? { gender: { [Op.eq] : { [Op.any]: `${gender}` }} } : null;

  //NORMAL QUERIES
  var nameSearch = name ? { name: { [Op.substring]: `${name}` } } : null;
  var ageSearch = age ? { age: { [Op.eq] : { [Op.any]: `${age}` }} } : null;
  var locationSearch = location ? { location: { [Op.iLike] : { [Op.any]: `${location}` }} } : null;
  var raceSearch = race ? { race: { [Op.like]: `${race}` } } : null;

  let condition = {
      [Op.and] : [
        nameSearch,
        typeSearch,
        sizeSearch,
        locationSearch,
        raceSearch,
        ageSearch,
        genderSearch
      ]
  }

  Pets.findAndCountAll({ where: condition, limit, offset })
    .then(data => {
      console.log('data :>> ', data);
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

