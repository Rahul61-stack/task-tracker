import { addTaskToFile, updateTaskToFile } from "../file_services/service.js";

const handleAddTask = (taskName) => {
  let payload = {
    //FOR TESTING SETTING TO 1
    description: taskName,
    status: "todo",
    createdAt: new Date(),
    updatedAt: "-",
  };
  addTaskToFile(payload);
};

const handleUpdateTask = (params) => {
  const payload = {
    id: params[0],
    newName: params.filter((val, i) => i !== 0).join(" "),
  };
  console.log(payload);
  updateTaskToFile(payload);
};

export { handleAddTask, handleUpdateTask };
