const express = require('express');
const { getCategories, createCategory, updateCategory, deleteCategory } = require('../controllers/categoryController');
const validateRequest = require('../middleware/validateRequest');
const authenticateUser = require('../middleware/authenticateUser');
const { createCategorySchema, updateCategorySchema } = require('../schemas/categorySchemas');

const router = express.Router();

router.get('/', getCategories);
router.post('/', authenticateUser, validateRequest(createCategorySchema), createCategory);
router.put('/:id', authenticateUser, validateRequest(updateCategorySchema), updateCategory);
router.delete('/:id', authenticateUser, deleteCategory);

module.exports = router;