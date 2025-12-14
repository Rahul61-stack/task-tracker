import readline from "readline";
import { handleAddTask, handleUpdateTask } from "./services.js";
import {
  deleteTaskFromFile,
  listAllTasks,
} from "../file_services/fileService.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const promptUser = () => {
  rl.question("", (answer) => {
    let command = answer.split(" ")[0];
    let params = answer.split(" ").filter((val, i) => i !== 0);
    switch (command) {
      case "add":
        try {
          handleAddTask(params.join(" "));
        } catch (err) {
          console.log(err);
          promptUser();
        }
        break;
      case "delete":
        deleteTaskFromFile(params[1]);
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
