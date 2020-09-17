module.exports = (req, res, next) => {
  Object.keys(req.body).forEach(key => {

    if (typeof req.body[key] === 'string')
      req.body[key] = JSON.parse(req.body[key]);

  });

  req.body = { ...req.body, ...req.files };

  next();
};