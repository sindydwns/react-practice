import React, { useState } from "react";
import { uuid } from "uuidv4";
import { useInput } from "../hooks/formInput";
import menuStyle from "./SideNavigator.module.css";

function Todo({ value, deleteHandler }) {

    const [isEditable, setEditable] = useState(false);
    const { attr: text } = useInput(value.text);

    const enterKeyEvent = e => {
        if (e.key === "Enter") {
            console.log(isEditable);
            if (text.value === "") {
                deleteHandler();
            }
            else {
                setEditable(false);
            }
        }
    }

    return (
        <div>
            <button onClick={deleteHandler}>x</button>
            {
                isEditable ?
                    <input
                        {...text}
                        onKeyPress={enterKeyEvent}
                        onBlur={() => setEditable(false)}
                        autoFocus={true}>
                    </input> :
                    <span onClick={() => setEditable(true)}>{text.value}</span>
            }
        </div>
    )
}

function TodoList() {

    const [text, setText] = useState("");
    const [todoList, setTodoList] = useState({});

    const appendHandler = () => {
        const todo = { key: uuid(), text: text };
        appendTodoList(todo);
        setText("");
    }
    const appendTodoList = (todo) => {
        const key = todo.key;
        setTodoList({ ...todoList, [key]: todo });
    };
    const deleteTodoList = (todo) => {
        const copiedList = Object.assign({}, todoList);
        delete copiedList[todo.key];
        setTodoList(copiedList);
    };
    const enterKeyEvent = (e) => {
        if (e.key === "Enter" && text !== "") {
            appendHandler();
        }
    }

    return (
        <div>
            <input value={text} onChange={x => setText(x.target.value)} onKeyPress={enterKeyEvent}></input>
            <button onClick={appendHandler}>+</button>
            {Object.values(todoList).map((x) => <Todo
                key={x.key}
                value={x}
                deleteHandler={() => deleteTodoList(x)}
            />)}
        </div>
    )
}

function PracticeTodo() {

    return (
        <div className={menuStyle.main}>
            <h3>할 일 목록을 관리할 수 있습니다. (데이터는 어디에도 저장되지 않습니다.)</h3>
            <TodoList />
        </div>
    )
}

export default PracticeTodo;