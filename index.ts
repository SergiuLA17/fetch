import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";
interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

axios.get(url).then((response) => {
  const todo = response.data as Todo;

logTodo(todo.title,todo.id,todo.completed)
todoLog(todo.title,todo.id,todo.completed)

   
});

//arrow function
const logTodo = (title: string, id: number,completed: boolean) => {
    console.log(`
    The Todo with ID: ${id}
    Has a title of: ${title}
    Is it finished? ${completed}
`);
}
//normal function
function todoLog(title: string, id: number,completed: boolean){
    console.log(`
    The Todo with ID: ${id}
    Has a title of: ${title}
    Is it finished? ${completed}
`);
}

//different between arrow function and normal function
