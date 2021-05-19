import React from "react";
import "./TodoList.css";
import TodoListItem from "../TodoListItem/TodoListItem";

const TodoList = ({ todos }) => {
    const elements = todos.map((t) => {
        return (
            // <li><TodoListItem {...t} /></li>
            <li key={t.id} className="list-group-item">
                <TodoListItem label={t.label} important={t.important} />
            </li>
        );
    });
    return <ul className="list-group todo-list">{elements}</ul>;
};

export default TodoList;
