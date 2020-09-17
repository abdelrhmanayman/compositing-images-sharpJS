const sharp = require('sharp');
const { createUploadPath, createImageID, getImageURL } = require('../utils/helpers');

module.exports = async (req, res, next) => {
  try {
    const { image, template, imageDetails: { startPoint, width, height, angel } } = req.body;
    const imageID = createImageID();

    const startImage = await sharp(image[0].buffer)
      .rotate(angel)
      .png()
      .resize({ width, height })
      .toBuffer();

    await sharp(template[0].buffer)
      .composite([{ input: startImage, top: startPoint[1], left: startPoint[0], blend: 'dest-over' }])
      .toFile(createUploadPath(imageID));

    res.status(200).json({ finalTemplateURL: getImageURL(imageID) });

  } catch (error) {
    next({ message: error.message, code: 500 });
  }
};