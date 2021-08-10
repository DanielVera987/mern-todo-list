import '@babel/polyfill';
import { db } from '../../services/firebase';

const daoAuth = {};

daoAuth.registerUser = async (obj) => {
  const user = await db.collection('users').doc().set(obj);
  return user;
};

daoAuth.getUserByEmail = async (email) => {
  let res = db.collection('users');
  res = await res.where('email', '==', email).get();

  return res;
};

export default daoAuth;
