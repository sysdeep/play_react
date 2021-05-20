import React from "react";
import "./TodoList.css";
import TodoListItem from "../TodoListItem/TodoListItem";




const TodoList = ({ todos, onDeleted, onToggleImportant, onToggleDone }) => {
    const elements = todos.map((t) => {
        return (

            <li key={t.id} className="list-group-item">
                <TodoListItem
                    label={t.label}
                    important={t.important}
                    done={t.done}
                    onDeleted={() => onDeleted(t.id)}
                    onToggleImportant={() => onToggleImportant(t.id)}
                    onToggleDone={() => onToggleDone(t.id)}
                />
            </li>

        );
    });
    return <ul className="list-group todo-list">{elements}</ul>;
};

export default TodoList;
