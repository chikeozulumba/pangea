const Joi = require("joi");

const createSubscription = {
  params: {
    topic: Joi.string().required(),
  },
	body: Joi.object().keys({
		url: Joi.string().uri().required(),
	}),
};

module.exports = {
	createSubscription,
};
