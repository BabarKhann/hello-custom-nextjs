import { useState } from "react";
import styles from "../styles/newpage.module.scss";

export default function NewPage() {
  const [username, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const login = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
    });

    const output = await res.json();

    console.log(output.token);
  };

  return (
    <form onSubmit={login}>
      <input
        type="text"
        name="username"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
      />
      <br />
      <input
        type="password"
        name="pass"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />

      <button type="submit">Login</button>
    </form>
  );
}

function Heading(props) {
  return <h2 className={styles.red}>{props.heading}</h2>;
}
