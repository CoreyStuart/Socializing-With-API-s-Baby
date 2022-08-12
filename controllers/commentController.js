const { Application, User } = require('../models');

module.exports = {
  // Function to get all of the applications by invoking the find() method with no arguments.
  // Then we return the results as JSON, and catch any errors. Errors are sent as JSON with a message and a 500 status code
  getComments(req, res) {
    Comment.find()
      .then((applications) => res.json(comments))
      .catch((err) => res.status(500).json(err));
  },
  // Gets a single application using the findOneAndUpdate method. We pass in the ID of the application and then respond with it, or an error if not found
  getSingleComment(req, res) {
    Comment.findOne({ _id: req.params.commentId })
      .then((comment) =>
        !comment
          ? res.status(404).json({ message: 'No comment with that ID' })
          : res.json(comment)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Creates a new application. Accepts a request body with the entire Application object.
  // Because applications are associated with Users, we then update the User who created the app and add the ID of the application to the applications array
  createComment(req, res) {
    Comment.create(req.body)
      .then((comment) => {
        return User.findOneAndUpdate(
          { _id: req.body.userId },
          { $addToSet: { comments: comment._id } },
          { new: true }
        );
      })
      .then((user) =>
        !user
          ? res.status(404).json({
              message: 'Comment created, but found no user with that ID',
            })
          : res.json('Created the comment 🎉')
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // Updates and application using the findOneAndUpdate method. Uses the ID, and the $set operator in mongodb to inject the request body. Enforces validation.
  updateComment(req, res) {
    Comment.findOneAndUpdate(
      { _id: req.params.commentId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((comment) =>
        !comment
          ? res.status(404).json({ message: 'No comment with this id!' })
          : res.json(comment)
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // Deletes an application from the database. Looks for an app by ID.
  // Then if the app exists, we look for any users associated with the app based on he app ID and update the applications array for the User.
  deleteComment(req, res) {
    Comment.findOneAndRemove({ _id: req.params.commentId })
      .then((comment) =>
        !comment
          ? res.status(404).json({ message: 'No comment with this id!' })
          : User.findOneAndUpdate(
              { comments: req.params.commentId },
              { $pull: { comments: req.params.commentId } },
              { new: true }
            )
      )
      .then((user) =>
        !user
          ? res.status(404).json({
              message: 'comment created but no user with this id!',
            })
          : res.json({ message: 'comment successfully deleted!' })
      )
      .catch((err) => res.status(500).json(err));
  },
  // Adds a tag to an application. This method is unique in that we add the entire body of the tag rather than the ID with the mongodb $addToSet operator.
  addTag(req, res) {
    Comment.findOneAndUpdate(
      { _id: req.params.commentId },
      { $addToSet: { tags: req.body } },
      { runValidators: true, new: true }
    )
      .then((comment) =>
        !comment
          ? res.status(404).json({ message: 'No comment with this id!' })
          : res.json(comment)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Remove application tag. This method finds the application based on ID. It then updates the tags array associated with the app in question by removing it's tagId from the tags array.
//   removeTag(req, res) {
//     Application.findOneAndUpdate(
//       { _id: req.params.commentId },
//       { $pull: { tags: { tagId: req.params.tagId } } },
//       { runValidators: true, new: true }
//     )
//       .then((application) =>
//         !application
//           ? res.status(404).json({ message: 'No application with this id!' })
//           : res.json(application)
//       )
//       .catch((err) => res.status(500).json(err));
//   },
 };
