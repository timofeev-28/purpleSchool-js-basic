const ToDoList = {
    tasks: [
        {
            title: 'Накормить кота',
            id: 0,
            priority: 10,
        },
        {
            title: 'Помыть посуду',
            id: 1,
            priority: 1,
        },
        {
            title: 'Вынести мусор',
            id: 2,
            priority: 6,
        },
    ],

    addTask: function(title, priority) {
        let id = '';
        do {
            // делаем 12-значный id;
            for (let i = 0; i <= 5; i++) {
                id += String(Math.floor(Math.random() * (99 - 10) + 10));
            }
            id = Number(id);
        } while (this.tasks.find(e => e.id === id));


        this.tasks.push({title, id, priority});
    },

    deleteTask: function(id) {
        let index = this.tasks.findIndex(e => e.id === id);
        if (index === -1) {
            console.log('Элемент с таким индексом не найден');
            return null;
        }

        this.tasks.splice(index, 1);
    },

    updateTask: function(id, title, priority) {
        let index = this.tasks.findIndex(e => e.id === id);
        if (index === -1) {
            console.log('Элемент с таким индексом не найден');
            return null;
        }

        this.tasks[index].title = title;
        this.tasks[index].priority = priority;
    },

    sortTask: function(criterion, increase = true) {
        if (increase) {
            return this.tasks.sort((a, b) => a[criterion] - b[criterion]);
        }
        return this.tasks.sort((a, b) => b[criterion] - a[criterion]);
    }
};


ToDoList.addTask('Ещё раз накормить кота', 10);
ToDoList.addTask('Купить коту еды', 8);

ToDoList.deleteTask(3);
ToDoList.deleteTask(0);

ToDoList.updateTask(1, 'Дать коту тапком', 9);

// при вызове указать критерий сортировки - priority или id;
ToDoList.sortTask('priority'); // по возрастанию
ToDoList.sortTask('id', false);

console.log(ToDoList.tasks);
