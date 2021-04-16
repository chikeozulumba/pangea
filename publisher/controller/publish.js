const producer = require("../config/queue/producer");
const Topic = require("../models/topic.model");

async function publish({ body, params }, res) {
	const topic = await (await Topic.findOne({ name: params.topic }))
		?.populate("subscribers")
		.execPopulate();
	if (topic) {
		await producer(
			{ topic, data: {
				...body.data,
				topic: topic.name,
			} },
			{ priority: 1 }
		);
	}
	res.status(200).json(topic);
}

module.exports = {
	publish,
};
