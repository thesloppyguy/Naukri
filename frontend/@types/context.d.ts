import { User } from '../src/interfaces/network'

export type ContextType = {
    todos: User;
    saveTodo: (todo: User) => void;
    updateTodo: (id: number) => void;
};