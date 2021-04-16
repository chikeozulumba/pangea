const mongoose = require('mongoose');

const schema = mongoose.Schema(
  {
    url: {
      type: String,
      required: true,
      trim: true,
    },
    topic: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Topic',
        required: false,
    },
  },
  {
    timestamps: true,
  }
);

/**
 * @typedef Subscription
 */
const Subscription = mongoose.model('Subscription', schema);

module.exports = Subscription;