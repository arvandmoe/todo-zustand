import create from 'zustand'
import { Todo } from '../models'

interface TodoState {
    todos: Todo[],
    addTodo: (todo: Todo) => void
}

const initialTodos: Todo[] = [
    {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    },
    {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
    },
    {
        "userId": 1,
        "id": 3,
        "title": "fugiat veniam minus",
        "completed": false
    },
    {
        "userId": 1,
        "id": 4,
        "title": "et porro tempora",
        "completed": true
    },
]

const useTodosStore = create<TodoState>((set) => ({
    todos: initialTodos,
    addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] }))
}))


export { useTodosStore }