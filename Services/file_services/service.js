import fs from "node:fs";

const addTaskToFile = (task) => {
  fs.readFile("./tasks.json", "utf-8", (err, data) => {
    if (err) {
      console.log("File does not exists yet, creating a new one for you");
      fs.writeFile("./tasks.json", "[]", (err) => {
        if (err) {
          console.log(err);
        }
        console.log("File created successfully!");
        addTaskToFile(task);
      });
    } else {
      let tasks = JSON.parse(data);
      let idForNewTask =
        tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1;
      tasks.push({ ...task, id: idForNewTask });
      fs.writeFile("./tasks.json", JSON.stringify(tasks), (err) => {
        if (err) {
          console.log(err);
        }
        console.log("Task added successfully!");
      });
    }
  });
};

const updateTaskToFile = (payload) => {
  fs.readFile("./tasks.json", "utf-8", (err, data) => {
    if (err) {
      console.log(
        "File does not exists yet, Please add a task to update existing ones"
      );
    } else {
      let tasks = JSON.parse(data);
      let updatedTasks = tasks.map((task) => {
        if (task.id === +payload.id) {
          return {
            ...task,
            description: payload.newName,
          };
        } else return task;
      });
      fs.writeFile("./tasks.json", JSON.stringify(updatedTasks), (err) => {
        if (err) {
          console.log(err);
        }
        console.log("Task updated successfully!");
      });
    }
  });
};

const deleteTaskFromFile = (id) => {
  fs.readFile("./tasks.json", "utf-8", (err, data) => {
    if (err) {
      console.log(
        "File does not exists yet, Please add a task to update existing ones"
      );
    } else {
      let tasks = JSON.parse(data);
      console.log(tasks, id, "REHUL");
      let updatedTasks = tasks.filter((data) => data.id != +id);
      fs.writeFile("./tasks.json", JSON.stringify(updatedTasks), (err) => {
        if (err) {
          console.log(err);
        }
        console.log("Task deleted successfully!");
      });
    }
  });
};

const listAllTasks = () => {
  fs.readFile("./tasks.json", "utf-8", (err, data) => {
    if (err) {
      console.log("No data found, Please add a task to view tasks");
    } else {
      let output = JSON.parse(data);
      output.forEach((task) => {
        console.log(task.description);
      });
    }
  });
};
export { addTaskToFile, listAllTasks, updateTaskToFile, deleteTaskFromFile };
