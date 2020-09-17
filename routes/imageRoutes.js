const router = require('express').Router();
const { validator, multerMiddleware, multipartParser } = require('../middlewares');
const { createApiValidationSchema, serveImagesApiValidationSchema } = require('../utils/validation');
const { createApiController, serveImagesController } = require('../controllers');


router.post('/create',
  multerMiddleware([{ name: 'image', maxCount: 1 }, { name: 'template', maxCount: 1 }]),
  multipartParser,
  validator({ bodySchema: createApiValidationSchema }),
  createApiController
);

router.get('/:imagePath',
  validator({ paramsSchema: serveImagesApiValidationSchema }),
  serveImagesController
);

module.exports = router;