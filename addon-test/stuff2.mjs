// test file, not using this rn, changed to approach import module or something
// i think this is same as tasks.mjs outside the folder
import { TodoistApi } from "@doist/todoist-api-typescript";

const api = new TodoistApi('b7d45e930e39b1c97e8e90b8b3f907a47878e8ef')

export function generate() {
    // if (!e.target.classList.contains("change-text")) {
    //   return;
    // }
  
    document.querySelector(".change-text").textContent = "LOADING";

    let changeText = document.querySelector(".change-text");
    changeText.textContent = "loading";
  
    // browser.tabs.create({
    //   url: "https://google.com"
    // });
    //let list2 = new Array();

    api.getTasks({filter: '(overdue | today)'})
        .then((tasks) => 
        {
            let list1 = new Array();
            for (const task of tasks) {
                list1.push(task.content);
            }
            console.log(list1);
            changeText.textContent = list1;
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