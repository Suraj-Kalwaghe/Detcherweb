const express = require('express');
const monk = require('monk');
const Joi = require('joi');

const emojis = require('./emojis');
const router = express.Router();

const db = monk(process.env.MONGO_URI);
const forms = db.get('forms');
const schema = Joi.object({
  name: Joi.string().trim().required(),
  email: Joi.string().trim().required(),
  message: Joi.string().trim().required(),
});

router.get('/', async (req, res, next) => {
  try {
    const items = await forms.find({});
    res.json(items);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const value = await schema.validateAsync(req.body);
    const inserted = await forms.insert(value);
    res.json(inserted);
  } catch (error) {
    next(error);
  }
});

router.use('/emojis', emojis);

module.exports = router;
