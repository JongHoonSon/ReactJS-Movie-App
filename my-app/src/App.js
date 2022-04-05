import Button from "./Button";
import styles from "./App.module.css";

function App() {
  return (
    <div>
      <h1 className={styles.btn}>Welcome back!</h1>
      <Button text={"Continue"} />
      <Button text={"Continue"} />
    </div>
  );
}

export default App;
