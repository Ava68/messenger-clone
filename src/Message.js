import { Card, CardContent, Typography } from "@material-ui/core";
import React from "react";
import "./Message.css";

// here username is prompt username and message is a object so message.username is username which is inside the message array
function Message({ message, username }) {
  const isUser = username === message.username;
  console.log(username);

  return (
    <div className={`message ${isUser && "message__user"}`}>
      <Card className={isUser ? "message__userCard" : "message__guestCard"}>
        <CardContent>
          <Typography color="white" variant="h5" component="h5">
            {message.username} : {message.text}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default Message;
