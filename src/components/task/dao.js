import { db } from '../../services/firebase';

const daoTask = {};

daoTask.getTasks = async (userId) => {
  let res = await db.collection('users').doc(userId).collection('tasks').get();

  const tasks = [];

  res.forEach((doc) => {
    tasks.push({
      id: doc.id,
      title: doc.data().title,
      description: doc.data().description,
      complete: doc.data().complete,
    });
  });

  return tasks;
};

daoTask.getTask = async (userId, id) => {
  const task = await db.collection('users').doc(userId).collection('tasks').doc(id).get();
  if (!task.exists) {
    return false;
  }
  return task.data();
};

daoTask.createTask = async (userId, data) => {
  const newTask = await db.collection('users').doc(userId).collection('tasks').doc().set(data);
  return newTask;
};

daoTask.updateTask = async (userId, id, data) => {
  const isExist = await daoTask.getTask(userId, id);
  if (!isExist) return false;

  const updateTask = await db.collection('users').doc(userId).collection('tasks').doc(id).update(data);
  return updateTask;
};

daoTask.deleteTask = async (userId, id) => {
  const isExist = await daoTask.getTask(userId, id);
  if (!isExist) return false;

  await db.collection('users').doc(userId).collection('tasks').doc(id).delete();
};

export default daoTask;
