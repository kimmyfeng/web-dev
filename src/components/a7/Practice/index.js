import React from "react";
import { Link } from "react-router-dom";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoItem from "./Todo/TodoItem";
import TodoList from "./Todo/TodoList";
import ReduxExamples from "./ReduxExamples/components";

const Practice = () => {
  return (
    <>
      <h1>Practice</h1>
      <Link to="/a7/twitter/home">Build</Link>
      <ReduxExamples />
      {/* <TodoItem />
      <TodoList />
      <ConditionalOutput />
      <Styles />
      <Classes /> */}
    </>
  );
};

export default Practice;
