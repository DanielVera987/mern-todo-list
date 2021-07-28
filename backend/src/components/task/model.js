import daoTask from './dao';

const modelTask = {};

modelTask.getTasks = () => daoTask.getTasks();

modelTask.getTask = (id) => daoTask.getTask(id);

modelTask.createTask = (data) => daoTask.createTask(data);

modelTask.updateTask = (id, data) => daoTask.updateTask(id, data);

modelTask.deleteTask = (id) => daoTask.deleteTask(id);

export default modelTask;
