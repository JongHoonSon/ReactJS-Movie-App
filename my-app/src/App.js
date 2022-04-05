import { useState, useEffect } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(toDo);
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]); // ...currentArray는 기존에 있던 값
    // 상태 값이 Array인 것을 상태 관리할 때는 push 또는 = [] 처럼
    // 직접적으로 값을 넣지 않고,
    // 해당 Array를 새로운 Array로 변경한다.
    setToDo("");
  };
  console.log(toDos);
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
    </div>
  );
}

export default App;
