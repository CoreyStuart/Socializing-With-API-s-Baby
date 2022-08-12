const router = require('express').Router();
const {
  getComments,
  getSingleComment,
  createComment,
  updateComment,
  deleteComment
} = require('../../controllers/commentController');

// /api/applications
router.route('/').get(getComments).post(createComment);

// /api/applications/:applicationId
router
  .route('/:commentId')
  .get(getSingleComment)
  .put(updateComment)
  .delete(deleteComment);

// /api/applications/:applicationId/tags
router.route('/:commentId/reaction').post(addReaction);

// /api/applications/:applicationId/tags/:tagId
router.route('/:commentId/reactions/:reactionId').delete(removeReaction);

module.exports = router;
