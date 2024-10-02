const ToDoList = {
    tasks: [
        {
            title: 'Накормить кота',
            priority: 10,
            id: 0,
        },
        {
            title: 'Помыть посуду',
            priority: 1,
            id: 1,
        },
        {
            title: 'Вынести мусор',
            priority: 6,
            id: 2,
        },
    ],

    lastId: 2,

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


ToDoList.addTask('Ещё раз накормить кота', 10);
ToDoList.addTask('Купить коту еды', 8);

// ToDoList.deleteTask(3);
ToDoList.deleteTask(0);

ToDoList.updateTask(1, 'Дать коту тапком', 9);

// критерии: id или priority;
let data = {criterion: 'id', increase: true};
ToDoList.sortTask(data); // по возрастанию

console.log(ToDoList.tasks);
