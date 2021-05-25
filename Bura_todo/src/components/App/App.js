import React from 'react';
import './App.css';

import TodoList from "../TodoList/TodoList";
import AppHeader from "../AppHeader/AppHeader";
import SearchPanel from "../SearchPanel/SearchPanel";
import ItemStatusFilter from "../ItemStatusFilter/ItemStatusFilter";
import ItemAddForm from "../ItemAddForm/ItemAddForm";

/**
 * 
 * @returns 
 */
class App extends React.Component {

    constructor() {
        super()
        this.lastId = 0;

        this.state = {
            todoData: [
                this.__createTodoItem("Drink coffe"),
                this.__createTodoItem("Make App"),
                this.__createTodoItem("Have a lunch"),
                // { id: 1, label: "Drink coffe", important: false },
                // { id: 2, label: "Make App", important: true },
                // { id: 3, label: "Have a lunch", important: false },
            ],

            searchTerm: "",
            filterType: "all",      // all, active, done
        }


    }


    __createTodoItem(label) {

        this.lastId++;
        return {
            id: this.lastId,
            label: label,
            important: false,
            done: false,
        }

    }

    __toggleProperty(arr, id, propName) {
        let idx = arr.findIndex(r => r.id === id);
        let item = arr[idx];


        let new_item = {
            ...item,
            [propName]: !item[propName]
        }

        return [
            ...arr.slice(0, idx),
            new_item,
            ...arr.slice(idx + 1)
        ]

    }


    onDelete(id) {
        this.setState(({ todoData }) => {
            return {
                todoData: todoData.filter(r => r.id !== id)
            }
        })
    }

    onAddItem(text) {
        this.setState(({ todoData }) => {
            let item = this.__createTodoItem(text);
            return {
                todoData: [...todoData, item],

            }
        })

        this.lastId = this.lastId + 1;
    }


    onToggleImportant(id) {
        
        this.setState(({ todoData }) => {
            let new_todos = this.__toggleProperty(todoData, id, "important");

            return {
                todoData: new_todos
            }
        })
    }

    onToggleDone(id) {
        this.setState(({ todoData }) => {

            let new_todos = this.__toggleProperty(todoData, id, "done");

            return {
                todoData: new_todos
            }

            //--- теряет последовательность
            // let item = todoData.find(r => r.id === id);
            // let without = todoData.filter(r=> r.id !== id)

            // let new_item = {
            //     ...item,
            //     done: !item.done
            // }

            // return {
            //     todoData: [...without, new_item]
            // }

        })
    }

    onFilterType(ftype){
        this.setState({
            filterType: ftype
        });
    }

    onFilterSearch(term){
        let lower_term = term.toLowerCase();

        this.setState({
            searchTerm: lower_term
        })

    }



    render() {
        const { todoData, searchTerm, filterType } = this.state
        const doneCount = todoData.filter(r => r.done === true).length;
        const todoCount = todoData.length - doneCount;


        const filteredTodo = todoData
        .filter(todo => {
            if(filterType === "done"){
                return todo.done === true;
            }

            if(filterType === "active"){
                return todo.done !== true;
            }

            return todo;
        })
        .filter(todo => {
            if(searchTerm.length === 0)  return todo;
            
            let lower_label = todo.label.toLowerCase();
            return lower_label.indexOf(searchTerm) > -1;
        })

        return (
            <div className="todo-app">

                {/* {this.state.todoData} */}

                {/* <span>{(new Date()).toISOString()}</span> */}
                <AppHeader toDo={todoCount} done={doneCount} />
                <div className="top-panel d-flex">

                    <SearchPanel 
                        onFilterSearch={(value) => this.onFilterSearch(value)}
                        />
                    <ItemStatusFilter 
                        onFilterType={(ftype) => this.onFilterType(ftype)}
                        ftype={filterType}
                        />
                </div>
                <TodoList
                    todos={filteredTodo}
                    onDeleted={(id) => this.onDelete(id)}
                    onToggleImportant={(id) => this.onToggleImportant(id)}
                    onToggleDone={(id) => this.onToggleDone(id)}
                />


                <ItemAddForm onAddItem={(text) => this.onAddItem(text)} />
            </div>
        );
    }

}

export default App;