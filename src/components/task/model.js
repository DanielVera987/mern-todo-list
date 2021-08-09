import daoTask from './dao';

const modelTask = {};

modelTask.getTasks = (userId) => daoTask.getTasks(userId);

modelTask.getTask = (userId, id) => daoTask.getTask(userId, id);

modelTask.createTask = (userId, data) => daoTask.createTask(userId, data);

modelTask.updateTask = (userId, id, data) => {
  return daoTask.updateTask(userId, id, data)
};

modelTask.deleteTask = (userId, id) => daoTask.deleteTask(userId, id);

export default modelTask;
