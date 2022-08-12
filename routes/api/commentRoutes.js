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
  .route('/:applicationId')
  .get(getSingleComment)
  .put(updateComment)
  .delete(deleteComment);

// /api/applications/:applicationId/tags
// router.route('/:applicationId/tags').post(addTag);

// // /api/applications/:applicationId/tags/:tagId
// router.route('/:applicationId/tags/:tagId').delete(removeTag);

module.exports = router;
