import modelTask from './model';
import { db } from '../../services/firebase';

const controllerTask = {};

controllerTask.getTasks = async (req, res) => {
  const tasks = await modelTask.getTasks(req.user.id);
  res.json({ data: tasks });
};

controllerTask.getTask = async (req, res) => {
  const { id } = req.params;

  const task = await modelTask.getTask(req.user.id, id);

  res.json({ task });
};

controllerTask.createTask = async (req, res) => {
  const data = {
    title: req.body.title,
    description: req.body.description,
    complete: req.body.complete,
  };

  await modelTask.createTask(req.user.id, data);

  res.status(201).json({});
};

controllerTask.updateTask = async (req, res) => {
  const { id } = req.params;

  const data = {
    title: req.body.title,
    description: req.body.description,
    complete: req.body.complete,
  };

  const isUpdate = await modelTask.updateTask(req.user.id, id, data);

  if (!isUpdate) return res.status(404).json({});
  return res.json({ data });
};

controllerTask.delete = async (req, res) => {
  const { id } = req.params;

  const isDelete = await modelTask.deleteTask(req.user.id, id);
  if (!isDelete) return res.status(404).json({});

  return res.status(201).json({});
};

export default controllerTask;
