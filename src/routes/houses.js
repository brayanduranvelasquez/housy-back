const express = require('express');
const { getHouses, createHouse, updateHouse, deleteHouse } = require('../controllers/houseController');
const validateRequest = require('../middleware/validateRequest');
const authenticateUser = require('../middleware/authenticateUser');
const { createHouseSchema, updateHouseSchema } = require('../schemas/houseSchemas');

const router = express.Router();

router.get('/', getHouses);
router.post('/', authenticateUser, validateRequest(createHouseSchema), createHouse);
router.put('/:id', authenticateUser, validateRequest(updateHouseSchema), updateHouse);
router.delete('/:id', authenticateUser, deleteHouse);

module.exports = router;