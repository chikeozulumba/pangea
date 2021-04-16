const mongoose = require("mongoose");

const schema = mongoose.Schema(
	{
		name: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Topic",
			required: false,
		},
		subscriber: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Subscription",
			required: false,
		},
		status: {
			type: Boolean,
			default: false,
		},
		payload: {
			type: String,
			required: false,
		},
	},
	{
		timestamps: true,
	}
);

/**
 * @typedef Topic
 */
const Log = mongoose.model("Log", schema);

module.exports = Log;
