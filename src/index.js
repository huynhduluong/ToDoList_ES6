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
                    <li>
                    <span>Đi ngủ</span>
                    <div class="buttons">
                        <button class="remove">
                        <i class="fa fa-trash-alt"></i>
                        </button>
                        <button class="complete">
                        <i class="far fa-check-circle"></i>
                        <i class="fas fa-check-circle"></i>
                        </button>
                    </div>
                    </li>
                </ul>
                <!-- Completed tasks -->
                <ul class="todo" id="completed">
                    <li>
                    <span>Ăn sáng</span>
                    <div class="buttons">
                        <button class="remove">
                        <i class="fa fa-trash-alt"></i>
                        </button>
                        <button class="complete">
                        <i class="far fa-check-circle"></i>
                        <i class="fas fa-check-circle"></i>
                        </button>
                    </div>
                    </li>
                </ul>
                </div>
            </div>
            </div>
        </div>
    `;
    getEle("root").innerHTML = contentHTML;
}

renderLayoutHTML();


