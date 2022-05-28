import { TodoistApi } from "@doist/todoist-api-typescript";

export function generate() {
    document.addEventListener("click", function (e) {
        document.querySelector(".change-text").textContent = "LOADING";
        const api = new TodoistApi('b7d45e930e39b1c97e8e90b8b3f907a47878e8ef')
        const tasks = api.getTasks({ filter: '(overdue | today)' })
            .then((tasks) => {
                let list1 = new Array();
                for (const task of tasks) {
                    list1.push(task.content);
                }
                //console.log(list1);
                return list1;
            })
            .catch((error) => {
                //console.log(error);
                return error;
            })

        document.querySelector(".change-text").textContent = tasks;
    })
}
