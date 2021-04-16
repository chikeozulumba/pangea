const Joi = require("joi");

const publishData = {
	body: Joi.object().keys({
		topic: Joi.string().required(),
    data: Joi.object().keys().length(1).required(),
	}),
};

module.exports = {
	publishData,
};
