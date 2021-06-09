import "./App.css";
import { useState } from "react";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import Message from "./Message";

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
        <Message text={message} />
      ))}
    </div>
  );
}

export default App;
