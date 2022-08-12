const { Schema, model } = require('mongoose');


const userSchema = new Schema(
  { 
    user: {
    type: String,
    unique: true,
    required: true,
    trim: true,
   
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Enter a valid email address",
    ],
  },
  // reactions: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: 'Comments',
  //   },
  // ],
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Comments',
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
   
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);


userSchema
  .virtual('fullName')
  // Getter
  .get(function () {
    return `${this.first} ${this.last}`;
  })
 
  .set(function (v) {
    const first = v.split(' ')[0];
    const last = v.split(' ')[1];
    this.set({ first, last });
  });
  
  userSchema.virtual("friendList").get(function () {
    return this.friends.length;
  });

const User = model('User', userSchema);

module.exports = User;
