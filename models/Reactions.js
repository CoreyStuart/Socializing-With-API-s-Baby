const { Schema, model } = require('mongoose');

const reactionSchema = new Schema(
    {
      reactionId: [
        {
          type: Schema.Types.ObjectId,
          ref: 'reaction',
        },
      ],
      reactionBody: {
        type: String,
        required: true,
        maxlength: 200
       },
       username: {
        type: String,
        required: true,
       },
       createdAt: {
        type: Date,
        default: Date.now,
      },
    },
    {
      toJSON: {
        virtuals: true,
      },
      id: false,
    }
  )

  module.exports = Reactions;