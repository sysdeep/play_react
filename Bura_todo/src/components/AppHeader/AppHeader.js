import React from 'react';
import "./AppHeader.css";

const AppHeader = () => {
    const toDo = 3;
    const done = 4;

    return (
        <div className="app-header d-flex">
            <h1>My ToDo list</h1>
            <h2>{toDo} more to do, {done} done</h2>

        </div>
    );
}

export default AppHeader