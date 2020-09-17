const { v4: uuid } = require('uuid');
const path = require('path');


function createImageID () {
  return uuid();
}

function createUploadPath (imageID) {
  return path.join(__dirname, `../uploads/${imageID}.png`);
}

function getImageURL (imageID) {
  return `http://localhost:${process.env.PORT}/api/images/${imageID}.png`;
}

module.exports = {
  createImageID,
  createUploadPath,
  getImageURL
};