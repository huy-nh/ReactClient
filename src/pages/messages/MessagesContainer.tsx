import { Alert, Snackbar } from "@mui/material";

import EventBus from "pages/container/EventBus";
import React from "react";
import { v4 as uniqueId } from "uuid";

class MessagesContainer extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);

    this.state = {
      messages: [],
    };
  }

  componentDidMount() {
    EventBus.subscribe(this, "messages.add", this.show);
  }

  componentWillUnmount() {
    EventBus.unsubscribe(this);
  }

  handleClose = (id?: string, reason?: any) => {
    if (reason === "clickaway") {
      return;
    }

    this.setState((state) => ({
      messages: state.messages.filter((x: any) => x.id !== id),
    }));
  };

  show = ({ message, type }: any) => {
    const newMessage = { message, type, open: true, id: uniqueId() };

    this.setState((state) => ({ messages: [...state.messages, newMessage] }));
  };

  render() {
    const { messages } = this.state;

    return (
      <>
        {messages &&
          messages.length > 0 &&
          messages.map((message: any, index: any) => (
            <Snackbar
              key={message.id}
              open
              autoHideDuration={3000}
              onClose={(event, reason) => this.handleClose(message.id, reason)}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
            >
              <Alert
                variant="filled"
                onClose={() => this.handleClose(message.id)}
                severity={message?.type || "info"}
                style={{ marginTop: index * 60 }}
              >
                {message?.message}
              </Alert>
            </Snackbar>
          ))}
      </>
    );
  }
}

interface IProps {}

interface IState {
  messages: any;
}

export default MessagesContainer;
