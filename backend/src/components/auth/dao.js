import { db } from '../../services/firebase';

const daoAuth = {};

daoAuth.registerUser = async (userObject) => {
  const user = await db.collection('users').doc().set(userObject);
  return user;
};

daoAuth.getUserByEmail = async (email) => {
  const user = await db.collection('users').where('email', '==', email).get();
  return user;
};

export default daoAuth;
