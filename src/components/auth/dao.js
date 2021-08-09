import { db } from '../../services/firebase';

const daoAuth = {};

daoAuth.registerUser = async (userObject) => {
  const user = await db.collection('users').doc().set(userObject);
  return user;
};

daoAuth.getUserByEmail = async (email) => {
  let res = db.collection('users');
  res = await res.where('email', '==', email).get();

  return res;
};

export default daoAuth;
