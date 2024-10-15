const admin = require('firebase-admin');

exports.register = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const userRecord = await admin.auth().createUser({
      email,
      password,
    });
    res.status(201).json({ message: 'User registered successfully', uid: userRecord.uid });
  } catch (error) {
    next(error);
  }
};

exports.validateToken = async (req, res, next) => {
  try {
    const { token } = req.body;

    const decodedToken = await admin.auth().verifyIdToken(token);

    if (decodedToken) {
      res.status(200).json({ message: 'Token is valid' });
      return;
    }

    res.status(401).json({ message: 'Invalid token' });
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    // need to improve logic :)
    const { email, password } = req.body;
    const userRecord = await admin.auth().getUserByEmail(email);
    const customToken = await admin.auth().createCustomToken(userRecord.uid);

    res.json({ token: customToken });
  } catch (error) {
    console.error('Login Error:', error);
    res.status(401).json({ message: 'Login Error' });
  }
};
