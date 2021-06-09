import "./App.css";
import { useEffect, useState } from "react";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import Message from "./Message";

function App() {
  const [input, setInput] = useState();
  const [messages, setMessages] = useState([
    { username: "Avadhesh", text: "whats up" },
    { username: "prem", text: "Hi guys" },
  ]);
  const [username, setUsername] = useState("");

  //useEffect = run code on a condition
  useEffect(() => {
    //run a code here...
    // if its [] blank then this code runs when the app component loads
    // if we have a variable like input then this code will run every time as input variable changes
    setUsername(prompt("please enter your name"));
  }, []); //condition

  const sendMessage = (e) => {
    e.preventDefault();
    setMessages([...messages, { username: username, text: input }]);
    setInput("");
  };

  return (
    <div className="App">
      <h1>hello </h1>
      <h2>Welcome {username}</h2>

      <form>
        <FormControl>
          <InputLabel>Enter a Message</InputLabel>
          <Input value={input} onChange={(e) => setInput(e.target.value)} />
          <Button
            disabled={!input}
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessage}
          >
            Send Message
          </Button>
        </FormControl>
      </form>

      {messages.map((message) => (
        <Message username={message.username} text={message.text} />
      ))}
    </div>
  );
}

export default App;
