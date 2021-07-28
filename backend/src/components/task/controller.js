import modelTask from './model';

const controllerTask = {};

controllerTask.getTasks = async (req, res) => {
  const tasks = await modelTask.getTasks();
  res.json({ data: tasks });
};

controllerTask.getTask = async (req, res) => {
  const { id } = req.params;

  const task = await modelTask.getTask(id);

  res.json({ task });
};

controllerTask.createTask = async (req, res) => {
  const data = {
    title: req.body.title,
    description: req.body.description,
    complete: req.body.complete,
  };

  await modelTask.createTask(data);

  res.status(201).json({});
};

controllerTask.updateTask = async (req, res) => {
  const { id } = req.params;

  const data = {
    title: req.body.title,
    description: req.body.description,
    complete: req.body.complete,
  };

  await modelTask.updateTask(id, data);

  res.json({ data });
};

controllerTask.delete = async (req, res) => {
  const { id } = req.params;

  await modelTask.deleteTask(id);

  res.status(201).json({});
};

export default controllerTask;
