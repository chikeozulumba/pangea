const Subscription = require("../models/subscription.model");
const Topic = require("../models/topic.model");

async function subscribe(req, res) {
	let topic = await Topic.findOne({ name: req.params.topic });
	if (!topic) {
		topic = await (await Topic.create({ name: req.params.topic })).save();
	}
	const payload = {
		...req.body,
		topic: topic._id,
	};

	let subscription = await Subscription.findOne(payload);
	if (!subscription) {
		subscription = await (await Subscription.create(payload)).save();
	}

	if (
		topic.subscribers.filter(
			(s) => s.toString() === subscription._id.toString()
		).length === 0
	) {
		topic.subscribers = [...topic.subscribers, subscription._id];
	}
	try {
		await topic.save();
		res.status(200).json({
			status: true,
			data: {
				...req.params,
				...req.body,
				timestamp: Date.now()
			},
		});
	} catch (error) {
		res.status(500)
			.json({
				status: false,
				message: 'Failed to save subscription',
			})
	}
}

module.exports = {
	subscribe,
};
