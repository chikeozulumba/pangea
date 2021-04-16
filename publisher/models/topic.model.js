const mongoose = require('mongoose');

const schema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    subscribers: [{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Subscription'
    }],
  },
  {
    timestamps: true,
  }
);

/**
 * @typedef Topic
 */
const Topic = mongoose.model('Topic', schema);

module.exports = Topic;