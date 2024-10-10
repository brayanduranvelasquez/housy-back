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

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    console.log('alguien se logueo');
    const userCredential = await admin.auth().getUserByEmail(email);
    // In a real-world scenario, you'd verify the password here
    // For demo purposes, we're just checking if the user exists
    const token = await admin.auth().createCustomToken(userCredential.uid);
    res.json({ token });
  } catch (error) {
    next(error);
  }
};
