const joi = require('joi');
const { allowedMimeType } = require('../constants');

const fileSchema = joi.object({
  fieldname: joi.string().required(),
  originalname: joi.string().required(),
  encoding: joi.string().required(),
  mimetype: joi.string().valid(...allowedMimeType).required(),
  buffer: joi.binary().required(),
  size: joi.number().required()
});

module.exports = joi.object({
  template: joi.array().length(1).items(fileSchema),
  image: joi.array().length(1).items(fileSchema),
  imageDetails: joi.object({
    startPoint: joi.array().items(joi.number().required(), joi.number().required()).length(2).required(),
    width: joi.number().required(),
    height: joi.number().required(),
    angel: joi.number().required()
  }).required()
}).required();