import { Card, CardContent, Typography } from "@material-ui/core";
import React, { forwardRef } from "react";
import "./Message.css";

// here username is prompt username and message is a object so message.username is username which is inside the message array
const Message = forwardRef(({ message, username }, ref) => {
  const isUser = username === message.username;
  console.log(username);

  return (
    <div ref={ref} className={`message ${isUser && "message__user"}`}>
      <Card className={isUser ? "message__userCard" : "message__guestCard"}>
        <CardContent>
          <Typography color="white" variant="h5" component="h5">
            {!isUser && `${message.username || "Unknown user"} says:`}{" "}
            {message.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
});

export default Message;
