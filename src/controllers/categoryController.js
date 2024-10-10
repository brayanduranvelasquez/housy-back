const db = require('../firebaseConfig');

exports.getCategories = async (req, res, next) => {
  try {
    const categoriesSnapshot = await db.collection('categories').get();
    const categories = categoriesSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.json(categories);
  } catch (error) {
    next(error);
  }
};

exports.createCategory = async (req, res, next) => {
  try {
    const newCategory = req.body;
    const docRef = await db.collection('categories').add(newCategory);
    res.status(201).json({ id: docRef.id, ...newCategory });
  } catch (error) {
    next(error);
  }
};

exports.updateCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedCategory = req.body;
    await db.collection('categories').doc(id).update(updatedCategory);
    res.json({ id, ...updatedCategory });
  } catch (error) {
    next(error);
  }
};

exports.deleteCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    await db.collection('categories').doc(id).delete();
    res.json({ message: 'Category deleted successfully' });
  } catch (error) {
    next(error);
  }
};
