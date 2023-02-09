"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var url = "https://jsonplaceholder.typicode.com/todos/1";
axios_1.default.get(url).then(function (response) {
    var todo = response.data;
    logTodo(todo.title, todo.id, todo.completed);
    todoLog(todo.title, todo.id, todo.completed);
});
var logTodo = function (title, id, completed) {
    console.log("\n    The Todo with ID: ".concat(id, "\n    Has a title of: ").concat(title, "\n    Is it finished? ").concat(completed, "\n"));
};
function todoLog(title, id, completed) {
    console.log("\n    The Todo with ID: ".concat(id, "\n    Has a title of: ").concat(title, "\n    Is it finished? ").concat(completed, "\n"));
}
//# sourceMappingURL=index.js.map