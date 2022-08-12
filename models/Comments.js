const { Schema, model } = require('mongoose');


// Schema to create Post model
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



const commentSchema = new Schema(
  {
    user: {
      type: String,
      required: true
    },
    published: {
      type: Boolean,
      default: false,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    buildSuccess: {
      type: Boolean,
      default: true,
    },
    comments: {
      type: String,
      minLength: 1,
      maxLength: 200,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property `getComments` that gets the amount of comments associated with an application
commentSchema
  .virtual('getComments')
  // Getter
  .get(function () {
    return this.comments.length;
  });

// Initialize our Comment model
const Comment = model('comment', commentSchema);

module.exports = Comment;
