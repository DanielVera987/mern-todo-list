import jwt from 'jsonwebtoken';
import daoAuth from '../components/auth/dao';

const isAuthenticaded = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }

  try {
    if (!token) throw new Error('Not Authorization1');

    const verify = await jwt.verify(token, process.env.TOKEN);

    if (!verify) throw new Error('Not Authorization2');

    const { email } = verify;

    let user = await daoAuth.getUserByEmail(email);

    if (user.empty) throw new Error('Not Authorization3');

    user.forEach((doc) => {
      user = {
        id: doc.id,
        email: doc.data().email,
        username: doc.data().username,
      };
    });

    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ error: err.message });
  }
};

export default isAuthenticaded;
