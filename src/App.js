import "./App.css";
import { useState } from "react";

function App() {
  const [input, setInput] = useState();
  const [messages, setMessages] = useState(["hello", "Hi", "Whats up"]);

  const sendMessage = (e) => {
    e.preventDefault();
    setMessages([...messages, input]);
    setInput("");
  };
  console.log(messages);

  return (
    <div className="App">
      <h1>hello </h1>

      <form>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button type="submit" onClick={sendMessage}>
          Send Message
        </button>
      </form>

      {messages.map((message) => (
        <p>{message}</p>
      ))}
    </div>
  );
}

export default App;
