import readline from "readline";
import {
  handleAddTask,
  handleUpdateTask,
} from "../Services/input_services/service.js";
import {
  deleteTaskFromFile,
  listAllTasks,
} from "../Services/file_services/service.js";
import { statusMap } from "../Constants.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const promptUser = (text) => {
  rl.question("", (answer) => {
    let command = answer.split(" ")[0];
    let params = answer.split(" ").filter((val, i) => i !== 0);
    switch (command) {
      case "add":
        try {
          handleAddTask(params.join(" "));
          promptUser();
        } catch (err) {
          console.log(err);
        }
        break;
      case "delete":
        deleteTaskFromFile(params[0]);
        promptUser();
        break;
      case "update":
        // try {
        //   handleUpdateTask(params);
        // } catch (err) {
        //   console.log(err);
        //   promptUser();
        // }
        handleUpdateTask(params);
        promptUser();
        break;
      case "mark":
        console.log(
          "\nPlease select the new status for your selected task, \n1. To-do\n2. In progress\n3. Done"
        );
        let id = params[0];
        rl.question("", (answer) => {
          let newStatus = statusMap[+answer];
          //updateStatusOfTaskToFile
        });
        promptUser();
        break;
      case "list":
        listAllTasks();
        promptUser();
        break;
      case "help":
        console.log("add <name of the task>");
        console.log("delete <id of the task>");
        console.log("update <id of the task> <name of the task>");
        console.log("mark <id of the task> <status of the task>");
        console.log("list");
        console.log("exit");
        promptUser();
        break;
      case "exit":
        rl.close();
        break;
    }
  });
};

const initialiseTaskTracker = () => {
  console.log(
    "Welcome to task tracker!! \nEnter a command or type 'help' for options:"
  );
  promptUser();
};

const onClose = () => {
  rl.on("close", () => {
    console.log("Goodbye!");
    process.exit(0);
  });
};

export { initialiseTaskTracker, onClose };
