import { useTodosStore } from "../stores/useTodosStore"

const useTodos = () => {
    const todos = useTodosStore((state) => state.todos)
    const addTodo = useTodosStore((state) => state.addTodo)

    return { todos, addTodo }
}

export { useTodos }
