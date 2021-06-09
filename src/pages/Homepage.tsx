import React, { useEffect, useState } from "react";
import "../app/components/Task.css";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteTaskAction,
  getTasksAction,
} from "../app/features/task/taskAsyncActions";
import { RootState } from "../store/reducers";
import FormikForm from "../app/components/Formik-Forms/formik-form";
import {
  markCompletedAction,
  updateTasksAction,
} from "../app/features/task/taskSlice";

const Homepage = () => {
  const dispatch = useDispatch();
  const { tasks, loading } = useSelector((state: RootState) => state.task);

  /*local state*/

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    dispatch(getTasksAction());

    // const { data } = await getTaskAxios();
    // console.log(JSON.stringify(data, null, 2));
  };

  return (
    <>
      <section className={"MainTitle"}>
        <h1>My Todos</h1>
      </section>

      <section className={"MainBody"}>
        <FormikForm />
      </section>

      <section className={"SecondBody"}>
        <div>
          {tasks.map((t) => (
            <div className={"SecondBodyTodo"} key={t.id}>
              <div
                style={{
                  textDecoration: t.isComplete ? "line-through" : "",
                }}
              >
                <div>
                  <article className={"TodoList"}>{t.name}</article>
                </div>

                <div>
                  <article className={"TodoDescription"} style={{}}>
                    {t.description}
                  </article>
                </div>
              </div>

              <div className={"Buttons"}>
                <div>
                  {!t.isComplete && (
                    <button
                      id="button-complete"
                      onClick={() => {
                        dispatch(markCompletedAction(t));
                      }}
                    >
                      Complete
                    </button>
                  )}
                </div>

                <article>
                  <button
                    id="button-delete"
                    onClick={() => dispatch(deleteTaskAction(t.id))}
                  >
                    Delete
                  </button>
                </article>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Homepage;