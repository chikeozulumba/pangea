const axios = require("axios");
const queue = require("./index");
const Log = require("../../models/log.model");

queue.process(async (job) => {
	const {
		data: { topic, data },
	} = job;
	const subscribers = topic?.subscribers;
	for (let i = 0; i < subscribers.length; i++) {
		const subscriber = subscribers[i];
	  await sendNotifications({ subscriber, topic, data });
	}
});

async function sendNotifications({ subscriber, topic, data }) {
	try {
		await axios.post(subscriber.url, data);
    await (await Log.create({ topic: topic._id, subscriber: subscriber._id, status: true })).save();
	} catch (error) {
    await (await Log.create({ topic: topic._id, subscriber: subscriber._id, status: false, payload: JSON.stringify(data) })).save();
	}
}
