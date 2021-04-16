const Joi = require("joi");

const publishData = {
	params: Joi.object().keys({
		topic: Joi.string().required(),
	}),
	body: Joi.object().keys({
    data: Joi.object().keys().length(1).required(),
	}),
};

module.exports = {
	publishData,
};
