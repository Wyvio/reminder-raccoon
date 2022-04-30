import { TodoistApi } from "@doist/todoist-api-typescript";

const api = new TodoistApi('b7d45e930e39b1c97e8e90b8b3f907a47878e8ef')

api.getTasks({filter: '(today | tomorrow)'})
    .then((tasks) => 
    {
        for (const task of tasks) { console.log(task.content); }
    })
    .catch((error) => console.log(error))