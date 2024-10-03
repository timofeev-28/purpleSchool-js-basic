function newToDoList() {
    // объект с предыдущего задания без изменений

    const toDoListObj = {
        tasks: [],
        lastId: 0,

        checkEl(id) {
            return this.tasks.find(e => e.id === id);
        },

        addTask(title, priority) {
            if (!this.tasks) {
                this.tasks = [];
            }
            if (!this.lastId) {
                this.lastId = 0;
            }
            this.tasks.push({title, priority, id: ++this.lastId});
        },

        deleteTask(id) {
            if (!this.checkEl(id)) {
                return null;
            }

            this.tasks = this.tasks.filter(e => e.id !== id);
        },

        updateTask(id, title, priority) {
            if (!this.checkEl(id)) {
                return null;
            }

            let index = this.tasks.findIndex(e => e.id === id);
            this.tasks[index].title = title;
            this.tasks[index].priority = priority;
        },

        sortTask(data) {
            if (data.increase) {
                return this.tasks.sort((a, b) => a[data.criterion] - b[data.criterion]);
            }
            return this.tasks.sort((a, b) => b[data.criterion] - a[data.criterion]);
        }
    };

    return function() {
        return toDoListObj;
    }
};

// новый метод для добавления описания по id
function addDescr(id, descr) {
    if (!this.checkEl(id)) {
        return null;
    }
    let task = this.tasks.find(e => e.id === id);
    task.description = descr;
}

// список задач для одного пользователя;
const toDoList1 = newToDoList();
toDoList1().addTask('Купить коту еды', 8);
toDoList1().addTask('Помыть посуду', 7);
toDoList1().addTask('Ещё раз накормить кота', 10);
toDoList1().updateTask(1, 'Дать коту тапком', 9);
toDoList1().deleteTask(1);
// данные для вызова метода;
let data = {criterion: 'id', increase: true};
toDoList1().sortTask(data);
addDescr.apply(toDoList1(), [2, 'Описание задачи']);

// список задач для другого пользователя;
const toDoList2 = newToDoList();
toDoList2().addTask('Купить коту цветы', 5);
toDoList2().addTask('Помыть кота', 6);
toDoList2().addTask('Дать коту пендаля', 10);
toDoList2().updateTask(1, 'Ничего не дать коту', 3);
toDoList2().deleteTask(1);
toDoList2().sortTask(data);
addDescr.apply(toDoList2(), [2, 'Описание новой задачи']);
addDescr.apply(toDoList2(), [4, 'Описание новой задачи']);
addDescr.apply(toDoList2(), [3, 'Описание ещё одной задачи']);


console.log(toDoList1());
console.log(toDoList2());
