import React from 'react';
import './App.css';

import TodoList from "../TodoList/TodoList";
import AppHeader from "../AppHeader/AppHeader";
import SearchPanel from "../SearchPanel/SearchPanel";
import ItemStatusFilter from "../ItemStatusFilter/ItemStatusFilter";

const App = () => {

    const TodoData = [
        { id: 1, label: "Drink coffe", important: false },
        { id: 2, label: "Make App", important: true },
        { id: 3, label: "Have a lunch", important: false },
    ];

    return (
        <div className="todo-app">
            {/* <span>{(new Date()).toISOString()}</span> */}
            <AppHeader />
            <div className="top-panel d-flex">

                <SearchPanel />
                <ItemStatusFilter />
            </div>
            <TodoList todos={TodoData} />
        </div>
    );
}

export default App;