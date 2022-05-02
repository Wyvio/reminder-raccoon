import { TodoistApi } from "@doist/todoist-api-typescript";

const api = new TodoistApi('b7d45e930e39b1c97e8e90b8b3f907a47878e8ef')

const generateButton = document.getElementById("generateButton");

function generate() {
    const list1 = new Array();
    const list2 = new Array();

    api.getTasks({filter: '(overdue | today)'})
        .then((tasks) => 
        {
            for (const task of tasks) {
                list1.push(task.content);
            }
            console.log(list1);
        })
        .catch((error) => console.log(error))

    // api.getTasks({filter: '(tomorrow | 3 days)'})
    //     .then((tasks) => 
    //     {
    //         for (const task of tasks) {
    //             list2.push(task.content);
    //         }
    //         console.log(list2);
    //     })
    //     .catch((error) => console.log(error))
}