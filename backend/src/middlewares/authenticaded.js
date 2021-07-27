import jwt from 'jsonwebtoken';
import daoAuth from '../components/auth/dao';

const isAuthenticaded = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) return res.status(401);

  jwt.verify(token, process.env.TOKEN, async (err, decoded) => {
    const { email } = decoded;

    const user = await daoAuth.getUserByEmail(email);
    if (!user.empty) {
      res.user = user;
      next();
    }
  });

  return false;
};

export default isAuthenticaded;
