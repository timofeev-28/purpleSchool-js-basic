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
    },

    // новый метод для добавления описания по id
    addDescr(id, descr) {
        if (!this.checkEl(id)) {
        return null;
        }
        let task = this.tasks.find(e => e.id === id);
        task.description = descr;
    },
};
// ====================================================

// user1
const user1Obj = {
    checkEl(id) {
        return this.tasks.find(e => e.id === id);
    },
};

toDoListObj.addTask.apply(user1Obj, ['Купить коту еды', 8]);
toDoListObj.addTask.apply(user1Obj, ['Помыть посуду', 7]);
toDoListObj.addTask.apply(user1Obj, ['Ещё раз накормить кота', 10]);
toDoListObj.updateTask.call(user1Obj, 1, 'Дать коту тапком', 9);
toDoListObj.deleteTask.call(user1Obj, 3);
toDoListObj.addDescr.apply(user1Obj, [2, 'Описание задачи']);
// данные для вызова метода;
let data = {criterion: 'id', increase: true};
toDoListObj.sortTask.call(user1Obj, data);

// *************************
// user2
const user2Obj = {
    checkEl(id) {
        return this.tasks.find(e => e.id === id);
    },
};

toDoListObj.addTask.apply(user2Obj, ['Купить коту цветы', 5]);
toDoListObj.addTask.apply(user2Obj, ['Помыть кота', 6]);
toDoListObj.addTask.apply(user2Obj, ['Дать коту пендаля', 10]);
toDoListObj.updateTask.call(user2Obj, 1, 'Ничего не дать коту', 3);
toDoListObj.deleteTask.call(user2Obj, 3);
toDoListObj.addDescr.apply(user2Obj, [2, 'Описание задачи']);
toDoListObj.addDescr.apply(user2Obj, [1, 'Описание ещё одной задачи']);
toDoListObj.sortTask.call(user2Obj, data);
// *************************

console.log(user1Obj);
console.log(user2Obj);
