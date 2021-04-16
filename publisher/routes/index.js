const express = require("express");
const PublishController = require("../controller/publish");
const SubscriptionController = require("../controller/subscribe");
const validate = require("../middlewares/validate");
const { publishData } = require("../validations/publish");
const { createSubscription } = require("../validations/subscribe");

const router = express.Router();

router.route("/subscribe/:topic").post(validate(createSubscription), SubscriptionController.subscribe);
router.route("/publish").post(validate(publishData), PublishController.publish);

module.exports = router;
