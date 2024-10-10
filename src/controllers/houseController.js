const db = require('../firebaseConfig');

exports.getHouses = async (req, res, next) => {
  try {
    const housesSnapshot = await db.collection('houses').get();
    const houses = housesSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.json(houses);
  } catch (error) {
    next(error);
  }
};

exports.createHouse = async (req, res, next) => {
  try {
    const newHouse = req.body;
    const docRef = await db.collection('houses').add(newHouse);
    res.status(201).json({ id: docRef.id, ...newHouse });
  } catch (error) {
    next(error);
  }
};

exports.updateHouse = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedHouse = req.body;
    await db.collection('houses').doc(id).update(updatedHouse);
    res.json({ id, ...updatedHouse });
  } catch (error) {
    next(error);
  }
};

exports.deleteHouse = async (req, res, next) => {
  try {
    const { id } = req.params;
    await db.collection('houses').doc(id).delete();
    res.json({ message: 'House deleted successfully' });
  } catch (error) {
    next(error);
  }
};
