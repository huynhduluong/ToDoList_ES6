import { callApi } from "./utils/callApi.js";
import Task from "./models/Task.js";

const getEle = (id) => document.getElementById(id);

const renderLayoutHTML = () => {
    let contentHTML = `
        <div class="card">
            <div class="card__header">
            <img src="./asset/img/X2oObC4.png" />
            </div>
            <!-- <h2>hello!</h2> -->
            <div class="card__body">
            <div class="card__content">
                <div class="card__title">
                <h2>My Tasks</h2>
                <p>September 9,2020</p>
                </div>
                <div class="card__add">
                <input
                    id="newTask"
                    type="text"
                    placeholder="Enter an activity..."
                />
                <button id="addItem">
                    <i class="fa fa-plus"></i>
                </button>
                </div>
                <div class="card__todo">
                <!-- Uncompleted tasks -->
                <ul class="todo" id="todo">
                    
                </ul>
                <!-- Completed tasks -->
                <ul class="todo" id="completed">
                    
                </ul>
                </div>
            </div>
            </div>
        </div>
    `;
    getEle("root").innerHTML = contentHTML;
}

const renderTaskHTML = (task) => {
    return `<li>
        <span>${task.textTodo}</span>
        <div class="buttons">
            <button class="remove">
            <i class="fa fa-trash-alt"></i>
            </button>
            <button class="complete">
            <i class="far fa-check-circle"></i>
            <i class="fas fa-check-circle"></i>
            </button>
        </div>
    </li> `;
}

const renderListTask = () => {
    callApi("TaskTodo", "GET", null)
        .then((result) => {
            let taskArray = result.data;
            let contentTodo = "";
            let contentCompleted = "";
            getEle("todo").innerHTML = "";
            getEle("completed").innerHTML = "";
            if (taskArray && taskArray.length > 0) {
                taskArray.map((task) => {
                    if (task.status == "todo") {
                        contentTodo += renderTaskHTML(task);
                        getEle("todo").innerHTML = contentTodo;
                    }else{
                        contentCompleted += renderTaskHTML(task);
                        getEle("completed").innerHTML = contentCompleted;
                    }
                });
            };
        })
        .catch((err) => {
            console.log(err);
        });
}

//render in the first loading page
renderLayoutHTML();
renderListTask();

getEle("addItem").addEventListener("click", () => {
    let task = getEle("newTask").value;
    if (textTodo === "") {
        alert("Please input task!");
        return;
    }

    let newTask = new Task("", textTodo, "todo" );
    callApi("TaskTodo", "POST", newTask)
        .then((result) => {
            alert("Add task success")
            renderListTask();
            getEle("newTask").value = "";
        })
        .catch((err) => {
            console.log(err);
        });
});



