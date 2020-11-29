const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers/thought-controller');

router
    .route('/')
    .get(getAllThoughts)

router
    .route('/:thoughtId')
    .get(getThoughtById)
    .put(updateThought)
    
router
    .route('/:userId')
    .post(createThought);

router
    .route('/:userId/:thoughtId')
    .put(addReaction)
    .delete(deleteThought);
    
router
    .route('/:userId/:thoughtId/:reactionId')
    .delete(deleteReaction);

module.exports = router;