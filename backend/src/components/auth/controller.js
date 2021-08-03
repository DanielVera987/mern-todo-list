import crypto from 'crypto';
import jwt from 'jsonwebtoken';

import daoAuth from './dao';

const signToken = (data) =>
  jwt.sign({ email: data }, process.env.TOKEN, {
    expiresIn: 60 * 60 * 24 * 365,
  });

const controllerAuth = {};

controllerAuth.register = async (req, res) => {
  const { username, email, password } = req.body;

  let user = await daoAuth.getUserByEmail(email);

  if (!user.empty) {
    res.json({ message: 'User already exists' });
    return;
  }

  const buf = crypto.randomBytes(16);
  const newSalt = buf.toString('base64');
  const key = crypto.pbkdf2Sync(password, newSalt, 100000, 64, 'sha1');
  const encryptedPassword = key.toString('base64');

  user = await daoAuth.registerUser({
    email,
    username,
    salt: newSalt,
    password: encryptedPassword,
  });

  res.json({
    user: {
      email,
      username,
    },
  });
};

controllerAuth.login = async (req, res) => {
  const { email, password } = req.body;

  const doc = await daoAuth.getUserByEmail(email);

  if (doc.empty) {
    res.json({ message: 'Usuer is not register' });
    return;
  }

  let user;
  doc.forEach((el) => {
    user = el.data();
  });

  const key = crypto.pbkdf2Sync(password, user.salt, 100000, 64, 'sha1');
  const encryptedPassword = key.toString('base64');

  if (user.password === encryptedPassword) {
    const token = signToken(user.email);
    res.json({
      token,
      user: {
        email: user.email,
        username: user.username,
      },
    });
    return;
  }

  res.status(404).json({ message: 'email or password are wrong' });
};

export default controllerAuth;
