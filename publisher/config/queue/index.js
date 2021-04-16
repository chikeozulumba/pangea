const Queue = require("bull");

const queue = new Queue("appQueue", {
	redis: {
		host: process.env.REDIS_HOST,
		port: process.env.REDIS_PORT,
		password: process.env.REDIS_PASSWORD,
	},
});

queue.on("error", function (err) {
	console.log("error", err);
});
queue.on("failed", function (job, err) {
	console.log("failed", job.jobId, err);
});

module.exports = queue;
