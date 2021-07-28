import { db } from '../../services/firebase';

const daoTask = {};

daoTask.getTasks = async () => {
  const res = await db.collection('tasks').get();
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

daoTask.getTask = async (id) => {
  const task = await db.collection('tasks').doc(id).get();
  if (!task.exists) {
    return false;
  }
  return task.data();
};

daoTask.createTask = async (data) => {
  const newTask = await db.collection('tasks').doc().set(data);
  return newTask;
};

daoTask.updateTask = async (id, data) => {
  const updateTask = await db.collection('tasks').doc(id).update(data);
  return updateTask;
};

daoTask.deleteTask = async (id) => {
  await db.collection('tasks').doc(id).delete();
};

export default daoTask;
