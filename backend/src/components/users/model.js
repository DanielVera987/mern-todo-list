import userDao from './dao';

export const getUsers = (page, limit) => {
  return userDao.getUsers(page, limit);
}

export const getUser = (id) => {
  return userDao.getUser(id)
}

export const createUser = (user) => {
  return userDao.createUser(user);
}

export const updateUser = (id, { email, username }) =>  {
  return userDao.updateUser(id, { email, username });
}

export const deleteUser = (id) => {
  return userDao.deleteUser(id);
}