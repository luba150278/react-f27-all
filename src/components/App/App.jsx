import { React, useEffect, useReducer, useState } from "react";
import styles from "./App.module.css";
import { initialState, reducer, vinIS, vinReducer } from "../../share/reduser";
import { random } from "../../share/random";
const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [state1, dispatch1] = useReducer(vinReducer, vinIS);
  const [isComputer, setIsComputer] = useState(false);
  console.log(state1);
  function hendlerChange(e) {
    if (!isComputer && !state1.isVin) {
      const name = e.target.name;
      const row = Number(name.slice(0, 1));
      const col = Number(name.slice(1));
      const x = state[row][col];
      console.log(x);
      if (!x) {
        console.log("fdfds");
        e.target.value = "X";
        dispatch({ type: "save", payload: { row, col, val: "X" } });
        dispatch1({ type: "check", payload: { val: "X", arr: state } });
        setIsComputer(true);
      }
    }
  }
  function reset() {
    dispatch({ type: "reset" });
    dispatch1({ type: "reset" });
    setIsComputer(false);
    document.querySelectorAll("input").forEach((item) => {
      item.value = null;
    });
    console.log(state);
  }
  useEffect(() => {
    if (isComputer && !state1.isVin) {
      let isFull = false;
      let count = 0;
      while (!isFull && count < 9) {
        const res = random();
        const row = res[0];
        const col = res[1];
        if (!state[row][col]) {
          isFull = true;
          dispatch({ type: "save", payload: { row, col, val: "O" } });
          document.querySelectorAll("input").forEach((item) => {
            const x = row.toString() + col.toString();
            if (item.name === x) {
              item.value = "O";
            }
          });
          setIsComputer(false);
        }
        count++;
      }
      dispatch1({ type: "check", payload: { val: "O", arr: state } });
    }
  }, [isComputer, state, state1]);
  return (
    <>
      {state1.isVin && (
        <p>{state1.who === "X" ? "Перемогла людина" : "Переміг пк"}</p>
      )}
      <form className={styles.wrap}>
        <input className={styles.input} type="text" name="00" onClick={(e) => hendlerChange(e)} />
        <input className={styles.input} type="text" name="01" onClick={(e) => hendlerChange(e)} />
        <input className={styles.input} type="text" name="02" onClick={(e) => hendlerChange(e)} />
        <input className={styles.input} type="text" name="10" onClick={(e) => hendlerChange(e)} />
        <input className={styles.input} type="text" name="11" onClick={(e) => hendlerChange(e)} />
        <input className={styles.input} type="text" name="12" onClick={(e) => hendlerChange(e)} />
        <input className={styles.input} type="text" name="20" onClick={(e) => hendlerChange(e)} />
        <input className={styles.input} type="text" name="21" onClick={(e) => hendlerChange(e)} />
        <input className={styles.input} type="text" name="22" onClick={(e) => hendlerChange(e)} />
      </form>
      <button onClick={() => reset()}>reset</button>
    </>
  );
};

export default App;
